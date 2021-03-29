import React, { ChangeEvent, FC } from "react"

import Select from "./select"
import Input from "./input"

// import Label from "./label"

interface Props {
  name: {
    min: string
    max: string
  }
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
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
  options: Array<{ name: string; value: string | { customValue: string } }>
}

const RangeSelect: FC<Props> = ({
  name: { min: minName, max: maxName },
  handleChange,
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
              handleChange={handleChange}
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
              handleChange={handleChange}
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
              onChange={handleChange}
            />
          </div>
          <div className="w-6/12">
            <Input
              name={maxName}
              value={maxValue}
              mode="numeric"
              placeholder={maxPlaceholder}
              position="right"
              onChange={handleChange}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default RangeSelect
export { Props as RangeSelectProps }
