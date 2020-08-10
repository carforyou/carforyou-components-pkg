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
    <div className="inline-block" onClick={(e) => e.preventDefault()}>
      <TooltipTrigger
        content={
          <div className="rounded-4 shadow-hard p-15 bg-white">
            {renderContent()}
          </div>
        }
        direction={`${preferredPosition}-${alignment}`}
        padding="0px"
        tipContentHover={true}
      >
        {children}
      </TooltipTrigger>
    </div>
  )
}

export default Tooltip
