import debounce from "~/lib/debounceHelper"

describe("debounceHelper", () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    // avoid side effects
    jest.clearAllTimers()
    jest.useRealTimers()
  })

  it(
    "returns undefined if no callback was given (to avoid checks in the concrete input field" +
      " implementations)",
    () => {
      expect(debounce()).toBe(undefined)
    }
  )

  it("returns the original callback if no delay was given (no need to delay invocation)", () => {
    const callback = () => undefined
    expect(debounce(callback)).toBe(callback)
  })

  it("retuns a new callback wrapping the original one if a delay is passed", () => {
    const callback = () => undefined
    expect(debounce(callback, 1000)).not.toBe(callback)
  })

  it("invokes the callback with the given delay and the latest parameter if executed", () => {
    const callback = jest.fn()
    const event = {}
    const debounced = debounce(callback, 50)

    debounced({})
    debounced({})
    debounced(event)

    expect(callback).not.toBeCalled()

    jest.runOnlyPendingTimers()

    expect(callback).toBeCalledTimes(1)
    expect(callback).toBeCalledWith(event)
  })

  it("resets the timer on every invocation", () => {
    const callback = jest.fn()
    const event = {}
    const debounced = debounce(callback, 50)

    debounced({})

    expect(callback).not.toBeCalled()

    jest.advanceTimersByTime(20)
    expect(callback).not.toBeCalled()

    debounced(event)
    jest.advanceTimersByTime(30)
    expect(callback).not.toBeCalled()

    jest.runOnlyPendingTimers()
    expect(callback).toBeCalledTimes(1)
    expect(callback).toBeCalledWith(event)
  })
})
