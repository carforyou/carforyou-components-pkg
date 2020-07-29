import React, { FC, ReactNode } from "react"
import TooltipTrigger from "react-tooltip-lite"

export enum TooltipPosition {
  up = "up",
  down = "down",
  left = "left",
  right = "right",
}

export enum TooltipAlignment {
  start = "start",
  middle = "middle",
  end = "end",
}
interface SpaceAroundRect {
  top: number
  left: number
  bottom: number
  right: number
}

export interface Props {
  /**
   * Content of the tooltip
   */
  renderContent: () => ReactNode
  /**
   * Preferred position of the tooltip, the position
   * will be adjusted if there's not enough space for
   * the tooltip to be rendered
   */
  preferredPosition: TooltipPosition
  /**
   * Alignment the tooltip with the container
   */
  alignment?: TooltipAlignment
}

const Tooltip: FC<Props> = ({
  children,
  renderContent,
  preferredPosition,
  alignment = TooltipAlignment.middle,
}) => {
  return (
    <TooltipTrigger
      content={
        <div className="p-15 shadow-hard rounded-4">{renderContent()}</div>
      }
      direction={`${preferredPosition}-${alignment}`}
      padding="0px"
      background="#fff"
      tipContentHover={true}
    >
      {children}
    </TooltipTrigger>
  )
}

export default Tooltip
