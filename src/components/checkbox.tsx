import React, { ChangeEvent, ReactElement } from "react"
import classNames from "classnames"

import WithValidationError from "./fieldHelpers/withValidationError"
import WithHorizontalLabel from "./fieldHelpers/withHorizontalLabel"

interface CheckboxProps {
  name: string
  value?: string
  checked?: boolean
  disabled?: boolean
  error?: string
  renderLabel?: () => JSX.Element
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  alignItems?: "center" | "start"
}

interface PositionedLabelProps extends CheckboxProps {
  labelPosition: "left" | "right"
}

interface ButtonStyleProps extends CheckboxProps {
  buttonStyle?: boolean
}

type Props = PositionedLabelProps | ButtonStyleProps

function Checkbox({
  name,
  value,
  checked = false,
  disabled = false,
  error,
  renderLabel,
  onChange,
  alignItems = "center",
  ...rest
}: Props): ReactElement {
  const labelProps =
    renderLabel && "labelPosition" in rest
      ? {
          renderContent: renderLabel,
          position: rest.labelPosition,
        }
      : renderLabel && "buttonStyle" in rest
      ? {
          renderContent: renderLabel,
          position: "right" as "right" | "left",
        }
      : {}

  const buttonStyle = "buttonStyle" in rest && rest.buttonStyle

  const renderInput = (hasError) => (
    <input
      name={name}
      id={name}
      type="checkbox"
      checked={checked}
      value={value}
      disabled={disabled}
      onChange={onChange}
      data-valid={!hasError}
      className={classNames({ "checkbox-buttonStyle": buttonStyle })}
    />
  )

  return (
    <WithValidationError error={error}>
      {(hasError) => (
        <label
          htmlFor={name}
          className={classNames(
            "block w-12/12",
            disabled ? "cursor-not-allowed text-grey-4" : "cursor-pointer",
            {
              "focus-within:text-teal": !buttonStyle,
              "p-13 border rounded-4 ": buttonStyle,
              "hover:border-grey-2 bg-grey-bright text-grey-2 cursor-not-allowed":
                buttonStyle && disabled,
              "border-salmon": buttonStyle && hasError,
              "border-grey-3 hover:border-grey-dark focus-within:border-teal":
                buttonStyle && !hasError,
              "text-salmon": hasError,
            }
          )}
        >
          {renderLabel ? (
            <WithHorizontalLabel alignItems={alignItems} {...labelProps}>
              {renderInput(hasError)}
            </WithHorizontalLabel>
          ) : (
            renderInput(hasError)
          )}
        </label>
      )}
    </WithValidationError>
  )
}

export default Checkbox
export { PositionedLabelProps }
