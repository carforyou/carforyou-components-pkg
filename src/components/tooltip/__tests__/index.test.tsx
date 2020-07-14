import React from "react"
import { render, fireEvent, act } from "@testing-library/react"
import Tooltip from "../index"

describe("<Tooltip />", () => {
  const original = window.HTMLDivElement.prototype.getBoundingClientRect

  beforeEach(() => {
    window.HTMLDivElement.prototype.getBoundingClientRect = () => ({
      top: 100,
      bottom: 200,
      left: 100,
      right: 300,
      x: 100,
      y: 100,
      height: 100,
      width: 200,
      toJSON: jest.fn(),
    })
  })

  afterEach(() => {
    window.HTMLDivElement.prototype.getBoundingClientRect = original
  })

  // getBoundingClientRect returns all zeros in jsdom, we mock here
  it("passes the space around the container to getPosition", () => {
    const getPosition = jest.fn()

    const { getByText } = render(
      <Tooltip renderContent={() => <>Lorem ipsum</>} getPosition={getPosition}>
        <div>I have a tooltip</div>
      </Tooltip>
    )

    act(() => {
      fireEvent.mouseEnter(getByText("I have a tooltip"))
    })

    // window size is 1024x768
    expect(getPosition).toHaveBeenCalledWith({
      top: 100,
      left: 100,
      bottom: 568,
      right: 724,
    })
  })
})
