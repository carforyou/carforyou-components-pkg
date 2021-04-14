import React from "react"
import { fireEvent, render } from "@testing-library/react"

import RangeSelect from "../rangeSelect"

const onChangeMin = jest.fn()
const onChangeMax = jest.fn()

const renderWrapper = ({
  name = "name",
  minValue = null,
  maxValue = null,
  minPlaceholder = "min",
  maxPlaceholder = "max",
  handleChangeMin = onChangeMin,
  handleChangeMax = onChangeMax,
  options = [
    { name: "1", value: 1 },
    { name: "2", value: 2 },
    { name: "3", value: 3 },
    { name: "4", value: 4 },
    { name: "5", value: 5 },
    { name: "6", value: 6 },
  ],
} = {}) =>
  render(
    <RangeSelect
      name={name}
      value={{
        min: minValue,
        max: maxValue,
      }}
      placeholder={{
        min: minPlaceholder,
        max: maxPlaceholder,
      }}
      handleChange={{
        min: handleChangeMin,
        max: handleChangeMax,
      }}
      options={options}
    />
  )

describe("RangeSelect", () => {
  it("renders two inputs element with expected name", () => {
    const { container } = renderWrapper()
    const fromInput = container.querySelector(
      'input[name="nameFrom"]'
    ) as HTMLInputElement
    const toInput = container.querySelector(
      'input[name="nameTo"]'
    ) as HTMLInputElement

    expect(fromInput).toBeTruthy()
    expect(toInput).toBeTruthy()
  })

  it("renders options on click", () => {
    const { container, getByText } = renderWrapper()
    const input = container.querySelector(
      'input[name="nameTo"]'
    ) as HTMLInputElement
    fireEvent.click(input)
    expect(getByText("1"))
  })
})
