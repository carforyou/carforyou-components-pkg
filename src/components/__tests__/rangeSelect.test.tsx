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
    { name: "One", value: 1 },
    { name: "Two", value: 2 },
    { name: "Three", value: 3 },
    { name: "Four", value: 4 },
    { name: "Five", value: 5 },
    { name: "Six", value: 6 },
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
  it("renders RangeSelect correctly", () => {
    const { container } = renderWrapper()
    expect(container).toMatchSnapshot()
  })

  it("renders options on click", () => {
    const { getByText } = renderWrapper()

    fireEvent.click(getByText("max"))
    expect(getByText("One"))
  })
})
