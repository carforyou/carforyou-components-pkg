import React, { FC, ReactNode } from "react"

import classNames from "classnames"

import { BadgeBackground, BadgeSize } from "./types"
import styles from "./badges.module.css"

import Tooltip, { TooltipPosition } from "../tooltip/index"

interface Props {
  size: BadgeSize
  text: string
  withText: boolean
  icon: ReactNode
  background: BadgeBackground
  tooltipContent?: ReactNode
}

const BaseBadge: FC<Props> = ({
  icon,
  text,
  size,
  withText,
  background,
  tooltipContent,
}) => {
  const content = (
    <div
      className={classNames(
        "inline-flex items-center rounded-4 font-bold",
        {
          "cursor-pointer": tooltipContent,
        },
        {
          "bg-green-bright": background === "green",
          "bg-grey-dark": background === "grey",
          "bg-white border border-grey-1": background === "white",
        },
        {
          "text-base py-5 px-10": size === "large",
          "text-sm py-3 px-10": size === "medium",
          "text-sm px-5": size === "small",
        }
      )}
    >
      {icon}
      {withText && <span className="ml-5">{text}</span>}
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
