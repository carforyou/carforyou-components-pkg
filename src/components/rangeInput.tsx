import React, { FC, MutableRefObject } from "react"

import Input from "./input/index"

import Label from "./fieldHelpers/label"

interface Props {
  inputRefs?: {
    min: MutableRefObject<HTMLInputElement>
    max: MutableRefObject<HTMLInputElement>
  }
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
  inputRefs,
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
      <div className="w-12/12 flex">
        <Input
          ref={inputRefs?.min}
          name={minName}
          value={minValue}
          mode="numeric"
          placeholder={minPlaceholder}
          position="left"
          hasClearButton
          onChange={handleChange}
        />
        <Input
          ref={inputRefs?.max}
          name={maxName}
          value={maxValue}
          mode="numeric"
          hasClearButton
          placeholder={maxPlaceholder}
          position="right"
          onChange={handleChange}
        />
      </div>
    </>
  )
}

export default RangeInput
export { Props as RangeInputProps }
