/* eslint-disable @typescript-eslint/naming-convention */
import React, { FC } from "react"
import classNames from "classnames"

import { TooltipPosition } from "./index"

interface Props {
  position: TooltipPosition
}

const PopUp: FC<Props> = ({ children, position }) => (
  <div
    className={classNames(
      "w-tooltip p-15 bg-white rounded-4 shadow-hard z-modal absolute transform",
      {
        "left-half -translate-x-1/2": [
          TooltipPosition.top,
          TooltipPosition.bottom,
        ].includes(position),
        "top-half -translate-y-1/2": [
          TooltipPosition.left,
          TooltipPosition.right,
        ].includes(position),
        "tooltip_top bottom-tooltip mb-10": position === TooltipPosition.top,
        "tooltip_bottom top-tooltip mt-10": position === TooltipPosition.bottom,
        "tooltip_left right-tooltip mr-10": position === TooltipPosition.left,
        "tooltip_right left-tooltip ml-10": position === TooltipPosition.right,
        /* eslint-disable @typescript-eslint/naming-convention */
        "tooltip_topLeft bottom-tooltip mb-10 right-0":
          position === TooltipPosition.topLeft,
        "tooltip_topRight bottom-tooltip mb-10 left-0":
          position === TooltipPosition.topRight,
        "tooltip_bottomLeft top-tooltip mt-10 right-0":
          position === TooltipPosition.bottomLeft,
        "tooltip_bottomRight top-tooltip mt-10 left-0":
          position === TooltipPosition.bottomRight,
        /* eslint-enable @typescript-eslint/naming-convention */
      }
    )}
  >
    {children}
  </div>
)

export default PopUp
