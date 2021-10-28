import React, { createRef } from "react"
import userEvent from "@testing-library/user-event"
import { render, waitFor } from "@testing-library/react"

import RangeInputWithUnit from "../rangeInputWithUnit"

describe("<RangeInputWithUnit/>", () => {
  const mockOnChange = jest.fn()
  const mockMinRef = createRef<HTMLInputElement>()
  const mockMaxRef = createRef<HTMLInputElement>()

  const renderField = () => {
    return render(
      <RangeInputWithUnit
        handleChange={mockOnChange}
        inputRefs={{
          min: mockMinRef,
          max: mockMaxRef,
        }}
        name={{
          min: "priceFrom",
          max: "priceTo",
        }}
        unit="CHF"
        value={{
          min: 400,
          max: 1000,
        }}
      />
    )
  }

  beforeEach(() => {
    mockOnChange.mockClear()
  })

  it("triggers onChange with the touched MIN field", () => {
    const screen = renderField()
    userEvent.clear(screen.getByTestId("priceFrom"))
    userEvent.type(screen.getByTestId("priceFrom"), "500")
    return waitFor(() => {
      expect(mockOnChange).toHaveBeenCalledWith({
        touched: "min",
        value: { min: "500", max: 1000 },
      })
    })
  })

  it("triggers onChange with the touched MAX field", () => {
    const screen = renderField()
    userEvent.clear(screen.getByTestId("priceTo"))
    userEvent.type(screen.getByTestId("priceTo"), "300")
    return waitFor(() => {
      expect(mockOnChange).toHaveBeenCalledWith({
        touched: "max",
        value: { min: 400, max: "300" },
      })
    })
  })

  it("shows the unit", () => {
    const screen = renderField()
    expect(screen.getAllByText("CHF")).toHaveLength(2)
  })
})
