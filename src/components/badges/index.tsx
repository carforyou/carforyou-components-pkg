import React, { FC, ReactNode } from "react"

import classNames from "classnames"

import styles from "./badges.module.css"

import Tooltip, { TooltipPosition } from "../tooltip"
import { Language } from "../../types"

export type BadgeSize = "small" | "large"
export interface BadgeProps {
  size: BadgeSize
  text: string
  icon: ReactNode
  tooltipContent?: ReactNode
}
export interface ExternalBadgeProps {
  language: Language
  size?: BadgeSize
  tooltipContent?: ReactNode
}

const Badge: FC<BadgeProps> = ({ icon, text, size, tooltipContent }) => {
  const content = (
    <div
      className={classNames(
        styles.space,
        "inline-flex items-center border border-grey-1 rounded-4 cursor-pointer text-sm font-bold"
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

export default Badge
