import React, { FC, RefObject, FocusEvent } from "react"

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

interface Props {
  ref?: RefObject<HTMLInputElement>
  name: string
  value: string | number
  placeholder?: string
  className?: string
  mode: "text" | "numeric" | "decimal"
  hasError?: string
  disabled?: boolean
  required?: boolean
  onChange: (e: { target: { value: string | number } }) => void
  onBlur: (e: FocusEvent<any>) => void
}

const InputField: FC<Props> = ({
  ref,
  name,
  value,
  placeholder,
  className,
  mode,
  hasError = false,
  disabled = false,
  required = false,
  onChange,
  onBlur
}) => (
  <input
    ref={ref}
    id={name}
    name={name}
    type="text"
    value={value || ""}
    placeholder={placeholder || ""}
    className={className}
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

export default InputField
