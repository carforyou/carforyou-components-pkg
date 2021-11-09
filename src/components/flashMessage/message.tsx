import React, { FC, ReactNode } from "react"

import { FlashMessageType } from "./context"
import AlertMessage from "../alertMessage"
import CloseIcon from "../../assets/dist/icons/closeS"

interface Props {
  content: ReactNode
  type: FlashMessageType
  remove: () => void
}

const FlashMessage: FC<Props> = ({ content, type, remove }) => (
  <div className="flex flex-row shadow-hard transition duration-200 rounded-4 mb-20">
    <AlertMessage type={type}>
      <div className="w-12/12 flex p-20">
        <div className="flex flex-grow">{content}</div>
        <div
          className="cursor-pointer pl-20"
          onClick={remove}
          data-testid="flash-close"
        >
          <CloseIcon width="24" height="24" className="text-white" />
        </div>
      </div>
    </AlertMessage>
  </div>
)

export default FlashMessage
