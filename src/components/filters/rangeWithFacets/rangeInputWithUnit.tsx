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
  unit?: string
  placeholder?: {
    min: string
    max: string
  }
}

const RangeInputWithUnit: FC<Props> = ({
  name,
  handleChange,
  value,
  unit,
  placeholder,
}) => {
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

  const unitElement = unit ? (
    <p className="absolute z-1 mt-16 ml-10 text-grey-3">{unit}</p>
  ) : null

  return (
    <div className="w-12/12 flex">
      {Object.keys(value).map((el: "min" | "max") => (
        <div className="relative" key={el}>
          {unitElement}
          <InputFilter
            name={name[el]}
            initialValue={value[el] ? String(value[el]) : ""}
            mode="numeric"
            position={el === "min" ? "left" : "right"}
            hasClearButton={false}
            textAlignment="right"
            apply={(e) => onChange(e, el)}
            placeholder={placeholder && placeholder[el]}
          />
        </div>
      ))}
    </div>
  )
}

export default RangeInputWithUnit
