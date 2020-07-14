/* eslint-disable @typescript-eslint/naming-convention */
import React, { FC } from "react"
import classNames from "classnames"

import { TooltipPosition, TooltipAlignment } from "./index"

interface Props {
  position: TooltipPosition
  alignment: TooltipAlignment
}

const PopUp: FC<Props> = ({ children, position, alignment }) => (
  <div
    className={classNames(
      "w-tooltip p-15 bg-white rounded-4 shadow-hard z-modal absolute transform",
      {
        "bottom-tooltip mb-10": position === TooltipPosition.top,
        "top-tooltip mt-10": position === TooltipPosition.bottom,
        "right-tooltip mr-10": position === TooltipPosition.left,
        "left-tooltip ml-10": position === TooltipPosition.right,
        "tooltip_topCenter left-half -translate-x-1/2":
          position === TooltipPosition.top &&
          alignment === TooltipAlignment.center,
        "tooltip_topEnd right-0":
          position === TooltipPosition.top &&
          alignment === TooltipAlignment.end,
        "tooltip_topStart left-0":
          position === TooltipPosition.top &&
          alignment === TooltipAlignment.start,
        "tooltip_bottomCenter left-half -translate-x-1/2":
          position === TooltipPosition.bottom &&
          alignment === TooltipAlignment.center,
        "tooltip_bottomEnd right-0":
          position === TooltipPosition.bottom &&
          alignment === TooltipAlignment.end,
        "tooltip_bottomStart left-0":
          position === TooltipPosition.bottom &&
          alignment === TooltipAlignment.start,
        "tooltip_leftCenter top-half -translate-y-1/2":
          position === TooltipPosition.left &&
          alignment === TooltipAlignment.center,
        "tooltip_leftStart -top-10":
          position === TooltipPosition.left &&
          alignment === TooltipAlignment.start,
        "tooltip_leftEnd -bottom-10":
          position === TooltipPosition.left &&
          alignment === TooltipAlignment.end,
        "tooltip_rightCenter top-half -translate-y-1/2":
          position === TooltipPosition.right &&
          alignment === TooltipAlignment.center,
        "tooltip_rightStart -top-10":
          position === TooltipPosition.right &&
          alignment === TooltipAlignment.start,
        "tooltip_rightEnd -bottom-10":
          position === TooltipPosition.right &&
          alignment === TooltipAlignment.end,

        // "tooltip_bottomLeft right-0":
        //   position === TooltipPosition.bottomLeft,
        // "tooltip_bottomRight left-0":
        //   position === TooltipPosition.bottomRight,
      }
    )}
  >
    {children}
  </div>
)

export default PopUp
