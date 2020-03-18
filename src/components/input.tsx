import React, { FocusEvent, ReactElement, RefObject } from "react"
import classNames from "classnames"

import WithValidationError from "./fieldHelpers/withValidationError"
import WithLabel from "./fieldHelpers/withLabel"
import WithClearButton from "./fieldHelpers/withClearButton"

interface Props {
  name: string
  value: string | number
  placeholder?: string
  labelText?: string
  renderLabelPopup?: () => JSX.Element
  error?: string
  hint?: string
  disabled?: boolean
  hasClearButton?: boolean
  required?: boolean
  mode: "text" | "numeric" | "decimal"
  onChange: (e: { target: { value: string | number } }) => void
  onBlur: (e: FocusEvent<any>) => void
  ref?: RefObject<HTMLInputElement>
}

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
  renderLabelPopup: labelPopup,
  error,
  hint,
  disabled = false,
  hasClearButton = false,
  required = false,
  mode,
  onChange,
  onBlur
}: Props): ReactElement {
  const renderInput = hasError => (
    <input
      ref={ref}
      id={name}
      name={name}
      type="text"
      value={value || ""}
      placeholder={placeholder || ""}
      className={classNames("w-12/12", {
        "input--withClearButton": hasClearButton
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
              <WithLabel
                name={name}
                error={hasError}
                required={required}
                text={labelText}
                rendePopup={labelPopup}
              >
                {renderField(hasError)}
              </WithLabel>
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
