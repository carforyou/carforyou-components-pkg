import { getTrackBackground, Range } from "react-range"
import React, { FC, useState } from "react"

import colors from "../tailwind/colors"
import InputFilter from "./filters/input"
import Label from "./fieldHelpers/label"

interface Props {
  step: number
  min: number
  max: number
  name: string
  defaultValue: number
  inputLabel: string
  required?: boolean
  handleChange: (value: number) => void
  error?: string
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
  error,
}) => {
  const [rangeValues, setRangeValues] = useState([defaultValue])

  const validateRangeValues = () => {
    if (rangeValues[0] > max) {
      return [max]
    } else if (rangeValues[0] < min) {
      return [min]
    }
    return rangeValues
  }

  return (
    <>
      <Label fieldName={inputLabel} required={required} />
      <div className="flex flex-col-reverse pb-15 md:pb-0 md:flex-col md:pt-15 md:space-y-20">
        <Range
          values={validateRangeValues()}
          step={step}
          min={min}
          max={max}
          onFinalChange={(values) => {
            handleChange(Number(values[0]))
          }}
          onChange={(values) => {
            setRangeValues(values)
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
          error={error}
          name={name}
          initialValue={String(rangeValues[0])}
          mode="numeric"
          apply={({ target: { value } }) => {
            value = value === "" ? min : Number(value)
            setRangeValues([value])
            handleChange(value)
          }}
          hasClearButton={false}
        />
      </div>
    </>
  )
}

export default Slider
export { Props as SliderProps }
