import { createElement, FC, ReactNode } from "react"
import classnames from "classnames"

import { wrapLink } from "../../lib/buttonHelper"

interface Props {
  children: ReactNode
  selected?: boolean
  disabled?: boolean
  small?: boolean
  growing?: boolean
  position: "left" | "right" | "middle"
  wrapOnSmallScreens?: boolean
  onClick?: () => void
}

export const Button: FC<Props> = ({
  children,
  small,
  disabled,
  selected,
  onClick,
  growing,
  position,
  wrapOnSmallScreens,
}) => {
  const padding = classnames("px-8", small ? "py-8" : "py-16")
  const { clonedElement, isWrapped } = wrapLink(children, padding)

  return createElement(isWrapped ? "div" : "button", {
    ...(!isWrapped ? { type: "button" } : {}),
    className: classnames(
      "flex justify-center items-center leading-xs transition duration-200 cursor-pointer font-bold text-base border-t-2 border-r-2 focus:outline-none",
      selected ? "bg-teal text-white" : "bg-transparent text-teal",
      growing ? "flex-grow" : "w-12/12",
      disabled
        ? "cursor-not-allowed border-grey-3 bg-grey-1 text-grey-4 hover:border-grey-3 hover:bg-grey-1"
        : "border-teal focus:shadow-focus",
      wrapOnSmallScreens
        ? "border-b-0 border-l-2 sm:border-b-2 sm:border-l-0"
        : "border-b-2",
      {
        [padding]: !isWrapped,
        "rounded-none": position === "middle",
        "hover:bg-teal-light active:bg-teal-bright": !selected && !disabled,
        "hover:bg-teal-dark hover:border-teal-dark active:bg-teal-dark active:bg-teal-dark focus:bg-teal-dark focus:border-teal-dark":
          selected && !disabled,
      },
      wrapOnSmallScreens
        ? {
            "sm:border-l-2 rounded-t sm:rounded-l sm:rounded-t-none":
              position === "left",
            "border-b-2 rounded-b sm:rounded-r sm:rounded-b-none":
              position === "right",
          }
        : {
            "rounded-l border-l-2": position === "left",
            "rounded-r": position === "right",
          }
    ),
    onClick: !disabled ? onClick : null,
    disabled,
    children: clonedElement,
  })
}

export default Button
