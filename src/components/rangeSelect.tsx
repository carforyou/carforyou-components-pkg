import React, { FC } from "react"

import Select from "./select"

interface Props {
  name: string
  handleChange: {
    min: (value) => void
    max: (value) => void
  }
  value?: {
    min: number
    max: number
  }
  placeholder?: {
    min: string
    max: string
  }
  options?: Array<{ name: string; value: number }>
}

const RangeSelect: FC<Props> = ({
  name,
  handleChange: { min: handleChangeMin, max: handleChangeMax } = {},
  value: { min: minValue = null, max: maxValue = null } = {},
  placeholder: { min: minPlaceholder = "", max: maxPlaceholder = "" },
  options,
}) => {
  return (
    <div className="relative inline-flex">
      <div className="inline-block w-6/12">
        <Select
          name={`${name}From`}
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
          name={`${name}To`}
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
