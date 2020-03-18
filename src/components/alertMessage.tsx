import React, { FC, ReactNode } from "react"
import classnames from "classnames"

interface Props {
  /** - */
  children: ReactNode
  warning?: boolean
  information?: boolean
  icon?: () => ReactNode
  parallelBorder?: boolean
}

const alertMessage: FC<Props> = ({
  warning,
  information,
  children,
  icon,
  parallelBorder
}) => {
  return (
    <div
      className={classnames(
        "flex w-12/12 leading-sm font-base px-20 py-20",
        parallelBorder ? "border-t border-b" : "border rounded",
        warning
          ? "border-yellow-dark bg-yellow"
          : information
          ? "border-teal bg-teal-light text-grey-dark"
          : "border-salmon bg-pink text-salmon"
      )}
    >
      {icon ? (
        <div className="flex items-center">
          <div>{icon()}</div>
          <span className="pl-15">{children}</span>
        </div>
      ) : (
        children
      )}
    </div>
  )
}

export default alertMessage
