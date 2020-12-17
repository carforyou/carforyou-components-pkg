import React from "react"
import { render, act, fireEvent } from "@testing-library/react"

import Collapsible from "../collapsible"

const openedText = "Close me"
const closedText = "Open me"
const content = "I am content"

const renderWrapper = ({ isInitiallyCollapsed = true, onChange = null } = {}) =>
  render(
    <Collapsible
      renderToggle={(isCollapsed) => (isCollapsed ? closedText : openedText)}
      onChange={onChange}
      isInitiallyCollapsed={isInitiallyCollapsed}
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

      act(() => {
        fireEvent.click(getByText(closedText))
      })

      expect(queryAllByText(closedText)).toEqual([])
      expect(getByText(openedText))
      expect(getByText(content))
    })
  })

  describe("rendered open", () => {
    it("is open", () => {
      const { getByText, queryAllByText } = renderWrapper({
        isInitiallyCollapsed: false,
      })

      expect(queryAllByText(closedText)).toEqual([])
      expect(getByText(openedText))
      expect(getByText(content))
    })

    it("can be closed", () => {
      const { getByText, queryAllByText } = renderWrapper({
        isInitiallyCollapsed: false,
      })

      act(() => {
        fireEvent.click(getByText(openedText))
      })

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

      act(() => {
        fireEvent.click(getByText(closedText))
      })

      expect(customOnChangeFunction).toHaveBeenCalledWith(false)

      act(() => {
        fireEvent.click(getByText(openedText))
      })

      expect(customOnChangeFunction).toHaveBeenCalledWith(true)
    })
  })
})
