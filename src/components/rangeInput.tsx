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
  debounce?: number
  allowOverlap?: boolean
}

const RangeInput: FC<Props> = ({
  name: { min: minName, max: maxName } = {},
  handleChange,
  value: { min: minValue = null, max: maxValue = null },
  placeholder: { min: minPlaceholder = "", max: maxPlaceholder = "" },
  label,
  required = false,
  debounce,
  allowOverlap = true,
}) => {
  console.log(minValue, maxValue)
  return (
    <>
      <Label fieldName={label} required={required} />
      <div
        className="w-12/12 flex"
        //key={`${minName}-${minValue}-${maxName}-${maxValue}`}
      >
        <Input
          name={minName}
          value={minValue}
          mode="numeric"
          placeholder={minPlaceholder}
          position="left"
          hasClearButton
          onChange={(event) => {
            const value = Number(event.target.value)
            if (allowOverlap || !value) {
              handleChange(event)
              return
            } else if (maxValue && value > maxValue) {
              event.target.value = maxValue
              handleChange(event)
              return
            } else {
              handleChange(event)
              return
            }
          }}
          debounce={debounce}
        />
        <Input
          name={maxName}
          value={maxValue}
          mode="numeric"
          hasClearButton
          placeholder={maxPlaceholder}
          position="right"
          onChange={(event) => {
            const value = Number(event.target.value)
            if (allowOverlap || !value) {
              handleChange(event)
              return
            } else if (minValue && value < minValue) {
              event.target.value = minValue
              handleChange(event)
              return
            } else {
              handleChange(event)
              return
            }
          }}
          debounce={debounce}
        />
      </div>
    </>
  )
}

export default RangeInput
export { Props as RangeInputProps }
