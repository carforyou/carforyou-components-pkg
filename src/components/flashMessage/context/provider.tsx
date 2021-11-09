import React, { FC, ReactNode, useRef, useState } from "react"

import Context, { AddMessageProps, emptyMessages } from "./context"

interface Props {
  children: ReactNode
}

const Provider: FC<Props> = ({ children }) => {
  const messagesRef = useRef(emptyMessages)
  const [nextId, setNextId] = useState(1)
  const [messages, setMessages] = useState(messagesRef.current)

  const addMessage = ({
    type,
    content,
    autoCloseDelay = 0,
    onClose,
  }: AddMessageProps): number => {
    const id = nextId

    const message = {
      id,
      content: content,
      type,
      onClose,
    }

    messagesRef.current = [...messagesRef.current, message]
    setNextId(nextId + 1)
    setMessages(messagesRef.current)
    if (autoCloseDelay > 0) {
      setTimeout(() => clearMessage(id), autoCloseDelay)
    }
    return id
  }

  const clearAllMessages = () => {
    messagesRef.current = emptyMessages
    setMessages(messagesRef.current)
  }

  const clearMessage = (id: number) => {
    messagesRef.current = messagesRef.current.filter((m) => m.id !== id)
    setMessages(messagesRef.current)
  }

  // useEffect(() => {
  //   router.events.on("routeChangeComplete", clearAllMessages)

  //   return () => router.events.off("routeChangeComplete", clearAllMessages)
  // }, [router.events])

  return (
    <Context.Provider
      value={{
        messages,
        addMessage,
        clearAllMessages,
        clearMessage,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Provider
