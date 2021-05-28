import React, { FC, ReactNode } from "react"

import classNames from "classnames"

import styles from "./badges.module.css"
import { BadgeSize } from "../../types"

interface BadgeProps {
  size: BadgeSize
  text: string
  icon: JSX.Element
  tooltip?: ReactNode
}

const Badge: FC<BadgeProps> = ({ icon, text, size }) => {
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
  // TODO: if tooltip is provided, render it
  return content
}

export default Badge
export { BadgeProps }
