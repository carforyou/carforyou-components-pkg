import React, { FC, ReactNode, useState } from "react"

import PopUp from "./popUp"

export enum TooltipPosition {
  top = "top",
  topLeft = "topLeft",
  topRight = "topRight",
  bottom = "bottom",
  bottomLeft = "bottomLeft",
  bottomRight = "bottomRight",
  left = "left",
  right = "right",
}

interface Props {
  /**
   * Content of the tooltip
   */
  renderContent: () => ReactNode
  /**
   * Position of the tooltip
   * It's consumer's responsibility to render tooltip in the right position
   * the component itself doesn't alter the position that's passed to it
   * in any way
   */
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
