import React, { useContext, useState } from "react"
import { cleanup, fireEvent, render, within } from "@testing-library/react"

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
  afterEach(cleanup)

  const renderProvider = () =>
    render(
      <FlashMessagesProvider>
        <FlashMessages />
        <DummyComponent />
      </FlashMessagesProvider>
    )

  describe("#addMessage", () => {
    it("renders the message", async () => {
      const { getByText } = renderProvider()

      fireEvent.click(getByText("Add Message"))
      getByText("Message 1")
    })
  })

  describe("#clearMessage", () => {
    it("removes specific message", async () => {
      const { getByText, queryByText } = renderProvider()

      const addButtom = getByText("Add Message")
      fireEvent.click(addButtom)
      fireEvent.click(addButtom)

      const msgToRemove = getByText("Message 1")
      getByText("Message 2")
      fireEvent.click(
        within(msgToRemove.parentElement).getByTestId("flash-close")
      )

      expect(queryByText("Message 1")).toEqual(null)
      getByText("Message 2")
    })
  })

  describe("#clearAllMessages", () => {
    it("removes all the messages", async () => {
      const { getByText, queryByText } = renderProvider()

      const addButtom = getByText("Add Message")
      fireEvent.click(addButtom)
      fireEvent.click(addButtom)

      getByText("Message 1")
      getByText("Message 2")

      fireEvent.click(getByText("Clear Messages"))
      expect(queryByText("Message 1")).toEqual(null)
      expect(queryByText("Message 2")).toEqual(null)
    })
  })
})
