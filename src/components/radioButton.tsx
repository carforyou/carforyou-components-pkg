import React, { ChangeEvent, ReactElement } from "react"
import classNames from "classnames"

import WithValidationError from "./fieldHelpers/withValidationError"
import WithHorizontalLabel from "./fieldHelpers/withHorizontalLabel"

interface Props {
  name: string
  value: string
  disabled?: boolean
  checked?: boolean
  error?: string
  renderLabel?: () => JSX.Element
  labelPosition?: "left" | "right"
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

function RadioButton({
  name,
  value,
  disabled = false,
  checked = false,
  error,
  renderLabel,
  labelPosition,
  onChange,
}: Props): ReactElement {
  const renderInput = (hasError) => (
    <div className="inputRadio">
      <input
        name={name}
        id={name}
        value={value}
        checked={checked}
        type="radio"
        disabled={disabled}
        onChange={onChange}
        data-valid={!hasError}
        className="inputRadio-input"
      />
      <span className="inputRadio-checkmark" />
    </div>
  )

  return (
    <WithValidationError error={error}>
      {(hasError) => (
        <div
          className={classNames(
            "block w-12/12",
            disabled ? "cursor-not-allowed text-grey-4" : "cursor-pointer"
          )}
        >
          {renderLabel ? (
            <WithHorizontalLabel
              name={name}
              disabled={disabled}
              renderContent={renderLabel}
              position={labelPosition}
            >
              {renderInput(hasError)}
            </WithHorizontalLabel>
          ) : (
            renderInput(hasError)
          )}
        </div>
      )}
    </WithValidationError>
  )
}

export default RadioButton
export { Props as RadioButtonProps }
