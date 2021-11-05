import React, { FC, ReactNode } from "react"

import classNames from "classnames"

import { BadgeBackground } from "./types"
import styles from "./badges.module.css"

import Tooltip, { TooltipPosition } from "../tooltip/index"

interface Props {
  size: "small" | "large"
  text: string
  icon: ReactNode
  background: BadgeBackground
  tooltipContent?: ReactNode
}

const BaseBadge: FC<Props> = ({
  icon,
  text,
  size,
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
          "bg-grey-dark text-white": background === "grey",
          "bg-white border border-grey-1": background === "white",
        },
        {
          "text-base py-5 px-10": size === "large",
          "text-sm px-5": size === "small",
        }
      )}
    >
      {icon}
      {text && <span className="mx-5">{text}</span>}
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
