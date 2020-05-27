import React, { FocusEvent, forwardRef } from "react"
import classNames from "classnames"

import WithValidationError from "./fieldHelpers/withValidationError"
import WithLabel from "./fieldHelpers/withLabel"
import HintText from "./fieldHelpers/hintText"

interface Props {
  name: string
  value: string
  placeholder?: string
  labelText?: string
  renderLabelPopup?: () => JSX.Element
  error?: string
  hint?: string
  disabled?: boolean
  required?: boolean
  onChange: (e: { target: { value: string } }) => void
  onBlur: (e: FocusEvent<any>) => void
  rows?: number
  cols?: number
  maxLength?: number
}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      name,
      value,
      placeholder,
      labelText,
      renderLabelPopup: labelPopup,
      error,
      hint,
      disabled = false,
      required = false,
      onChange,
      onBlur,
      rows,
      cols,
      maxLength,
    },
    ref
  ) => {
    const renderField = (hasError) => (
      <textarea
        ref={ref}
        id={name}
        name={name}
        value={value || ""}
        placeholder={placeholder || ""}
        className={classNames(
          "w-12/12 whitespace-pre-wrap overflow-y-auto",
          hasError ? "text-salmon" : "text-grey-dark"
        )}
        onChange={onChange}
        onBlur={onBlur}
        data-testid={name}
        data-valid={!hasError}
        disabled={disabled}
        required={required}
        rows={rows}
        cols={cols}
        maxLength={maxLength}
      />
    )

    const renderHint = (hasError) =>
      hint ? <HintText hasError={hasError} text={hint} /> : null

    return (
      <div className="w-12/12 focus-within:text-teal">
        <WithValidationError error={error}>
          {(hasError) => (
            <>
              {labelText ? (
                <WithLabel
                  name={name}
                  error={hasError}
                  required={required}
                  text={labelText}
                  renderPopup={labelPopup}
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
)

export default Textarea
export { Props as TextareaProps }
