import React, { FC } from "react"
import classNames from "classnames"

interface Props {
  renderContent?: () => JSX.Element
  position?: "right" | "left"
  alignItemsCenter?: "center" | "start"
  error?: boolean
}

const WithHorizontalLabel: FC<Props> = ({
  renderContent,
  position = "right",
  error = false,
  alignItemsCenter = "center",
  children,
}) => (
  <div
    className={classNames("flex leading-sm font-normal", {
      "items-center": alignItemsCenter === "center",
      "items-start": alignItemsCenter === "start",
      "text-salmon": error,
      "justify-between flex-row-reverse": position === "left",
      "flex-row": position === "right",
    })}
  >
    <span
      className={classNames("flex items-center", {
        "mr-5": position === "right",
        "ml-5": position === "left",
      })}
    >
      {children}
    </span>
    <span className="w-12/12">{renderContent && renderContent()}</span>
  </div>
)

export default WithHorizontalLabel
