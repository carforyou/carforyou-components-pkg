import { createContext, ReactNode } from "react"

import { FlashMessageType } from "."

export type FlashMessage = {
  id: number
  content: ReactNode
  type: FlashMessageType
  onClose?: () => void
}

export type FlashMessages = Array<FlashMessage>

export interface AddMessageProps {
  type: FlashMessageType
  content: ReactNode
  autoCloseDelay?: number
  onClose?: () => void
  renderIcon?: () => ReactNode
}

export interface FlashMessagesContext {
  messages: FlashMessages
  addMessage?: (props: AddMessageProps) => number
  clearMessage?: (id: number) => void
  clearAllMessages?: () => void
}

export const emptyMessages: FlashMessages = []

const initialContext: FlashMessagesContext = {
  messages: emptyMessages,
}

const Context = createContext(initialContext)

export default Context
