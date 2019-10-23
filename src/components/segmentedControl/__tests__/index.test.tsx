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

  const renderWrapper = (data = {}) => {
    const { renderOption } = { renderOption: undefined, ...data }
    return render(
      <SegmentedControl
        options={options}
        onSelect={mockedOnSelect}
        renderOption={renderOption}
      />
    )
  }

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

  it("accepts custom render for options", () => {
    const { getByText } = renderWrapper({
      renderOption: ({ name, value }) => (
        <div>
          {name} ({value})
        </div>
      )
    })

    options.forEach(({ value, name }) =>
      expect(getByText(`${name} (${value})`))
    )
  })

  it("has correct padding without the custom renderer", () => {
    const { getByText } = renderWrapper()
    const button = getByText("Two")

    expect(button.classList).toContain("py-16")
    expect(button.classList).toContain("px-8")
  })

  it("passes correct padding to the custom renderer", () => {
    const { getByText } = renderWrapper({
      renderOption: ({ name }) => <div>{name}</div>
    })

    const option = getByText("Two")
    expect(option.classList).toContain("py-16")
    expect(option.classList).toContain("px-8")
  })
})
