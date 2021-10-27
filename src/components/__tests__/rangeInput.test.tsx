import React, { useState } from "react"
import { render, waitFor } from "@testing-library/react"

import RangeInput from "../rangeInput"
import userEvent from "@testing-library/user-event"

const ExampleComponent = ({ label = null }) => {
  const [value, setValue] = useState({ min: null, max: null })

  const handleChange = ({ target }) => {
    const { name, value: changedValue } = target
    if ("nameFrom" === name) {
      setValue({ min: changedValue, max: value.max })
    } else if ("nameTo" === name) {
      setValue({ min: value.min, max: changedValue })
    }
  }

  return (
    <RangeInput
      label={label}
      name={{
        min: "nameFrom",
        max: "nameTo",
      }}
      value={value}
      placeholder={{
        min: "min",
        max: "max",
      }}
      handleChange={handleChange}
      allowOverlap={false}
      //debounce={500}
    />
  )
}

describe("RangeInput", () => {
  it("renders two inputs element with expected name", () => {
    const { container } = render(<ExampleComponent />)
    const fromInput = container.querySelector(
      'input[name="nameFrom"]'
    ) as HTMLInputElement
    const toInput = container.querySelector(
      'input[name="nameTo"]'
    ) as HTMLInputElement

    expect(fromInput).toBeTruthy()
    expect(toInput).toBeTruthy()
  })

  it("renders label if defined", () => {
    const { getByText } = render(<ExampleComponent label="Label" />)
    expect(getByText("Label"))
  })

  describe("allowOverlap", () => {
    it("does NOT change the MAX value when MIN is not defined", () => {
      const screen = render(<ExampleComponent />)

      const maxField = screen.getByPlaceholderText("max")
      userEvent.type(maxField, "50000")
      expect(maxField).toHaveValue(50000)
    })

    it("does NOT change the MIN value when MAX is not defined", () => {
      const screen = render(<ExampleComponent />)
      const minField = screen.getByPlaceholderText("min")
      userEvent.type(minField, "10000")
      expect(minField).toHaveValue(10000)
    })

    it("does NOT change the MIN value when MAX is cleared", () => {
      const screen = render(<ExampleComponent />)
      const minField = screen.getByPlaceholderText("min")
      const maxField = screen.getByPlaceholderText("max")

      userEvent.type(minField, "10000")
      userEvent.type(maxField, "50000")
      userEvent.clear(maxField)

      expect(minField).toHaveValue(10000)
      expect(maxField).toHaveValue(null)
    })

    it("does NOT change the MAX value when MIN is cleared", () => {
      const screen = render(<ExampleComponent />)
      const minField = screen.getByPlaceholderText("min")
      const maxField = screen.getByPlaceholderText("max")

      userEvent.type(minField, "10000")
      userEvent.type(maxField, "50000")
      userEvent.clear(minField)

      expect(minField).toHaveValue(null)
      expect(maxField).toHaveValue(50000)
    })

    it("does change the MAX value when MIN is LARGER", () => {
      const screen = render(<ExampleComponent />)
      const minField = screen.getByPlaceholderText("min")
      const maxField = screen.getByPlaceholderText("max")

      userEvent.type(minField, "10000")
      userEvent.type(maxField, "9999")

      return waitFor(() => {
        expect(maxField).toHaveValue(10000)
      })
    })

    it("does change the MIN value when MAX is SMALLER", () => {
      const screen = render(<ExampleComponent />)
      const minField = screen.getByPlaceholderText("min")
      const maxField = screen.getByPlaceholderText("max")

      userEvent.type(maxField, "50000")
      userEvent.type(minField, "50001")

      return waitFor(() => {
        expect(minField).toHaveValue(50000)
      })
    })
  })
})
