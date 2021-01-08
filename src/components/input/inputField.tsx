import React, { FocusEvent, forwardRef, InputHTMLAttributes } from "react"

import debounceCallback from "../../lib/debounceHelper"

const validateNumber = (e) => {
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
    // Left and right arrows
    key === 37 ||
    key === 39 ||
    // Up and down arrows
    key === 38 ||
    key === 40 ||
    // Del and Ins
    key === 46 ||
    key === 45
  ) {
    return
  }

  e.preventDefault()
}

const validateDecimal = (e) => {
  const key = e.which || e.keyCode

  // Period (decimal)
  if (key === 190 && !e.target.value.includes(".")) {
    return
  }
  validateNumber(e)
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
  value?: string | number | string[]
  placeholder?: string
  className?: string
  mode: "text" | "numeric" | "decimal" | "tel" | "email"
  hasError?: string
  disabled?: boolean
  required?: boolean
  onChange?: (e: { target: { value: string | number } }) => void
  onBlur?: (e: FocusEvent) => void
  debounce?: number
}

const InputField = forwardRef<HTMLInputElement, Props>(
  (
    {
      name,
      value,
      placeholder,
      className,
      mode,
      hasError = false,
      disabled = false,
      required = false,
      onChange,
      onBlur,
      onKeyDown,
      debounce,
      ...rest
    },
    ref
  ) => {
    const isNumber = mode === "numeric" || mode === "decimal"

    return (
      <input
        ref={ref}
        id={name}
        name={name}
        type={isNumber ? "number" : "text"}
        value={value || ""}
        placeholder={placeholder || ""}
        className={className}
        inputMode={mode !== "text" ? mode : null}
        onKeyDown={(e) => {
          mode === "numeric"
            ? validateNumber(e)
            : mode === "decimal"
            ? validateDecimal(e)
            : null

          onKeyDown && onKeyDown(e)
        }}
        onChange={debounceCallback(onChange, debounce)}
        onBlur={onBlur}
        data-testid={name}
        data-valid={!hasError}
        disabled={disabled}
        required={required}
        {...rest}
      />
    )
  }
)
export default InputField
