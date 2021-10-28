import React from "react"
import userEvent from "@testing-library/user-event"
import { render, waitFor } from "@testing-library/react"

import RangeFilterWithFacets from "../index"
import { RangeFilterScale } from "../../../../index"

const mockScale = RangeFilterScale.toRange({
  3000: 1000,
  8000: 2500,
  10000: 2000,
  30000: 10000,
})

const mockFacets = {
  "*-1000": 500,
  "1000-2000": 200,
  "2000-3000": 130,
  "3000-5500": 50,
  "5500-8000": 50,
  "8000-10000": 200,
  "10000-20000": 140,
  "20000-30000": 440,
  "30000-*": 300,
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
        unit="CHF"
        subtext="(1450 Autos)"
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

    it("triggers the tracking function when the FROM field is edited", () => {
      const screen = renderScreen()
      userEvent.type(screen.getByTestId("priceFrom"), "5000")
      return waitFor(() => {
        expect(mockTracking).toHaveBeenCalledWith({
          touchedElement: "priceFrom",
          value: "5000",
        })
      })
    })

    it("triggers the tracking function when the TO field is edited", () => {
      const screen = renderScreen()
      userEvent.type(screen.getByTestId("priceTo"), "10000")
      return waitFor(() => {
        expect(mockTracking).toHaveBeenCalledWith({
          touchedElement: "priceTo",
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
      expect(maxMarker).toHaveAttribute("aria-valuenow", "7")
    })
  })
})
