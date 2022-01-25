import React, { ReactElement } from "react"

import RadioButton, { RadioButtonProps } from "./radioButton"
import Label from "./fieldHelpers/label"

interface Props {
  title: string
  required?: boolean
  radioInputs: RadioButtonProps[]
}

function RadioButtonGroup({
  title,
  required = false,
  radioInputs,
}: Props): ReactElement {
  return (
    <div className="w-12/12">
      <Label fieldName={title} required={required} />
      <div className="flex w-12/12 justify-between">
        {radioInputs.map((radioInput, index) => (
          <RadioButton
            key={index}
            name={radioInput.name}
            onChange={radioInput.onChange}
            value={radioInput.value}
            checked={radioInput.checked}
            renderLabel={radioInput.renderLabel}
            labelPosition={radioInput.labelPosition}
          />
        ))}
      </div>
    </div>
  )
}

export default RadioButtonGroup
export { Props as RadioButtonGroupProps }
