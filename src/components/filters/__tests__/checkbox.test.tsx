import React from "react"
import { fireEvent, render } from "@testing-library/react"

import CheckboxFilter from "../checkbox"
import ClockOutlinedTealIcon from "../../../assets/src/icons/clockOutlinedTeal"

const renderWrapper = ({
  name = "testFilter",
  options = [
    { label: "One", value: 1, renderIcon: null },
    { label: "Two", value: 2, renderIcon: null },
    { label: "Three", value: 3, renderIcon: null },
  ],
  applyFilters = jest.fn(),
  selected = [],
  facet = {},
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
      const { getByTestId } = renderWrapper({
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

      expect(getByTestId("icon-1"))
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
    const { getByText } = renderWrapper({ applyFilters: applyFilterMock })

    fireEvent.click(getByText("One"))

    expect(applyFilterMock).toHaveBeenCalledWith({ testFilter: [1] })
  })

  it("disables non-selected option with facet = zero", () => {
    const { getByLabelText } = renderWrapper({
      facet: { "1": 30, "2": 1000, "3": 0 },
    })

    expect(getByLabelText("Three", { exact: false })).toHaveProperty("disabled")
  })

  it("disables non-selected option when facet is provided and null", () => {
    const { getByLabelText } = renderWrapper({
      facet: { "1": 30, "2": 1000 },
    })

    expect(getByLabelText("Three", { exact: false })).toHaveProperty("disabled")
  })

  it("calls onSelect when the value is selected", () => {
    const onSelectFilterMock = jest.fn()
    const { getByText } = renderWrapper({ onSelect: onSelectFilterMock })

    fireEvent.click(getByText("Three"))

    expect(onSelectFilterMock).toHaveBeenCalledWith(3)
  })
})
