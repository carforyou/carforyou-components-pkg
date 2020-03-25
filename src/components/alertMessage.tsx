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
  state: "error" | "warning" | "information"
}

const alertMessage: FC<Props> = ({ children, icon, parallelBorder, state }) => {
  return (
    <div
      className={classnames(
        "flex w-12/12 leading-sm font-base px-20 py-20",
        parallelBorder ? "border-t border-b" : "border rounded",
        {
          "border-yellow bg-yellow-light text-grey-dark": state === "warning",
          "border-teal bg-teal-light text-grey-dark": state === "information",
          "border-salmon bg-salmon-light text-salmon": state === "error"
        }
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
