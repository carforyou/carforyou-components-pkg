import React, { ChangeEvent, FocusEvent, ReactElement, RefObject } from "react"
import classNames from "classnames"

import WithValidationError from "./fieldHelpers/withValidationError"
import WithClearButton from "./fieldHelpers/withClearButton"

interface Props {
  name: string
  value: string | number
  placeholder?: string
  errors?: string[]
  hint?: string
  disabled?: boolean
  clearable?: boolean
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
  errors,
  hint,
  disabled = false,
  clearable = false,
  mode,
  onChange,
  onBlur
}: Props): ReactElement {
  const renderField = error => (
    <input
      ref={ref}
      id={name}
      name={name}
      type="text"
      value={value || ""}
      placeholder={placeholder || ""}
      className={classNames("w-12/12", { withClearButton: clearable })}
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
      data-valid={!error}
      disabled={disabled}
    />
  )

  return (
    <div className="w-12/12 focus-within:text-teal">
      <WithValidationError errors={errors || []}>
        {error => (
          <>
            {clearable ? (
              <WithClearButton
                display={!!value}
                onClear={() => {
                  onChange({ target: { value: "" } })
                }}
              >
                {renderField(error)}
              </WithClearButton>
            ) : (
              renderField(error)
            )}
            {hint ? (
              <span
                className={classNames("font-bold text-sm", {
                  "text-salmon": error
                })}
              >
                {hint}
              </span>
            ) : null}
          </>
        )}
      </WithValidationError>
    </div>
  )
}

export default Input
export { Props as InputProps }
