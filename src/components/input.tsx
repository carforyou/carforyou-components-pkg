import React, { FocusEvent, ReactElement, RefObject } from "react"
import classNames from "classnames"

import WithValidationError from "./fieldHelpers/withValidationError"
import WithLabel from "./fieldHelpers/withLabel"
import WithFloatingLabel from "./fieldHelpers/withFloatingLabel"
import WithClearButton from "./fieldHelpers/withClearButton"

interface InputProps {
  name: string
  value: string | number
  placeholder?: string
  error?: string
  hint?: string
  disabled?: boolean
  hasClearButton?: boolean
  mode: "text" | "numeric" | "decimal"
  onChange: (e: { target: { value: string | number } }) => void
  onBlur: (e: FocusEvent<any>) => void
  ref?: RefObject<HTMLInputElement>
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

const validateNumber = e => {
  const key = e.which || e.keyCode

  if (
    (!e.shiftKey &&
      !e.altKey &&
      !e.ctrlKey &&
      // numbers
      key >= 48 &&
      key <= 57) ||
    // Numeric keypad
    (key >= 96 && key <= 105) ||
    // Backspace and Tab and Enter
    key === 8 ||
    key === 9 ||
    key === 13 ||
    // Home and End
    key === 35 ||
    key === 36 ||
    // left and right arrows
    key === 37 ||
    key === 39 ||
    // Del and Ins
    key === 46 ||
    key === 45
  ) {
    return
  }

  e.preventDefault()
}

const validateDecimal = e => {
  const key = e.which || e.keyCode

  // Period (decimal)
  if (key === 190 && !e.target.value.includes(".")) {
    return
  }
  validateNumber(e)
}

function Input({
  ref,
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
}: Props): ReactElement {
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
    <input
      ref={ref}
      id={name}
      name={name}
      type="text"
      value={value || ""}
      placeholder={placeholder || ""}
      className={classNames("w-12/12", {
        "input--withClearButton": hasClearButton,
        floatingLabel__input: labelProps.floating
      })}
      inputMode={mode !== "text" ? mode : null}
      onKeyDown={
        mode === "numeric"
          ? validateNumber
          : mode === "decimal"
          ? validateDecimal
          : null
      }
      onChange={onChange}
      onBlur={onBlur}
      data-testid={name}
      data-valid={!hasError}
      disabled={disabled}
      required={required}
    />
  )

  const renderField = hasError =>
    hasClearButton ? (
      <WithClearButton
        visible={!!value}
        onClear={() => {
          onChange({ target: { value: "" } })
        }}
      >
        {renderInput(hasError)}
      </WithClearButton>
    ) : (
      renderInput(hasError)
    )

  const renderHint = hasError =>
    hint ? (
      <span
        className={classNames("font-bold text-sm", {
          "text-salmon": hasError
        })}
      >
        {hint}
      </span>
    ) : null

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

export default Input
export { Props as InputProps }
