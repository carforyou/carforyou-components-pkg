import React from "react"
import userEvent from "@testing-library/user-event"
import { render, waitFor } from "@testing-library/react"

import RangeFilterWithFacets from "../index"

const mockScale = [
  "*-1000",
  "1000-2000",
  "20000-22500",
  "22500-25000",
  "1000000-*",
]

const mockFacets = {
  "*-1000": 500,
  "1000-2000": 200,
  "2000-22500": 130,
  "22500-25000": 50,
  "1000000-*": 300,
}

const mockAddFilter = jest.fn()
const inputName = {
  min: "priceFrom",
  max: "priceTo",
}
const mockTracking = jest.fn()

describe("<RangeFilterWithFacets/>", () => {
  const renderScreen = (value = { min: null, max: null }) => {
    return render(
      <RangeFilterWithFacets
        addFilter={mockAddFilter}
        facets={mockFacets}
        inputName={inputName}
        scale={mockScale}
        tracking={mockTracking}
        value={value}
        placeholder={inputName}
      />
    )
  }
  beforeEach(() => {
    mockAddFilter.mockClear()
    mockTracking.mockClear()
  })

  describe("with input field", () => {
    it("allows to change the min value through the input field", () => {
      const screen = renderScreen()
      userEvent.type(screen.getByTestId("priceFrom"), "5000")
      return waitFor(() => {
        expect(mockAddFilter).toHaveBeenCalledWith({ min: "5000", max: null })
      })
    })

    it("allows to change the max value through the input field", () => {
      const screen = renderScreen()
      userEvent.type(screen.getByTestId("priceTo"), "10000")
      return waitFor(() => {
        expect(mockAddFilter).toHaveBeenCalledWith({ min: null, max: "10000" })
      })
    })

    it("triggers the tracking function when a field is edited", () => {
      const screen = renderScreen()
      userEvent.type(screen.getByTestId("priceTo"), "10000")
      return waitFor(() => {
        expect(mockTracking).toHaveBeenCalledWith({
          touchedElement: "field",
          field: "priceTo",
          value: "10000",
        })
      })
    })
  })

  describe("with slider", () => {
    it("renders a marker for the min and the max value", () => {
      const screen = renderScreen({ min: 1000, max: 22500 })
      const sliders = screen.getAllByRole("slider")
      expect(sliders).toHaveLength(2)

      const [minMarker, maxMarker] = sliders
      expect(minMarker).toHaveAttribute("aria-valuenow", "1")
      expect(maxMarker).toHaveAttribute("aria-valuenow", "3")
    })
  })
})
