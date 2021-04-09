import React from "react"
import { render } from "@testing-library/react"

import RangeInput from "../rangeInput"

const renderWrapper = ({
  label = null,
  name = "name",
  minValue = null,
  maxValue = null,
  minPlaceholder = "min",
  maxPlaceholder = "max",
  handleChange = null,
} = {}) =>
  render(
    <RangeInput
      label={label}
      name={name}
      value={{
        min: minValue,
        max: maxValue,
      }}
      placeholder={{
        min: minPlaceholder,
        max: maxPlaceholder,
      }}
      handleChange={handleChange}
    />
  )

describe("RangeInput", () => {
  it("renders RangeInput correctly", () => {
    const { container } = renderWrapper()
    expect(container).toMatchSnapshot()
  })

  it("renders label if defined", () => {
    const { getByText } = renderWrapper({ label: "Label" })
    expect(getByText("Label"))
  })
})
