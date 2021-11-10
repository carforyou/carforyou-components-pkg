import { getTrackBackground, Range } from "react-range"
import React, { FC, useState } from "react"

import InputFilter from "./filters/input"
import Label from "./fieldHelpers/label"
import colors from "../tailwind/colors"

interface Props {
  step: number
  min: number
  max: number
  name: string
  defaultValue: number
  inputLabel: string
  required?: boolean
  handleChange?: (value: number) => void
}

const Slider: FC<Props> = ({
  step,
  min,
  max,
  name,
  defaultValue,
  inputLabel,
  required = false,
  handleChange,
}) => {
  const [rangeValues, setRangeValues] = useState([defaultValue])
  const [inputValue, setInputValue] = useState(defaultValue)

  return (
    <>
      <Label fieldName={inputLabel} required={required} />
      <div className="flex flex-col-reverse md:flex-col md:pt-15 md:space-y-20">
        <Range
          values={rangeValues}
          step={step}
          min={min}
          max={max}
          onChange={(values) => {
            handleChange(values[0])
            setRangeValues(values)
            setInputValue(values[0])
          }}
          renderTrack={({ props, children }) => (
            <div className="w-12/12 flex flex-col">
              <div
                {...props}
                className="overflow-hidden w-12/12 h-4 self-center rounded-10"
                style={{
                  background: getTrackBackground({
                    values: rangeValues,
                    colors: [colors.teal, colors["grey-1"]],
                    min: min,
                    max: max,
                  }),
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              className="h-checkbox w-checkbox border border-grey-2 rounded-half bg-white shadow"
            />
          )}
        />
        <InputFilter
          name={name}
          initialValue={String(inputValue)}
          mode="numeric"
          apply={(e) => {
            e.target.value > max
              ? setRangeValues([max])
              : setRangeValues([e.target.value])
            e.target.value === "" && setRangeValues([min])
            setInputValue(e.target.value)
            handleChange(e.target.value)
          }}
          hasClearButton={false}
        />
      </div>
    </>
  )
}

export default Slider
export { Props as SliderProps }
