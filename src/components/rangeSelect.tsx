import React, { FC } from "react"

import Select from "./select"

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
  options?: Array<{ name: string; value: number | { customValue: number } }>
}

const RangeSelect: FC<Props> = ({
  name: { min: minName, max: maxName },
  handleChangeMin,
  handleChangeMax,
  value: { min: minValue = "", max: maxValue = "" } = {},
  placeholder: { min: minPlaceholder = "", max: maxPlaceholder = "" },
  options,
}) => {
  return (
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
  )
}

export default RangeSelect
export { Props as RangeSelectProps }
