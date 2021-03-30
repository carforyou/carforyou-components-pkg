import React, { FC } from "react"

import Select from "./select"
import Input from "./input/index"

// import Label from "./label"

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
  select: boolean
  options?: Array<{ name: string; value: number | { customValue: number } }>
}

const RangeSelect: FC<Props> = ({
  name: { min: minName, max: maxName },
  handleChangeMin,
  handleChangeMax,
  value: { min: minValue = "", max: maxValue = "" } = {},
  placeholder: { min: minPlaceholder = "", max: maxPlaceholder = "" } = {},
  select,
  options,
}) => {
  return (
    <>
      {select ? (
        <div className="relative inline-flex">
          <div className="inline-block w-6/12">
            <Select
              name={minName}
              placeholder={minPlaceholder}
              options={options}
              selected={minValue ? Number(minValue) : null}
              handleChange={handleChangeMin}
              position="left"
              inputMode="numeric"
              withAutosuggest
              skipContainer
            />
          </div>
          <div className="inline-block w-6/12">
            <Select
              name={maxName}
              placeholder={maxPlaceholder}
              options={options}
              selected={maxValue ? Number(maxValue) : null}
              handleChange={handleChangeMax}
              position="right"
              inputMode="numeric"
              withAutosuggest
              skipContainer
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap">
          <div className="w-6/12">
            <Input
              name={minName}
              value={minValue}
              mode="numeric"
              placeholder={minPlaceholder}
              position="left"
              onChange={handleChangeMin}
            />
          </div>
          <div className="w-6/12">
            <Input
              name={maxName}
              value={maxValue}
              mode="numeric"
              placeholder={maxPlaceholder}
              position="right"
              onChange={handleChangeMax}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default RangeSelect
export { Props as RangeSelectProps }
