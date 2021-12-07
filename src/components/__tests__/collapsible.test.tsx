import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"

import Collapsible from "../collapsible"

const openedText = "Close me"
const closedText = "Open me"
const content = "I am content"

const renderWrapper = ({ forceCollapse = true, onChange = null } = {}) =>
  render(
    <Collapsible
      renderToggle={(isCollapsed) => (isCollapsed ? closedText : openedText)}
      onChange={onChange}
      forceCollapse={forceCollapse}
    >
      {() => content}
    </Collapsible>
  )

describe("<Collapsible>", () => {
  describe("default", () => {
    it("is closed", () => {
      renderWrapper()

      expect(screen.getByText(closedText))
      expect(screen.queryAllByText(openedText)).toEqual([])
      expect(screen.queryAllByText(content)).toEqual([])
    })

    it("can be opened", () => {
      renderWrapper()

      fireEvent.click(screen.getByText(closedText))

      expect(screen.queryAllByText(closedText)).toEqual([])
      expect(screen.getByText(openedText))
      expect(screen.getByText(content))
    })
  })

  describe("rendered open", () => {
    it("is open", () => {
      renderWrapper({
        forceCollapse: false,
      })

      expect(screen.queryAllByText(closedText)).toEqual([])
      expect(screen.getByText(openedText))
      expect(screen.getByText(content))
    })

    it("can be closed", () => {
      renderWrapper({
        forceCollapse: false,
      })

      fireEvent.click(screen.getByText(openedText))

      expect(screen.getByText(closedText))
      expect(screen.queryAllByText(openedText)).toEqual([])
      expect(screen.queryAllByText(content)).toEqual([])
    })
  })

  describe("on change function", () => {
    it("should call the onChange function if defined", () => {
      const customOnChangeFunction = jest.fn()
      renderWrapper({
        onChange: customOnChangeFunction,
      })

      fireEvent.click(screen.getByText(closedText))
      expect(customOnChangeFunction).toHaveBeenCalledWith(false)

      fireEvent.click(screen.getByText(openedText))
      expect(customOnChangeFunction).toHaveBeenCalledWith(true)
    })
  })
})
