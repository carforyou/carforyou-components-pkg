import { getTrackBackground, Range } from "react-range"
import React, { FC, useEffect, useRef, useState } from "react"

import Input from "./input/index"
import colors from "../tailwind/colors"

interface Props {
  step: number
  min: number
  max: number
  name: string
}

const Slider: FC<Props> = ({ step, min, max, name }) => {
  const inputRef = useRef()
  const [rangeValues, setRangeValues] = useState([0])
  const [inputValue, setInputValue] = useState(null)

  useEffect(() => {
    ;(inputRef.current as HTMLInputElement).value = inputValue
  }, [inputValue])

  const unitElement = (
    <p className="absolute z-1 mt-16 ml-10 text-grey-3">CHF</p>
  )

  return (
    <>
      <Range
        values={rangeValues}
        step={step}
        min={min}
        max={max}
        onChange={(values) => {
          setRangeValues(values)
          setInputValue(values[0])
        }}
        renderTrack={({ props, children }) => (
          <div className="w-12/12 flex flex-col">
            <div
              {...props}
              className="w-12/12 h-4 self-center rounded-10"
              style={{
                background: getTrackBackground({
                  values: rangeValues,
                  colors: [colors.teal, colors["grey-1"]],
                  min: 0,
                  max: 1000,
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
      <div className="mt-20 relative">
        {unitElement}
        <Input
          ref={inputRef}
          name={name}
          value={inputValue}
          mode="numeric"
          onChange={(e) => {
            setRangeValues([e.target.value])
            setInputValue(e.target.value)
          }}
          textAlignment="center-right"
        />
      </div>
    </>
  )
}

export default Slider
export { Props as SliderProps }
