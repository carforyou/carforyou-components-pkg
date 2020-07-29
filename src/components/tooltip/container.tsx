import React, { forwardRef } from "react"
import classNames from "classnames"
import { GetTooltipPropsArg } from "react-popper-tooltip"

import { TooltipPosition } from "."

const TooltipContainer = forwardRef<HTMLDivElement, GetTooltipPropsArg>(
  ({ tooltipPosition, children, ...props }, ref) => (
    <div
      ref={ref}
      {...props}
      className={classNames("flex flex-col relative", {
        "pb-10": tooltipPosition === TooltipPosition.top,
        "pl-10": tooltipPosition === TooltipPosition.right,
        "pt-10": tooltipPosition === TooltipPosition.bottom,
        "pr-10": tooltipPosition === TooltipPosition.left,
      })}
    >
      {children}
    </div>
  )
)

export default TooltipContainer
