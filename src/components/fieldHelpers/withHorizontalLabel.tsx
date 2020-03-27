import React, { FC } from "react"
import classNames from "classnames"

interface Props {
  renderContent?: () => JSX.Element
  position?: "right" | "left"
  error?: boolean
}

const WithHorizontalLabel: FC<Props> = ({
  renderContent,
  position = "right",
  error = false,
  children
}) => (
  <div
    className={classNames("flex items-center leading-sm font-normal", {
      "text-salmon": error,
      "justify-between flex-row-reverse": position === "left",
      "flex-row": position === "right"
    })}
  >
    <span
      className={classNames("flex items-center", {
        "mr-5": position === "right",
        "ml-5": position === "left"
      })}
    >
      {children}
    </span>
    <span className="w-12/12">{renderContent && renderContent()}</span>
  </div>
)

export default WithHorizontalLabel
