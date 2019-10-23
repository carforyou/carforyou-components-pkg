import React, { FC, ReactNode } from "react"
import classnames from "classnames"

import { wrapLink } from "../../lib/buttonHelper"

interface Props {
  children: ReactNode
  selected?: boolean
  disabled?: boolean
  small?: boolean
  position: "left" | "right" | "middle"
  onClick?: () => void
}

export const Button: FC<Props> = ({
  children,
  small,
  disabled,
  selected,
  onClick,
  position
}) => {
  const padding = classnames("px-8", small ? "py-8" : "py-16")
  const { clonedElement, isWrapped } = wrapLink(children, padding)

  return (
    <button
      type="submit"
      className={classnames(
        "flex w-12/12 justify-center items-center leading-xs transition-2 cursor-pointer font-bold text-base border-t-2 border-b-2 border-r-2 focus:outline-none",
        selected ? "bg-teal text-white" : "bg-transparent text-teal",
        disabled
          ? "cursor-not-allowed border-grey-3 bg-grey-1 text-grey-3 hover:border-grey-3 hover:bg-grey-1"
          : "border-teal focus:shadow-focus",
        {
          [padding]: !isWrapped,
          "rounded-none": position === "middle",
          "rounded-l border-l-2": position === "left",
          "rounded-r": position === "right",
          "hover:bg-teal-light active:bg-teal-bright": !selected && !disabled,
          "hover:bg-teal-dark hover:border-teal-dark active:bg-teal-dark active:bg-teal-dark focus:bg-teal-dark focus:border-teal-dark":
            selected && !disabled
        }
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {clonedElement}
    </button>
  )
}

export default Button
