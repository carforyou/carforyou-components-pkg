import React, { FocusEvent, forwardRef } from "react"
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
  hasClearButton?: boolean
  mode: "text" | "numeric" | "decimal" | "tel" | "email"
  onChange: (e: { target: { name: string; value: string | number } }) => void
  onBlur?: (e: FocusEvent<any>) => void
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
      mode,
      onChange,
      onBlur,
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

    const LabelWrapper = labelProps.floating ? WithFloatingLabel : WithLabel

    const renderInput = hasError => (
      <InputField
        ref={ref}
        name={name}
        value={value || ""}
        placeholder={placeholder || ""}
        className={classNames("w-12/12", {
          input_withClearButton: hasClearButton,
          "floatingLabel-input": labelProps.floating
        })}
        mode={mode}
        hasError={hasError}
        disabled={disabled}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
      />
    )

    const renderField = hasError =>
      hasClearButton ? (
        <WithClearButton
          visible={!!value}
          onClear={() => {
            onChange({ target: { name, value: "" } })
          }}
        >
          {renderInput(hasError)}
        </WithClearButton>
      ) : (
        renderInput(hasError)
      )

    const renderHint = hasError =>
      hint ? <HintText text={hint} hasError={hasError} /> : null

    return (
      <div className="w-12/12 focus-within:text-teal">
        <WithValidationError error={error}>
          {hasError => (
            <>
              {labelText ? (
                <LabelWrapper
                  name={name}
                  error={hasError}
                  text={labelText}
                  {...labelProps}
                >
                  {renderField(hasError)}
                </LabelWrapper>
              ) : (
                renderField(hasError)
              )}
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
