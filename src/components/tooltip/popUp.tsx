import React, { FC } from "react"
import classNames from "classnames"

interface Props {
  position: "top" | "bottom" | "left" | "right"
}

const PopUp: FC<Props> = ({ children, position }) => (
  <div
    className={classNames(
      "w-tooltip p-15 bg-white rounded-4 shadow-hard z-modal absolute transform",
      {
        "left-half -translate-x-1/2": ["top", "bottom"].includes(position),
        "top-half -translate-y-1/2": ["left", "right"].includes(position),
        "tooltip_top bottom-tooltip mb-10": position === "top",
        "tooltip_bottom top-tooltip mt-10": position === "bottom",
        "tooltip_left right-tooltip mr-10": position === "left",
        "tooltip_right left-tooltip ml-10": position === "right",
      }
    )}
  >
    {children}
  </div>
)

export default PopUp
