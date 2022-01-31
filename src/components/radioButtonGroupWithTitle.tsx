import React, { FC, ReactElement } from "react"

import RadioButton, { RadioButtonProps } from "./radioButton"
import WithValidationError from "./fieldHelpers/withValidationError"
import Label from "./fieldHelpers/label"

type RadioInputProps = Omit<RadioButtonProps, "error" | "disabled">

interface Props {
  title: string
  required?: boolean
  disabled?: boolean
  radioInputs: RadioInputProps[]
  error?: string
}

const RadioButtonGroup: FC<Props> = ({
  title,
  required = false,
  disabled = false,
  radioInputs,
  error,
}): ReactElement => {
  const renderInputs = (hasError) => (
    <div className="w-12/12">
      <Label fieldName={title} required={required} />
      <div className="flex">
        {radioInputs.map((radioInput, index) => (
          <RadioButton
            key={index}
            {...radioInput}
            disabled={disabled}
            error={hasError}
          />
        ))}
      </div>
    </div>
  )
  return (
    <WithValidationError error={error}>
      {(hasError) => renderInputs(hasError)}
    </WithValidationError>
  )
}

export default RadioButtonGroup
export { Props as RadioButtonGroupProps }
