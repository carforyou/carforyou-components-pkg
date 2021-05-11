import React from "react"

import { fireEvent, render } from "@testing-library/react"

import Input from "../../components/input"

const Wrapper = (value, callback) => {
  return (
    <Input
      name="testInput"
      placeholder="testInput"
      value={value}
      mode="text"
      onChange={callback}
      hasClearButton
      debounce={200}
    />
  )
}

describe("useDebounce", () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    // avoid side effects
    jest.clearAllTimers()
    jest.useRealTimers()
  })

  const renderWrapper = (callback) =>
    render(<Wrapper value={"Initial value"} callback={callback} />)

  it("should execute the callback function", () => {
    const onClick = jest.fn()
    const { getByPlaceholderText } = renderWrapper(onClick)
    const input = getByPlaceholderText("testInput")
    fireEvent.change(input, { target: { value: "Test" } })
    jest.runOnlyPendingTimers()
    expect(onClick).toBeCalled()
  })
})
