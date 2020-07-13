import React, { FC, ReactNode, useState } from "react"

import PopUp from "./popUp"

interface Props {
  renderContent: () => ReactNode
  position: "top" | "bottom" | "left" | "right"
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
