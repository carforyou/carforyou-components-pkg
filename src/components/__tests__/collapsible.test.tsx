import React from "react"
import { fireEvent, render } from "@testing-library/react"

import Collapsible from "../collapsible"

const openedText = "Close me"
const closedText = "Open me"
const content = "I am content"

const renderWrapper = ({
  forceCollapse = true,
  onChange = null,
  tealChevron = false,
  topMobileChevron = false,
} = {}) =>
  render(
    <Collapsible
      renderToggle={(isCollapsed) => (isCollapsed ? closedText : openedText)}
      onChange={onChange}
      forceCollapse={forceCollapse}
      tealChevron={tealChevron}
      topMobileChevron={topMobileChevron}
    >
      {() => content}
    </Collapsible>
  )

describe("<Collapsible>", () => {
  describe("default", () => {
    it("is closed", () => {
      const { getByText, queryAllByText } = renderWrapper()

      expect(getByText(closedText))
      expect(queryAllByText(openedText)).toEqual([])
      expect(queryAllByText(content)).toEqual([])
    })

    it("can be opened", () => {
      const { getByText, queryAllByText } = renderWrapper()

      fireEvent.click(getByText(closedText))

      expect(queryAllByText(closedText)).toEqual([])
      expect(getByText(openedText))
      expect(getByText(content))
    })
  })

  describe("rendered open", () => {
    it("is open", () => {
      const { getByText, queryAllByText } = renderWrapper({
        forceCollapse: false,
      })

      expect(queryAllByText(closedText)).toEqual([])
      expect(getByText(openedText))
      expect(getByText(content))
    })

    it("can be closed", () => {
      const { getByText, queryAllByText } = renderWrapper({
        forceCollapse: false,
      })

      fireEvent.click(getByText(openedText))

      expect(getByText(closedText))
      expect(queryAllByText(openedText)).toEqual([])
      expect(queryAllByText(content)).toEqual([])
    })
  })

  describe("on change function", () => {
    it("should call the onChange function if defined", () => {
      const customOnChangeFunction = jest.fn()
      const { getByText } = renderWrapper({
        onChange: customOnChangeFunction,
      })

      fireEvent.click(getByText(closedText))
      expect(customOnChangeFunction).toHaveBeenCalledWith(false)

      fireEvent.click(getByText(openedText))
      expect(customOnChangeFunction).toHaveBeenCalledWith(true)
    })
  })

  describe("chevron variations", () => {
    it("should render teal chevron correct", () => {
      const { container } = renderWrapper({ tealChevron: true })
      expect(container).toMatchSnapshot()
    })

    it("should render mobile chevron correct", () => {
      const { container } = renderWrapper({
        topMobileChevron: true,
      })
      expect(container).toMatchSnapshot()
    })
  })
})
