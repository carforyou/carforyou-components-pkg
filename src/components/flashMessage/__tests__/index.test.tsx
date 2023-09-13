import React from "react"
import { render, screen } from "@testing-library/react"

import FlashMessages from "../index"
import { FlashMessagesContext, FlashMessageType } from "../context/index"

const types: FlashMessageType[] = ["error", "warning", "information", "success"]

describe("<FlashMessages />", () => {
  const renderMessages = () => {
    return render(
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
  }

  it("renders all messages", () => {
    renderMessages()

    types.forEach((type) => screen.getByText(`Test ${type}`))
  })
})
