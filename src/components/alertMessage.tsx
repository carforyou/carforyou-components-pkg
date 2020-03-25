import React, { FC, ReactNode } from "react"
import classnames from "classnames"

interface Props {
  /**
   * Any element to be displayed
   */
  children: ReactNode
  /**
   * Any icon to be displayed
   */
  icon?: () => ReactNode
  /**
   * Top and bottom border of the alert message
   */
  parallelBorder?: boolean
  /**
   * Type of alert we want to display
   */
  type: "error" | "warning" | "information"
}

const alertMessage: FC<Props> = ({ children, icon, parallelBorder, type }) => {
  return (
    <div
      className={classnames(
        "flex w-12/12 leading-sm font-base px-20 py-20",
        parallelBorder ? "border-t border-b" : "border rounded",
        {
          "border-yellow bg-yellow-light text-grey-dark": type === "warning",
          "border-teal bg-teal-light text-grey-dark": type === "information",
          "border-salmon bg-salmon-light text-salmon": type === "error"
        }
      )}
    >
      {icon ? (
        <div className="flex">
          <div className="items-baseline">{icon()}</div>
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  )
}

export default alertMessage
