import React from "react"
import { render, fireEvent } from "@testing-library/react"

import SegmentedControl from "../index"

describe("<SegmentedControl>", () => {
  const mockedOnSelect = jest.fn()

  const options = [
    { value: 1, name: "One" },
    { value: 2, name: "Two" },
    { value: 3, name: "Three" }
  ]

  const renderWrapper = () =>
    render(<SegmentedControl options={options} onSelect={mockedOnSelect} />)

  beforeEach(mockedOnSelect.mockClear)

  it("passes selection to callback", () => {
    const { getByText } = renderWrapper()

    const button = getByText("Two")
    fireEvent.click(button)

    expect(mockedOnSelect).toHaveBeenCalledWith(2)
  })

  it("highlights newly selected element", () => {
    const { getByText } = renderWrapper()

    const button = getByText("Two")
    fireEvent.click(button)

    expect(getByText("Two").classList).toContain("bg-teal")
  })

  it("does not select already selected element", () => {
    const { getByText } = renderWrapper()

    const button = getByText("One")
    fireEvent.click(button)

    expect(mockedOnSelect).not.toHaveBeenCalled()
  })
})
