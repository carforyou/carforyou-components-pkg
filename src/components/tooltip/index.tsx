import React, { FC, ReactNode, useState, useRef } from "react"

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

const spacingPosition = {
  top: "top",
  topLeft: "top",
  topRight: "top",
  bottom: "bottom",
  bottomLeft: "bottom",
  bottomRight: "bottom",
  left: "left",
  right: "right",
}

const oppositePosition = {
  top: TooltipPosition.bottom,
  topLeft: TooltipPosition.bottomLeft,
  topRight: TooltipPosition.bottomRight,
  bottom: TooltipPosition.top,
  bottomLeft: TooltipPosition.topLeft,
  bottomRight: TooltipPosition.topRight,
  left: TooltipPosition.right,
  right: TooltipPosition.left,
}

const getSpaceAroundRect = ({ top, bottom, left, right }) => ({
  top,
  left,
  bottom: window.innerHeight - bottom,
  right: window.innerWidth - right,
})

export const calculateTooltipPosition = (
  container,
  originalPosition,
  switchThreshold
) => {
  if (!switchThreshold && !container) {
    return originalPosition
  }

  const space = getSpaceAroundRect(container.getBoundingClientRect())[
    spacingPosition[originalPosition]
  ]

  return space < switchThreshold
    ? oppositePosition[originalPosition]
    : originalPosition
}

interface Props {
  /**
   * Content of the tooltip
   */
  renderContent: () => ReactNode
  /**
   * Position of the tooltip
   */
  position: TooltipPosition
  /**
   * Threshold of the position switch
   * If the space around tooltip container (on the side where tooltip is to be displayed)
   * is smaller than then threshold the tooltip will be moved
   */
  positionSwitchThreshold?: number
}

const Tooltip: FC<Props> = ({
  children,
  renderContent,
  position,
  positionSwitchThreshold,
}) => {
  const tooltipContainer = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [calculatedPosition, setCalculatedPosition] = useState(position)

  return (
    <div
      ref={tooltipContainer}
      onMouseEnter={(event) => {
        event.stopPropagation()
        setCalculatedPosition(
          calculateTooltipPosition(
            tooltipContainer.current,
            position,
            positionSwitchThreshold
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
        <PopUp position={calculatedPosition}>{renderContent()}</PopUp>
      ) : null}
      {children}
    </div>
  )
}

export default Tooltip
