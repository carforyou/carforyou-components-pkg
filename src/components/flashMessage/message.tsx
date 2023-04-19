import React, { FC, ReactNode } from "react"

import AlertMessage from "../alertMessage"
import CloseIcon from "../../assets/dist/icons/closeS"
import { FlashMessageType } from "./context"

export interface Props {
  content: ReactNode
  type: FlashMessageType
  remove: () => void
  renderIcon?: () => ReactNode
}

const FlashMessage: FC<Props> = ({ content, type, remove, renderIcon }) => (
  <div className="flex flex-row shadow-hard transition duration-200 rounded-4 mb-20">
    <AlertMessage type={type} icon={renderIcon}>
      <div className="w-12/12 flex p-20">
        <div className="flex flex-grow">{content}</div>
        <div
          className="cursor-pointer pl-20 -mt-10 -mr-20"
          onClick={remove}
          data-testid="flash-close"
        >
          <CloseIcon width="32" height="32" />
        </div>
      </div>
    </AlertMessage>
  </div>
)

export default FlashMessage
