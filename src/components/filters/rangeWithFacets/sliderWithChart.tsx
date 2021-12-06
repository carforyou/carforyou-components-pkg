import { getTrackBackground, Range } from "react-range"
import React, { useMemo } from "react"

import RangeFilterScale, { RangeElement } from "./rangeFilterScale"

import Chart from "./chart"

import colors from "../../../tailwind/colors"

import { ChangeCallback, NumericMinMaxValue } from "./index"

interface Props {
  scale: RangeElement[]
  facets: Record<string, number>
  selection: NumericMinMaxValue
  initialSelection: NumericMinMaxValue
  onChange: (values: NumericMinMaxValue) => void
  onSliderRelease: (event: ChangeCallback) => void
}

const SliderWithChart: React.FC<Props> = ({
  scale,
  facets,
  selection,
  initialSelection,
  onChange,
  onSliderRelease,
}) => {
  const range = useMemo(() => new RangeFilterScale(scale), [scale])

  const getChangedThumb = (initial, current): "max" | "min" | null => {
    const [initialMinIndex, initialMaxIndex] = initial
    const [currentMinIndex, currentMaxIndex] = current
    if (
      initialMinIndex === currentMinIndex &&
      initialMaxIndex === currentMaxIndex
    ) {
      return null
    } else {
      return initialMinIndex !== currentMinIndex ? "min" : "max"
    }
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
        const changedThumb = getChangedThumb(range.toRange(initialSelection), [
          newMinIndex,
          newMaxIndex,
        ])
        if (changedThumb) {
          onSliderRelease({
            touched: changedThumb,
            value: range.toMinMax(newMinIndex, newMaxIndex, selection),
          })
        }
      }}
      renderThumb={({ props }) => (
        <div
          {...props}
          className="h-checkbox w-checkbox border border-grey-2 rounded-half bg-white shadow"
        />
      )}
      renderTrack={({ props, children }) => (
        <div className="w-12/12 flex flex-col px-20 md:px-0">
          <Chart
            facets={facets}
            scale={scale}
            range={range.toRange(selection)}
          />
          <div
            {...props}
            className="w-12/12 h-4 self-center mt-px"
            style={{
              background: getTrackBackground({
                values: range.toRange(selection),
                colors: [colors["grey-1"], colors.teal, colors["grey-1"]],
                min: 0,
                max: range.getMaxIndex(),
              }),
            }}
            data-testid="slider-track"
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
