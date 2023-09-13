import React, { useContext, useState } from "react"
import { fireEvent, render, screen, within } from "@testing-library/react"

import FlashMessagesProvider from "../provider"
import FlashMessagesContext from "../context"
import FlashMessages from "../../index"

const DummyComponent = () => {
  const { addMessage, clearAllMessages } = useContext(FlashMessagesContext)
  const [count, setCount] = useState(1)

  return (
    <>
      <div data-testid="count">{count}</div>

      <button
        onClick={() => {
          addMessage({ type: "information", content: `Message ${count}` })
          setCount(count + 1)
        }}
      >
        Add Message
      </button>

      <button onClick={clearAllMessages}>Clear Messages</button>
    </>
  )
}

describe("<FlashMessagesProvider />", () => {
  const renderProvider = () =>
    render(
      <FlashMessagesProvider>
        <FlashMessages />
        <DummyComponent />
      </FlashMessagesProvider>
    )

  describe("#addMessage", () => {
    it("renders the message", async () => {
      renderProvider()

      fireEvent.click(screen.getByText("Add Message"))
      screen.getByText("Message 1")
    })
  })

  describe("#clearMessage", () => {
    it("removes specific message", async () => {
      renderProvider()

      const addButtom = screen.getByText("Add Message")
      fireEvent.click(addButtom)
      fireEvent.click(addButtom)

      const msgToRemove = screen.getByText("Message 1")
      screen.getByText("Message 2")
      fireEvent.click(
        // eslint-disable-next-line testing-library/no-node-access
        within(msgToRemove.parentElement).getByTestId("flash-close")
      )

      expect(screen.queryByText("Message 1")).toEqual(null)
      screen.getByText("Message 2")
    })
  })

  describe("#clearAllMessages", () => {
    it("removes all the messages", async () => {
      renderProvider()

      const addButtom = screen.getByText("Add Message")
      fireEvent.click(addButtom)
      fireEvent.click(addButtom)

      screen.getByText("Message 1")
      screen.getByText("Message 2")

      fireEvent.click(screen.getByText("Clear Messages"))
      expect(screen.queryByText("Message 1")).toEqual(null)
      expect(screen.queryByText("Message 2")).toEqual(null)
    })
  })
})
