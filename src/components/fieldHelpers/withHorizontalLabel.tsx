import React, { FC } from "react"
import classNames from "classnames"

interface Props {
  renderContent: () => JSX.Element
  position?: "right" | "left"
  alignItems?: "center" | "start"
  error?: boolean
  htmlFor: string
  disabled?: boolean
}

const WithHorizontalLabel: FC<Props> = ({
  renderContent,
  position = "right",
  error = false,
  alignItems = "center",
  children,
  htmlFor,
  disabled,
}) => (
  <div
    className={classNames("flex leading-sm font-normal", {
      "items-center": alignItems === "center",
      "items-start": alignItems === "start",
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
    <label
      htmlFor={htmlFor}
      className={classNames("w-12/12", {
        "cursor-not-allowed text-grey-4": disabled,
        "cursor-pointer": !disabled,
      })}
    >
      {renderContent()}
    </label>
  </div>
)

export default WithHorizontalLabel
