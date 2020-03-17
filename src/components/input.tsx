import React, { ChangeEvent, FocusEvent, ReactElement, RefObject } from "react"
import WithValidationError from "./fieldHelpers/withValidationError"

interface Props {
  name: string
  value: string | number
  placeholder?: string
  errors?: string[]
  disabled?: boolean
  mode: "text" | "numeric" | "decimal"
  onChange: (e: ChangeEvent<any>) => void
  onBlur: (e: FocusEvent<any>) => void
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
  name,
  value,
  placeholder,
  errors,
  disabled = false,
  mode,
  onChange,
  onBlur
}: Props): ReactElement {
  return (
    <WithValidationError errors={errors || []}>
      {error => (
        <input
          // ref={error ? ref : null}
          id={name}
          name={name}
          type="text"
          value={value || ""}
          placeholder={placeholder || ""}
          className="w-12/12"
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
      )}
    </WithValidationError>
  )
}

export default Input
export { Props as InputProps }
