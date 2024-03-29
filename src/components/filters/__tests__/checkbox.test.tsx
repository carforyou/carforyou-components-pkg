import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"

import CheckboxFilter from "../checkbox"
import ClockOutlinedTealIcon from "../../../assets/dist/icons/clockOutlinedTeal"

const renderWrapper = ({
  name = "testFilter",
  options = [
    { label: "One", value: 1, renderIcon: null },
    { label: "Two", value: 2, renderIcon: null },
    { label: "Three", value: 3, renderIcon: null },
  ],
  applyFilters = jest.fn(),
  selected = [],
  facet = null,
  children = null,
  onSelect = jest.fn(),
} = {}) => {
  return render(
    <CheckboxFilter
      name={name}
      options={options}
      apply={applyFilters}
      selected={selected}
      facet={facet}
      onSelect={onSelect}
    >
      {children}
    </CheckboxFilter>
  )
}

describe("<CheckboxFilter/>", () => {
  describe("renders correctly", () => {
    it("with no options", () => {
      const { container } = renderWrapper({ options: [] })

      expect(container).toMatchSnapshot()
    })

    it("with simple options", () => {
      const { container } = renderWrapper({
        options: [
          { label: "One", value: 1, renderIcon: null },
          { label: "Two", value: 2, renderIcon: null },
          { label: "Three", value: 3, renderIcon: null },
        ],
      })

      expect(container).toMatchSnapshot()
    })

    it("with icons", () => {
      renderWrapper({
        options: [
          {
            label: "One",
            value: 1,
            renderIcon: () => (
              <ClockOutlinedTealIcon
                width="20"
                height="20"
                className="mr-10"
                data-testid="icon-1"
              />
            ),
          },
          {
            label: "Two",
            value: 2,
            renderIcon: () => (
              <ClockOutlinedTealIcon width="20" height="20" className="mr-10" />
            ),
          },
          {
            label: "Three",
            value: 3,
            renderIcon: () => (
              <ClockOutlinedTealIcon width="20" height="20" className="mr-10" />
            ),
          },
        ],
      })

      expect(screen.getByTestId("icon-1"))
    })

    it("with initial selection", () => {
      const { container } = renderWrapper({ selected: [1, 2] })

      expect(container).toMatchSnapshot()
    })

    it("with facet", () => {
      const { container } = renderWrapper({
        facet: { "1": 30, "2": 1000, "3": 0 },
      })

      expect(container).toMatchSnapshot()
    })
  })

  it("applies filter on click", () => {
    const applyFilterMock = jest.fn()
    renderWrapper({ applyFilters: applyFilterMock })

    fireEvent.click(screen.getByText("One"))

    expect(applyFilterMock).toHaveBeenCalledWith({ testFilter: [1] })
  })

  it("disables non-selected option with facet = zero", () => {
    renderWrapper({
      facet: { "1": 30, "2": 1000, "3": 0 },
    })

    expect(screen.getByLabelText("Three", { exact: false })).toHaveProperty(
      "disabled"
    )
  })

  it("disables non-selected option when facet is provided and null", () => {
    renderWrapper({
      facet: { "1": 30, "2": 1000 },
    })

    expect(screen.getByLabelText("Three", { exact: false })).toHaveProperty(
      "disabled"
    )
  })

  it("disables non-selected options when facet is provided and empty", () => {
    renderWrapper({
      facet: {},
    })

    expect(screen.getByLabelText("One", { exact: false })).toHaveProperty(
      "disabled"
    )
    expect(screen.getByLabelText("Two", { exact: false })).toHaveProperty(
      "disabled"
    )
    expect(screen.getByLabelText("Three", { exact: false })).toHaveProperty(
      "disabled"
    )
  })

  it("calls onSelect when the value is selected", () => {
    const onSelectFilterMock = jest.fn()
    renderWrapper({ onSelect: onSelectFilterMock })

    fireEvent.click(screen.getByText("Three"))

    expect(onSelectFilterMock).toHaveBeenCalledWith(3)
  })
})
