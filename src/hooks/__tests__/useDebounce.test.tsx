import React from "react"

import { fireEvent, render } from "@testing-library/react"

import Input from "../../components/input"

const Wrapper = ({ value, callback }) => {
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

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip("should execute the callback function", async () => {
    const callback = jest.fn()
    const { getByPlaceholderText } = renderWrapper(callback)
    const input = getByPlaceholderText("testInput")
    fireEvent.change(input, { target: { value: "Test" } })
    jest.runOnlyPendingTimers()

    expect(callback).toBeCalled()
  })
})
