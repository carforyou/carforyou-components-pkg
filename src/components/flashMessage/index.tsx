import React, { FC, useContext } from "react"

import FlashMessage from "./message"
import { FlashMessagesContext } from "./context/index"

const FlashMessages: FC = () => {
  const { messages, clearMessage } = useContext(FlashMessagesContext)

  return messages.length ? (
    <div className="fixed top-26 left-0 right-0 z-flashMessage">
      <div className="m-auto max-w-container p-10">
        {messages.map(({ id, content, type, onClose, renderIcon }) => (
          <FlashMessage
            key={`${type}-${id}`}
            content={content}
            type={type}
            renderIcon={renderIcon}
            remove={() => {
              onClose ? onClose() : null
              clearMessage(id)
            }}
          />
        ))}
      </div>
    </div>
  ) : null
}

export default FlashMessages
