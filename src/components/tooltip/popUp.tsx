import React, { FC } from "react"
import classNames from "classnames"

interface Props {
  position: "top" | "bottom" | "left" | "right"
}

const tooltipPosition = {
  top: "bottom",
  bottom: "top",
  left: "left",
  right: "right",
}

const PopUp: FC<Props> = ({ children, position }) => (
  <div
    className={classNames(
      "w-tooltip p-15 bg-white rounded-4 shadow-hard z-modal absolute transform",
      `tooltip_${position}`,
      `${tooltipPosition[position]}-tooltip`,
      `m${tooltipPosition[position][0]}-10`,
      {
        "left-half -translate-x-1/2": ["top", "bottom"].includes(position),
        "top-half -translate-y-1/2": ["left", "right"].includes(position),
      }
    )}
  >
    {children}
  </div>
)

export default PopUp
