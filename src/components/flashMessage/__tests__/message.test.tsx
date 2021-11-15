import React from "react"
import { cleanup, fireEvent, render } from "@testing-library/react"

import Message from "../message"

describe("<Message>", () => {
  afterEach(cleanup)
  it("can be closed", async () => {
    const mockedRemove = jest.fn()
    const { findByTestId } = render(
      <Message
        content="Test message"
        type="information"
        remove={mockedRemove}
      />
    )

    fireEvent.click(await findByTestId("flash-close"))
    expect(mockedRemove).toHaveBeenCalled()
  })
})
