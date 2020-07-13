import React, { FC, ReactNode, useState } from "react"

import PopUp from "./popUp"

export enum TooltipPosition {
  top = "top",
  bottom = "bottom",
  left = "left",
  right = "right",
}

interface Props {
  renderContent: () => ReactNode
  position: TooltipPosition
}

const Tooltip: FC<Props> = ({ children, renderContent, position }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div
      onMouseEnter={(event) => {
        event.stopPropagation()
        setIsVisible(true)
      }}
      onMouseLeave={(event) => {
        event.stopPropagation()
        setIsVisible(false)
      }}
      className="relative inline-block"
    >
      {isVisible ? <PopUp position={position}>{renderContent()}</PopUp> : null}
      {children}
    </div>
  )
}

export default Tooltip
