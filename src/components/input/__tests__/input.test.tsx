import React from "react"

import { fireEvent, render } from "@testing-library/react"

import Input from "../index"

describe("<Input>", () => {
  describe("without debounce", () => {
    it("executes the callback function", () => {
      const onChangeMock = jest.fn()
      const { getByPlaceholderText } = render(
        <Input
          name="testInput"
          placeholder="testInput"
          value="initial value"
          mode="text"
          onChange={onChangeMock}
          hasClearButton
        />
      )
      const input = getByPlaceholderText("testInput")
      fireEvent.change(input, { target: { value: "Test" } })

      expect(onChangeMock).toBeCalled()
    })

    it("clears the input", () => {
      const onChangeMock = jest.fn()
      const { getByTestId } = render(
        <Input
          name="testInput"
          placeholder="testInput"
          value="initial value"
          mode="text"
          onChange={onChangeMock}
          hasClearButton
        />
      )
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
      const { getByPlaceholderText } = render(
        <Input
          name="testInput"
          placeholder="testInput"
          value="initial value"
          mode="text"
          onChange={onChangeMock}
          hasClearButton
          debounce={200}
        />
      )
      const input = getByPlaceholderText("testInput")
      fireEvent.change(input, { target: { value: "Test" } })
      jest.runAllTimers()

      expect(onChangeMock).toBeCalled()
    })

    it("clears the input immediately", () => {
      const onChangeMock = jest.fn()
      const { getByTestId } = render(
        <Input
          name="testInput"
          placeholder="testInput"
          value="initial value"
          mode="text"
          onChange={onChangeMock}
          hasClearButton
        />
      )
      const clearButton = getByTestId("clearButton")
      fireEvent.click(clearButton)

      expect(onChangeMock).toBeCalled()
    })

    it("hooks refs passed as functions", async () => {
      const onChangeMock = jest.fn()
      let inputRef = null
      const { findByPlaceholderText } = render(
        <Input
          name="testInput"
          placeholder="testInput"
          value="initial value"
          mode="text"
          onChange={onChangeMock}
          hasClearButton
          ref={(input) => {
            inputRef = input
          }}
        />
      )
      await findByPlaceholderText("testInput")
      expect(inputRef.value).toBe("initial value")
    })

    it("hooks refs passed as objects", async () => {
      const onChangeMock = jest.fn()
      const inputRef = React.createRef<HTMLInputElement>()
      const { findByPlaceholderText } = render(
        <Input
          name="testInput"
          placeholder="testInput"
          value="initial value"
          mode="text"
          onChange={onChangeMock}
          hasClearButton
          ref={inputRef}
        />
      )
      await findByPlaceholderText("testInput")
      expect(inputRef.current.value).toBe("initial value")
    })
  })
})
