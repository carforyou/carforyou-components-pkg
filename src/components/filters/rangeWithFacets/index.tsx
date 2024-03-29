import useDeepCompareEffect from "use-deep-compare-effect"
import React, { useState } from "react"

import SliderWithChart from "./sliderWithChart"
import RangeInputWithUnit from "./rangeInputWithUnit"
import { RangeElement } from "./rangeFilterScale"

export type NumericMinMaxValue = {
  min: number
  max: number
}

export type ChangeCallback = {
  touched: "min" | "max"
  value: NumericMinMaxValue
}

type TrackingEvent = {
  touchedElement: string
  value: number
}

export interface Props {
  /**
   * Scale for the distribution of the facets and the slider. Pass null for open end/open start
   */
  scale: RangeElement[]
  /**
   * The facets for each element of the scale. The keys are generated automatically based on the scale
   * e.g. { "*-100": 100, "100-200": 200, "200-500": 5000, "500-*": 80  }
   */
  facets: Record<string, number>
  inputName: {
    min: string
    max: string
  }
  inputPlaceholder?: {
    min: string
    max: string
  }
  value: NumericMinMaxValue
  unit?: string
  subtext: string
  addFilter: (values: NumericMinMaxValue) => void
  tracking: (event: TrackingEvent) => void
}

const RangeFilterWithFacets: React.FC<Props> = ({
  scale,
  facets,
  inputName,
  inputPlaceholder,
  value,
  unit,
  subtext,
  addFilter,
  tracking,
}) => {
  const [valuesWhileSliding, setValuesWhileSliding] = useState(value)
  const [isSliding, setIsSliding] = useState(false)

  useDeepCompareEffect(() => {
    setValuesWhileSliding(value)
  }, [value])

  const onSliderChange = (newValue: NumericMinMaxValue) => {
    if (!isSliding) setIsSliding(true)
    setValuesWhileSliding(newValue)
  }

  const onSliderRelease = (event: ChangeCallback) => {
    setIsSliding(false)
    addFilter(event.value)
    tracking({
      touchedElement: `${inputName[event.touched]}Slider`,
      value: event.value[event.touched],
    })
  }

  const isFilterApplied = () => {
    return (
      valuesWhileSliding.min === value.min &&
      valuesWhileSliding.max === value.max
    )
  }

  const appliedValue = (): NumericMinMaxValue => {
    if (isSliding || !isFilterApplied()) {
      return valuesWhileSliding
    } else {
      return value
    }
  }

  const syncSliderWithInput = (event: ChangeCallback) => {
    setValuesWhileSliding(event.value)
    addFilter(event.value)
    tracking({
      touchedElement: inputName[event.touched],
      value: event.value[event.touched],
    })
  }

  return (
    <div className="flex flex-col items-center pb-20 md:pb-0">
      <div className="flex flex-col-reverse md:flex-col md:space-y-25">
        <SliderWithChart
          onChange={onSliderChange}
          onSliderRelease={onSliderRelease}
          selection={appliedValue()}
          initialSelection={value}
          scale={scale}
          facets={facets}
        />
        <RangeInputWithUnit
          name={inputName}
          handleChange={syncSliderWithInput}
          unit={unit}
          value={appliedValue()}
          placeholder={inputPlaceholder}
        />
      </div>
      <p className="hidden md:block text-grey-3">{subtext}</p>
    </div>
  )
}

export default RangeFilterWithFacets
