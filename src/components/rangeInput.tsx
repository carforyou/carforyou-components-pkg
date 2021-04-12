import React, { FC } from "react"

import Input from "./input/index"

import Label from "./fieldHelpers/label"

interface Props {
  name: string
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
  keyFrom?: string
  keyTo?: string
  onBlur?: (e) => void
  onKeyDown?: (e) => void
  onFocus?: (e) => void
  autoFocus?: boolean
  step?: number
  min?: number
  max?: number
}

const RangeInput: FC<Props> = ({
  name,
  handleChange,
  onKeyDown,
  onBlur,
  onFocus,
  value: { min: minValue = null, max: maxValue = null },
  placeholder: { min: minPlaceholder = "", max: maxPlaceholder = "" },
  label,
  required = false,
  keyFrom = "",
  keyTo = "",
  autoFocus = false,
  step = null,
  min = 0,
  max = 9999999,
}) => {
  return (
    <>
      <Label fieldName={label} required={required} />
      <div className="flex flex-wrap">
        <div className="w-6/12">
          <Input
            name={`${name}From`}
            value={minValue}
            mode="numeric"
            placeholder={minPlaceholder}
            position="left"
            hasClearButton
            onChange={handleChange}
            key={keyFrom}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
            onFocus={onFocus}
            autoFocus={autoFocus}
            step={step}
            min={min}
            max={max}
          />
        </div>
        <div className="w-6/12">
          <Input
            name={`${name}To`}
            value={maxValue}
            mode="numeric"
            hasClearButton
            placeholder={maxPlaceholder}
            position="right"
            onChange={handleChange}
            key={keyTo}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
            onFocus={onFocus}
            autoFocus={autoFocus}
            step={step}
            min={min}
            max={max}
          />
        </div>
      </div>
    </>
  )
}

export default RangeInput
export { Props as RangeInputProps }
