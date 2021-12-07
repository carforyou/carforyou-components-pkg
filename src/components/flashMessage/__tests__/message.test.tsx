import React from "react"
import { cleanup, fireEvent, render, screen } from "@testing-library/react"

import Message from "../message"

describe("<Message>", () => {
  afterEach(cleanup)
  it("can be closed", async () => {
    const mockedRemove = jest.fn()
    render(
      <Message
        content="Test message"
        type="information"
        remove={mockedRemove}
      />
    )

    fireEvent.click(await screen.findByTestId("flash-close"))
    expect(mockedRemove).toHaveBeenCalled()
  })
})
