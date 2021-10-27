import React, { useState } from "react"

import SliderWithChart from "./sliderWithChart"
import RangeInput from "../../rangeInput"

export type NumericMinMaxValue = {
  min: number
  max: number
}

type TrackingEvent = {
  touchedElement: "field" | "slider"
  field?: string
  value: number | NumericMinMaxValue
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
   * The placeholder for the min and max value field
   */
  placeholder: {
    min: string
    max: string
  }
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
  placeholder,
  addFilter,
  tracking,
}) => {
  const [valuesWhileSliding, setValuesWhileSliding] = useState(value)
  const [isSliding, setIsSliding] = useState(false)

  const onSliderChange = (newValue: NumericMinMaxValue) => {
    if (!isSliding) setIsSliding(true)
    setValuesWhileSliding(newValue)
  }

  const onSliderRelease = (newValue: NumericMinMaxValue) => {
    setIsSliding(false)
    addFilter(newValue)
    tracking({ touchedElement: "slider", value: newValue })
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

  const applyFilters = ({ target }) => {
    const { name, value: changedValue } = target
    let updatedValue = null
    if (inputName.min === name) {
      updatedValue = { min: changedValue, max: value.max }
    } else if (inputName.max === name) {
      updatedValue = { min: value.min, max: changedValue }
    }

    if (updatedValue) {
      setValuesWhileSliding(updatedValue)
      addFilter(updatedValue)
      tracking({ touchedElement: "field", field: name, value: changedValue })
    }
  }

  return (
    <div className="space-y-25">
      <SliderWithChart
        onChange={onSliderChange}
        onSliderRelease={onSliderRelease}
        scale={scale}
        facets={facets}
        selection={appliedValue()}
      />
      <RangeInput
        name={inputName}
        placeholder={placeholder}
        handleChange={applyFilters}
        value={appliedValue()}
        debounce={500}
        allowOverlap={false}
      />
    </div>
  )
}

export default RangeFilterWithFacets
