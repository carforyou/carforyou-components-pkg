import React, { FC } from "react"

import Select from "./select"

interface Props {
  name: {
    min: string
    max: string
  }
  handleChange: {
    min: (value: number) => void
    max: (value: number) => void
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
  onSelect?: (data: { name: string; value: number }) => void
}

const RangeSelect: FC<Props> = ({
  name: { min: minName, max: maxName } = {},
  handleChange: { min: handleChangeMin, max: handleChangeMax } = {},
  value: { min: minValue = null, max: maxValue = null } = {},
  placeholder: { min: minPlaceholder = "", max: maxPlaceholder = "" },
  options,
  onSelect,
}) => {
  return (
    <div className="relative inline-flex">
      <div className="inline-block w-6/12">
        <Select
          name={minName}
          placeholder={minPlaceholder}
          options={options}
          selected={minValue ? Number(minValue) : null}
          handleChange={(value) => {
            handleChangeMin(value)
            onSelect && onSelect({ name: minName, value })
          }}
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
          handleChange={(value) => {
            handleChangeMax(value)
            onSelect && onSelect({ name: maxName, value })
          }}
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
