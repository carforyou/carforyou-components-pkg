import React, { ReactElement, ChangeEvent } from "react"
import classNames from "classnames"

import WithValidationError from "./fieldHelpers/withValidationError"
import WithHorizontalLabel from "./fieldHelpers/withHorizontalLabel"

interface CheckboxProps {
  name: string
  checked?: boolean
  disabled?: boolean
  error?: string
  renderLabel?: () => JSX.Element
  onChange?: (e: ChangeEvent<any>) => void
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
  checked = false,
  disabled = false,
  error,
  renderLabel,
  onChange,
  ...rest
}: Props): ReactElement {
  const labelProps =
    renderLabel && "labelPosition" in rest
      ? {
          renderContent: renderLabel,
          position: rest.labelPosition
        }
      : renderLabel && "buttonStyle" in rest
      ? {
          renderContent: renderLabel,
          position: "right" as "right" | "left"
        }
      : {}

  const buttonStyle = "buttonStyle" in rest && rest.buttonStyle

  const renderInput = hasError => (
    <input
      name={name}
      type="checkbox"
      checked={checked}
      disabled={disabled}
      onChange={onChange}
      data-valid={!hasError}
      className={classNames({ "checkbox-buttonStyle": buttonStyle })}
    />
  )

  return (
    <label
      className={classNames("block cursor-pointer w-12/12", {
        "focus-within:text-teal": !buttonStyle,
        "p-13 border border-grey-2 hover:border-grey-dark focus-within:border-teal rounded-4 ": buttonStyle,
        "hover:border-grey-2 bg-grey-bright text-grey-2 cursor-not-allowed":
          buttonStyle && disabled
      })}
    >
      <WithValidationError error={error}>
        {hasError =>
          renderLabel ? (
            <WithHorizontalLabel {...labelProps}>
              {renderInput(hasError)}
            </WithHorizontalLabel>
          ) : (
            renderInput(hasError)
          )
        }
      </WithValidationError>
    </label>
  )
}

export default Checkbox
