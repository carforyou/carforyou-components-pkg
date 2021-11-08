import { getTrackBackground, Range } from "react-range"
import React, { useState } from "react"

import colors from "../tailwind/colors"

const Slider = () => {
  const [rangeValues, setRangeValues] = useState([50])
  const [touchedThumb, setTouchedThumb] = useState(null)

  const updateTouchedThumb = (index: number) => {
    setTouchedThumb(index === 0 ? "min" : "max")
  }
  return (
    <>
      <Range
        values={rangeValues}
        step={1}
        min={0}
        max={1000}
        onChange={(values) => setRangeValues(values)}
        renderTrack={({ props, children }) => (
          <div className="w-12/12 flex flex-col">
            <div
              {...props}
              className="w-12/12 h-4 self-center mt-px rounded-10"
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
        renderThumb={({ props, index }) => (
          <div
            {...props}
            onMouseDown={() => {
              updateTouchedThumb(index)
            }}
            onTouchStart={() => updateTouchedThumb(index)}
            className="h-checkbox w-checkbox border border-grey-2 rounded-half bg-white shadow"
          />
        )}
      />
      <output style={{ marginTop: "30px" }}>{rangeValues[0].toFixed(1)}</output>
    </>
  )
}

export default Slider
