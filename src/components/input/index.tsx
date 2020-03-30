import React, { FocusEvent, KeyboardEvent, forwardRef } from "react"
import classNames from "classnames"

import WithValidationError from "../fieldHelpers/withValidationError"
import WithLabel from "../fieldHelpers/withLabel"
import WithFloatingLabel from "../fieldHelpers/withFloatingLabel"
import WithClearButton from "../fieldHelpers/withClearButton"
import HintText from "../fieldHelpers/hintText"
import InputField from "./inputField"

interface InputProps {
  name: string
  value: string | number
  placeholder?: string
  error?: string
  hint?: string
  disabled?: boolean
  autoFocus?: boolean
  hasClearButton?: boolean
  mode: "text" | "numeric" | "decimal" | "tel" | "email"
  onChange: <T extends { target: { name: string; value: string | number } }>(
    e: T
  ) => void
  onBlur?: (e: FocusEvent<any>) => void
  onKeyDown?: (e: KeyboardEvent<any>) => void
  onFocus?: (e: FocusEvent<any>) => void
  step?: number
  min?: number
  max?: number
  className?: string
  debounce?: number
}

interface PopupLabelProps extends InputProps {
  labelText?: string
  renderLabelPopup?: () => JSX.Element
  required?: boolean
}

interface FloatingLabelProps extends InputProps {
  labelText?: string
  floatingLabel?: boolean
}

type Props = PopupLabelProps | FloatingLabelProps

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      name,
      value,
      placeholder,
      labelText,
      error,
      hint,
      disabled = false,
      hasClearButton = false,
      autoFocus = false,
      mode,
      onChange,
      onBlur,
      onFocus,
      onKeyDown,
      step,
      min,
      max,
      className,
      debounce,
      ...rest
    },
    ref
  ) => {
    const required =
      "floatingLabel" in rest || ("required" in rest ? rest.required : null)
    const labelProps =
      "floatingLabel" in rest
        ? { floating: rest.floatingLabel }
        : "renderLabelPopup" in rest || "required" in rest
        ? { renderPopup: rest.renderLabelPopup, required }
        : {}
    const clearButtonProps = {
      visible: !!value,
      disabled,
      onClear: () => {
        onChange({ target: { name, value: "", cleared: true } })
      }
    }

    const renderInput = hasError => (
      <InputField
        ref={ref}
        name={name}
        value={value || ""}
        placeholder={placeholder || ""}
        className={classNames("w-12/12", className, {
          input_withClearButton: hasClearButton,
          "floatingLabel-input": labelProps.floating
        })}
        mode={mode}
        hasError={hasError}
        disabled={disabled}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        autoFocus={autoFocus}
        step={step}
        min={min}
        max={max}
        debounce={debounce}
      />
    )

    const renderField = hasError =>
      hasClearButton ? (
        <WithClearButton {...clearButtonProps}>
          {renderInput(hasError)}
        </WithClearButton>
      ) : (
        renderInput(hasError)
      )

    const renderFloatingLabelField = hasError => (
      <WithFloatingLabel
        name={name}
        error={hasError}
        text={labelText}
        {...labelProps}
      >
        {renderInput(hasError)}
      </WithFloatingLabel>
    )

    const renderWithfloatingLabel = hasError =>
      hasClearButton ? (
        <WithClearButton {...clearButtonProps}>
          {renderFloatingLabelField(hasError)}
        </WithClearButton>
      ) : (
        renderFloatingLabelField(hasError)
      )

    const renderWithLabel = hasError => (
      <WithLabel name={name} error={hasError} text={labelText}>
        {renderField(hasError)}
      </WithLabel>
    )

    const renderHint = hasError =>
      hint ? <HintText text={hint} hasError={hasError} /> : null

    return (
      <div className="w-12/12 focus-within:text-teal">
        <WithValidationError error={error}>
          {hasError => (
            <>
              {labelText
                ? labelProps.floating
                  ? renderWithfloatingLabel(hasError)
                  : renderWithLabel(hasError)
                : renderField(hasError)}
              {renderHint(hasError)}
            </>
          )}
        </WithValidationError>
      </div>
    )
  }
)

export default Input
export { Props as InputProps }
