import React, { forwardRef } from "react"
import classNames from "classnames"
import { GetArrowPropsArg } from "react-popper-tooltip"

import { TooltipPosition } from "."

const TooltipArrow = forwardRef<HTMLDivElement, GetArrowPropsArg>(
  ({ tooltipPosition, ...props }, ref) => (
    <div
      ref={ref}
      {...props}
      className={classNames("tooltipArrow", {
        "tooltipArrow-bottom": tooltipPosition === TooltipPosition.top,
        "tooltipArrow-left": tooltipPosition === TooltipPosition.right,
        "tooltipArrow-top": tooltipPosition === TooltipPosition.bottom,
        "tooltipArrow-right": tooltipPosition === TooltipPosition.left,
      })}
    />
  )
)

export default TooltipArrow
