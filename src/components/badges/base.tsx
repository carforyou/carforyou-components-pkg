import React, { FC, ReactNode } from "react"

import classNames from "classnames"

import { BadgeBackground, BadgeHeight, BadgeSize } from "./types"
import styles from "./badges.module.css"

import Tooltip, { TooltipPosition } from "../tooltip/index"

interface Props {
  size: BadgeSize
  height: BadgeHeight
  text: string
  icon: ReactNode
  background: BadgeBackground
  tooltipContent?: ReactNode
}

const BaseBadge: FC<Props> = ({
  icon,
  text,
  size,
  height,
  background,
  tooltipContent,
}) => {
  const content = (
    <div
      className={classNames(
        height === "small" && styles.space,
        "inline-flex items-center rounded-4 font-bold",
        {
          "cursor-pointer": tooltipContent,
        },
        {
          "bg-whatsapp": background === "bg-whatsapp",
          "bg-white border border-grey-1": background === "bg-white",
        },
        {
          "text-base py-5 px-10": height === "large",
          "text-sm": height === "small",
        }
      )}
    >
      {icon}
      {size === "large" && <span className="ml-5">{text}</span>}
    </div>
  )

  if (!tooltipContent) return content

  return (
    <Tooltip
      renderContent={() => (
        <div className={styles.toolTipContainer}>{tooltipContent}</div>
      )}
      preferredPosition={TooltipPosition.up}
    >
      {content}
    </Tooltip>
  )
}

export default BaseBadge
