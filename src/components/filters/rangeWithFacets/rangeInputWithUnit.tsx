import React, { FC } from "react"

import InputFilter from "../input"

import { ChangeCallback } from "./index"

interface Props {
  name: {
    min: string
    max: string
  }
  handleChange: (event: ChangeCallback) => void
  value: {
    min: number
    max: number
  }
  unit: string
}

const RangeInputWithUnit: FC<Props> = ({ name, handleChange, value, unit }) => {
  const onChange = ({ target }, editedField: "min" | "max") => {
    const { value: changedValue } = target
    handleChange({
      touched: editedField,
      value: {
        ...value,
        [editedField]: changedValue,
      },
    })
  }

  const unitElement = (
    <p className="absolute z-1 mt-16 ml-10 text-grey-3">{unit}</p>
  )

  return (
    <div className="w-12/12 flex">
      <div className="relative">
        {unitElement}
        <InputFilter
          name={name.min}
          initialValue={value.min ? String(value.min) : undefined}
          mode="numeric"
          position="left"
          hasClearButton={false}
          textAlignment="right"
          apply={(e) => onChange(e, "min")}
        />
      </div>

      <div className="relative">
        {unitElement}
        <InputFilter
          name={name.max}
          initialValue={value.max ? String(value.max) : undefined}
          mode="numeric"
          position="right"
          hasClearButton={false}
          textAlignment="right"
          apply={(e) => onChange(e, "max")}
        />
      </div>
    </div>
  )
}

export default RangeInputWithUnit
