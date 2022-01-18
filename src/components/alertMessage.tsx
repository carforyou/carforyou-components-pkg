import React, { FC, ReactNode } from "react"
import classnames from "classnames"

export type AlertMessageType = "error" | "warning" | "information" | "success"
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
  fullWidth?: boolean
  /**
   * Type of alert we want to display
   */
  type: AlertMessageType
  /**
   * Any element is centered
   */
  alignCenter?: boolean
}

export const AlertMessage: FC<Props> = ({
  children,
  icon,
  fullWidth,
  type,
  alignCenter,
}) => {
  return (
    <div
      className={classnames(
        "flex items-center w-12/12 leading-sm text-base px-10",
        fullWidth ? "border-t border-b" : "border rounded-4",
        alignCenter ? "justify-center" : null,
        {
          "border-yellow bg-yellow-light text-grey-dark": type === "warning",
          "border-teal bg-teal-light text-grey-dark": type === "information",
          "border-salmon bg-salmon-light text-salmon": type === "error",
          "border-green-light bg-green-opaque text-grey-dark":
            type === "success",
        }
      )}
    >
      {icon ? icon() : null}
      {children}
    </div>
  )
}

export default AlertMessage
export { Props as AlertMessageProps }
