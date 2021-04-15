import React, { FC } from "react"

import Input from "./input/index"

import Label from "./fieldHelpers/label"

interface Props {
  name: {
    min: string
    max: string
  }
  handleChange: (value) => void
  value?: {
    min: number
    max: number
  }
  placeholder?: {
    min: string
    max: string
  }
  required?: boolean
  label?: string
}

const RangeInput: FC<Props> = ({
  name: { min: minName, max: maxName } = {},
  handleChange,
  value: { min: minValue = null, max: maxValue = null },
  placeholder: { min: minPlaceholder = "", max: maxPlaceholder = "" },
  label,
  required = false,
}) => {
  return (
    <>
      <Label fieldName={label} required={required} />
      <div className="flex flex-wrap">
        <div className="w-6/12">
          <Input
            name={minName}
            value={minValue}
            mode="numeric"
            placeholder={minPlaceholder}
            position="left"
            hasClearButton
            onChange={handleChange}
          />
        </div>
        <div className="w-6/12">
          <Input
            name={maxName}
            value={maxValue}
            mode="numeric"
            hasClearButton
            placeholder={maxPlaceholder}
            position="right"
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  )
}

export default RangeInput
export { Props as RangeInputProps }
