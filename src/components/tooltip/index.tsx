import React, { FC, ReactNode, useState, useRef } from "react"

import PopUp from "./popUp"

export enum TooltipPosition {
  top = "top",
  bottom = "bottom",
  left = "left",
  right = "right",
}

export enum TooltipAlignment {
  start = "start",
  center = "center",
  end = "end",
}

const getSpaceAroundRect = ({ top, bottom, left, right }) => ({
  top,
  left,
  bottom: window.innerHeight - bottom,
  right: window.innerWidth - right,
})

interface SpaceAroundRect {
  top: number
  left: number
  bottom: number
  right: number
}

interface Props {
  /**
   * Content of the tooltip
   */
  renderContent: () => ReactNode
  /**
   * Gets the position where tooltip is supposed to be shown
   * the spaceAround argument is a spacing around the tooltip container
   * in pixel, therefore as a consumer you can perform all the calculations
   * and decide on which side render the tooltip
   */
  getPosition: (spaceAround: SpaceAroundRect) => TooltipPosition
  /**
   * Alignment the tooltip with the container
   */
  alignment?: TooltipAlignment
}

const Tooltip: FC<Props> = ({
  children,
  renderContent,
  getPosition,
  alignment = TooltipAlignment.center,
}) => {
  const tooltipContainer = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [calculatedPosition, setCalculatedPosition] = useState(null)

  return (
    <div
      ref={tooltipContainer}
      onClick={(event) => event.stopPropagation()}
      onMouseEnter={(event) => {
        event.stopPropagation()
        setCalculatedPosition(
          getPosition(
            getSpaceAroundRect(tooltipContainer.current.getBoundingClientRect())
          )
        )
        setIsVisible(true)
      }}
      onMouseLeave={(event) => {
        event.stopPropagation()
        setIsVisible(false)
      }}
      className="relative inline-block"
    >
      {isVisible ? (
        <PopUp position={calculatedPosition} alignment={alignment}>
          {renderContent()}
        </PopUp>
      ) : null}
      {children}
    </div>
  )
}

export default Tooltip
