import React, { useRef, useState } from "react"

import SliderWithChart from "./sliderWithChart"
import RangeInputWithUnit from "./rangeInputWithUnit"

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

interface Props {
  /**
   * e.g. ["*-100", "100-200", "200-400", "400-1000", "1000-*"]
   */
  scale: string[]
  /**
   * The facets for each element of the scale
   * Keys must match the scale array
   * e.g. { "*-100": 100, "100-200": 200, "200-500": 5000, "500-*": 80  }
   */
  facets: Record<string, number>
  /**
   * The name for the input fields
   */
  inputName: {
    min: string
    max: string
  }
  /**
   * Current values of the filter
   */
  value: NumericMinMaxValue
  /**
   * Range unit
   */
  unit: string
  /**
   * Text that is shown below the input fields
   */
  subtext: string
  /**
   * Function that is triggered when the filter updates either through the fields or the slider
   * @param values: the new values of the filter
   */
  addFilter: (values: NumericMinMaxValue) => void
  /**
   * Function that is triggered when the filter updates either through the fields or the slider
   * @param event: if the values was changed through slider or fields and what input is affected
   */
  tracking: (event: TrackingEvent) => void
}

const RangeFilterWithFacets: React.FC<Props> = ({
  scale,
  facets,
  inputName,
  value,
  unit,
  subtext,
  addFilter,
  tracking,
}) => {
  const [valuesWhileSliding, setValuesWhileSliding] = useState(value)
  const [isSliding, setIsSliding] = useState(false)
  const minValueRef = useRef(null)
  const maxValueRef = useRef(null)

  const syncInputWithSlider = (newValue: NumericMinMaxValue) => {
    if (minValueRef.current && maxValueRef.current) {
      minValueRef.current.value = newValue.min
      maxValueRef.current.value = newValue.max
    }
  }

  const onSliderChange = (newValue: NumericMinMaxValue) => {
    if (!isSliding) setIsSliding(true)
    syncInputWithSlider(newValue)
    setValuesWhileSliding(newValue)
  }

  const onSliderRelease = (event: ChangeCallback) => {
    setIsSliding(false)
    syncInputWithSlider(event.value)
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
    <div className="flex flex-col items-center">
      <div className="space-y-25">
        <SliderWithChart
          onChange={onSliderChange}
          onSliderRelease={onSliderRelease}
          selection={appliedValue()}
          scale={scale}
          facets={facets}
        />
        <RangeInputWithUnit
          inputRefs={{
            min: minValueRef,
            max: maxValueRef,
          }}
          name={inputName}
          handleChange={syncSliderWithInput}
          unit={unit}
          value={appliedValue()}
        />
      </div>
      <p className="text-grey-3">{subtext}</p>
    </div>
  )
}

export default RangeFilterWithFacets
