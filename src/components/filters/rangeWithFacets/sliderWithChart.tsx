import { getTrackBackground, Range } from "react-range"
import React, { useMemo, useState } from "react"

import RangeFilterScale, { RangeElement } from "./rangeFilterScale"

import Chart from "./chart"

import { ChangeCallback, NumericMinMaxValue } from "./index"

interface Props {
  scale: RangeElement[]
  facets: Record<string, number>
  selection: NumericMinMaxValue
  onChange: (values: NumericMinMaxValue) => void
  onSliderRelease: (event: ChangeCallback) => void
}

const SliderWithChart: React.FC<Props> = ({
  scale,
  facets,
  selection,
  onChange,
  onSliderRelease,
}) => {
  const range = useMemo(() => new RangeFilterScale(scale), [scale])
  const [touchedThumb, setTouchedThumb] = useState(null)

  const updateTouchedThumb = (index: number) => {
    setTouchedThumb(index === 0 ? "min" : "max")
  }

  return (
    <Range
      step={1}
      min={0}
      max={range.getMaxIndex()}
      onChange={([newMinIndex, newMaxIndex]) => {
        onChange(range.toMinMax(newMinIndex, newMaxIndex, selection))
      }}
      onFinalChange={([newMinIndex, newMaxIndex]) => {
        onSliderRelease({
          touched: touchedThumb,
          value: range.toMinMax(newMinIndex, newMaxIndex, selection),
        })
      }}
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
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          className="w-12/12 flex flex-col"
        >
          <Chart facets={facets} range={range.toRange(selection)} />
          <div
            ref={props.ref}
            className="w-12/12 h-4 self-center mt-px"
            style={{
              background: getTrackBackground({
                values: range.toRange(selection),
                colors: ["#EBEFF1", "#3696B9", "#EBEFF1"],
                min: 0,
                max: range.getMaxIndex(),
              }),
            }}
          >
            {children}
          </div>
        </div>
      )}
      values={range.toRange(selection)}
    />
  )
}

export default SliderWithChart
