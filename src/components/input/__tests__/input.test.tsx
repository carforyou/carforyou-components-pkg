import React from "react"

import { render , fireEvent} from "@testing-library/react"

import Input from "../index"

describe("<Input>", () => {
  describe("without debounce", () => {
    it("executes the callback function", () => {
      const onChangeMock = jest.fn()
      const { getByPlaceholderText } = render(<Input
        name="testInput"
        placeholder="testInput"
        value="initial value"
        mode="text"
        onChange={onChangeMock}
        hasClearButton
      />)
      const input = getByPlaceholderText("testInput")
      fireEvent.change(input, { target: { value: "Test" } })

      expect(onChangeMock).toBeCalled()
    })

    it("clears the input", () => {
      const onChangeMock = jest.fn()
      const { getByTestId } = render(<Input
        name="testInput"
        placeholder="testInput"
        value="initial value"
        mode="text"
        onChange={onChangeMock}
        hasClearButton
      />)
      const clearButton = getByTestId("clearButton")
      fireEvent.click(clearButton)

      expect(onChangeMock).toBeCalled()
    })
  })

  describe("with debounce", () => {
    beforeEach(() => {
      jest.useFakeTimers()
    })

    afterEach(() => {
      jest.clearAllTimers()
      jest.useRealTimers()
    })

    it("executes the callback function with a delay", () => {
      const onChangeMock = jest.fn()
      const { getByPlaceholderText } = render(<Input
        name="testInput"
        placeholder="testInput"
        value="initial value"
        mode="text"
        onChange={onChangeMock}
        hasClearButton
        debounce={200}
      />)
      const input = getByPlaceholderText("testInput")
      fireEvent.change(input, { target: { value: "Test" } })
      jest.runAllTimers()

      expect(onChangeMock).toBeCalled()
    })

    it("clears the input immediately", () => {
      const onChangeMock = jest.fn()
      const { getByTestId } = render(<Input
        name="testInput"
        placeholder="testInput"
        value="initial value"
        mode="text"
        onChange={onChangeMock}
        hasClearButton
      />)
      const clearButton = getByTestId("clearButton")
      fireEvent.click(clearButton)

      expect(onChangeMock).toBeCalled()
    })
  })
})
