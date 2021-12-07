import React from "react"
import { act, cleanup, render, screen } from "@testing-library/react"

import FlashMessages from "../index"
import { FlashMessagesContext, FlashMessageType } from "../context/index"

const types: FlashMessageType[] = ["error", "warning", "information", "success"]

describe("<FlashMessages />", () => {
  afterEach(cleanup)

  const renderMessages = () => {
    let rendered

    act(() => {
      rendered = render(
        <FlashMessagesContext.Provider
          value={{
            messages: types.map((type, i) => ({
              id: i,
              type,
              content: `Test ${type}`,
            })),
          }}
        >
          <FlashMessages />
        </FlashMessagesContext.Provider>
      )
    })

    return rendered
  }

  it("renders all messages", () => {
    renderMessages()

    types.forEach((type) => screen.getByText(`Test ${type}`))
  })
})
