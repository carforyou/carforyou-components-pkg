import React, { FC, ReactNode } from "react"
import TooltipTrigger from "react-popper-tooltip"

import TooltipContainer from "./container"
import TooltipArrow from "./arrow"

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

type Placement =
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end"
  | "right"
  | "right-start"
  | "right-end"

const getPlacement = (
  position: TooltipPosition,
  alignment: TooltipAlignment
): Placement =>
  (alignment === "center" ? position : `${position}-${alignment}`) as Placement

const Tooltip: FC<Props> = ({
  children,
  renderContent,
  preferredPosition,
  alignment = TooltipAlignment.center,
}) => {
  return (
    <TooltipTrigger
      placement={getPlacement(preferredPosition, alignment)}
      trigger="hover"
      tooltip={({
        arrowRef,
        tooltipRef,
        getArrowProps,
        getTooltipProps,
        placement,
      }) => {
        const tooltipPosition = placement.split("-")[0]

        return (
          <TooltipContainer
            {...getTooltipProps({
              ref: tooltipRef,
              tooltipPosition,
            })}
          >
            <TooltipArrow
              {...getArrowProps({
                ref: arrowRef,
                tooltipPosition,
              })}
            />
            <div className="p-15 bg-white rounded-4 shadow-hard">
              {renderContent()}
            </div>
          </TooltipContainer>
        )
      }}
    >
      {({ getTriggerProps, triggerRef }) => (
        <div
          {...getTriggerProps({
            ref: triggerRef,
            className: "inline-block",
          })}
        >
          {children}
        </div>
      )}
    </TooltipTrigger>
  )
}

export default Tooltip
