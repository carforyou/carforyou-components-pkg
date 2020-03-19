import React, { FocusEvent, ReactElement, RefObject } from "react"
import classNames from "classnames"

import WithValidationError from "../fieldHelpers/withValidationError"
import WithLabel from "../fieldHelpers/withLabel"
import WithClearButton from "../fieldHelpers/withClearButton"
import InputField from "./inputField"

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
    <InputField
      ref={ref}
      name={name}
      value={value || ""}
      placeholder={placeholder || ""}
      className={classNames("w-12/12", {
        "input--withClearButton": hasClearButton
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
