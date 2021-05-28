import React, { FC, ReactNode } from "react"

import classNames from "classnames"
import styles from "./badges.module.css"

interface BadgeProps {
  tooltip?: ReactNode
  icon: () => JSX.Element
}

const Badge: FC<BadgeProps> = ({ icon, children }) => {
  const content = (
    <div
      className={classNames(
        styles.space,
        "inline-flex items-center border border-grey-1 rounded-4 cursor-pointer text-sm font-bold"
      )}
    >
      {children ? (
        <>
          <span className="mr-4">{icon()}</span>
          {children}
        </>
      ) : (
        icon()
      )}
    </div>
  )
  // TODO: if tooltip is provided, render it
  return content
}

export default Badge
