import React, { FC, MutableRefObject } from "react"

import Input from "../../input/index"

import { ChangeCallback } from "./index"

interface Props {
  inputRefs: {
    min: MutableRefObject<HTMLInputElement>
    max: MutableRefObject<HTMLInputElement>
  }
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

const RangeInputWithUnit: FC<Props> = ({
  inputRefs,
  name,
  handleChange,
  value,
  unit,
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

  const unitElement = (
    <p className="absolute z-1 mt-16 ml-10 text-grey-3">{unit}</p>
  )

  return (
    <div className="w-12/12 flex">
      <div className="relative">
        {unitElement}
        <Input
          ref={inputRefs?.min}
          name={name.min}
          value={value.min}
          mode="numeric"
          position="left"
          hasClearButton={false}
          onChange={(e) => onChange(e, "min")}
          textAlignment="right"
          debounce={800}
        />
      </div>

      <div className="relative">
        {unitElement}
        <Input
          ref={inputRefs?.max}
          name={name.max}
          value={value.max}
          mode="numeric"
          hasClearButton={false}
          position="right"
          onChange={(e) => onChange(e, "max")}
          textAlignment="right"
          debounce={800}
        />
      </div>
    </div>
  )
}

export default RangeInputWithUnit
