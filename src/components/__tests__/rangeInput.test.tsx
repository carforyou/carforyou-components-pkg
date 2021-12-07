import React from "react"
import { render, screen } from "@testing-library/react"

import RangeInput from "../rangeInput"

const renderWrapper = ({
  label = null,
  minName = "nameFrom",
  maxName = "nameTo",
  minValue = null,
  maxValue = null,
  minPlaceholder = "min",
  maxPlaceholder = "max",
  handleChange = null,
} = {}) =>
  render(
    <RangeInput
      label={label}
      name={{
        min: minName,
        max: maxName,
      }}
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
  it("renders two inputs element with expected name", () => {
    renderWrapper()
    const fromInput = screen.getByPlaceholderText("min")
    const toInput = screen.getByPlaceholderText("max")

    expect(fromInput.getAttribute("name")).toEqual("nameFrom")
    expect(toInput.getAttribute("name")).toEqual("nameTo")
  })

  it("renders label if defined", () => {
    renderWrapper({ label: "Label" })
    expect(screen.getByText("Label"))
  })
})
