import React, { FC } from "react"

import Input from "./input/index"

import Label from "./fieldHelpers/label"

interface Props {
  name: {
    min: string
    max: string
  }
  handleChangeMin: (value) => void
  handleChangeMax: (value) => void
  value?: {
    min: number
    max: number
  }
  isValid?: {
    min: boolean
    max: boolean
  }
  placeholder?: {
    min: string
    max: string
  }
  required?: boolean
  rangeInputLabel?: string
  initialValue?: string
}

const RangeInput: FC<Props> = ({
  name: { min: minName, max: maxName },
  handleChangeMin,
  handleChangeMax,
  value: { min: minValue = "", max: maxValue = "" },
  placeholder: { min: minPlaceholder = "", max: maxPlaceholder = "" },
  rangeInputLabel,
  required,
}) => {
  return (
    <>
      {rangeInputLabel ? (
        <Label
          label={rangeInputLabel}
          htmlFor={`${minName}-min`}
          required={required}
        />
      ) : null}
      <div className="flex flex-wrap">
        <div className="w-6/12">
          <Input
            name={minName}
            value={minValue}
            mode="numeric"
            placeholder={minPlaceholder}
            position="left"
            hasClearButton
            onChange={handleChangeMin}
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
            onChange={handleChangeMax}
          />
        </div>
      </div>
    </>
  )
}

export default RangeInput
export { Props as RangeInputProps }
