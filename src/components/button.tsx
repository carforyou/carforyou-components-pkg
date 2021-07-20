import React, { createElement, FC, MouseEvent, ReactNode } from "react"
import classnames from "classnames"

import { wrapLink } from "../lib/buttonHelper"

interface Props {
  /** - */
  children: ReactNode
  dataTestid?: string
  style?: "salmon" | "teal" | "teal-border" | "white"
  size?: "large" | "small" | "responsive"
  disabled?: boolean
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  submit?: boolean
  icon?: () => ReactNode
  /**
   * Link cannot have a button as a child. In some rare cases you might want to
   * render a button inside a bigger component that is a link as a whole (cards, banners, etc.).
   * In such case you can use a `tag` prop to force to render `div` and avoid invalid markup
   */
  tag?: "div" | "button"
}

export const Button: FC<Props> = ({
  children,
  dataTestid,
  size = "large",
  style = "salmon",
  disabled,
  onClick,
  submit,
  icon,
  tag,
}) => {
  const padding = classnames("px-10", {
    "min-h-36": size === "small",
    "min-h-52": size === "large",
    "min-h-36 lg:min-h-52": size === "responsive",
  })

  const buttonStyles = {
    teal: "bg-teal hover:bg-teal-dark focus:bg-teal border-teal",
    "teal-border": "bg-white text-teal hover:opacity-60 border-teal",
    white: "bg-none text-white hover:opacity-60 border-white",
    salmon: "bg-salmon border-salmon hover:bg-salmon-dark focus:bg-salmon",
  }

  const disabledStyles = {
    teal: "bg-grey-1 border-grey-1 hover:bg-grey-1 text-grey-4",
    "teal-border": "text-grey-3 border-grey-3 hover:opacity-100",
    white: "text-grey-3 border-grey-3 hover:opacity-100",
    salmon: "bg-grey-1 border-grey-1 hover:bg-grey-1 text-grey-4",
  }

  const classes = classnames(
    "rounded border",
    buttonStyles[style],
    disabled && disabledStyles[style],
    {
      "cursor-not-allowed": disabled,
    }
  )
  const buttonClasses = classnames(padding, classes)

  const { clonedElement, isWrapped } = wrapLink(
    children,
    buttonClasses,
    (originalChildren) =>
      icon ? (
        <>
          {icon()}
          <span className="pl-5 pr-8">{originalChildren}</span>
        </>
      ) : (
        originalChildren
      )
  )

  return (
    <div className="flex flex-col">
      {createElement(tag || isWrapped ? "div" : "button", {
        ...(!isWrapped && tag !== "div"
          ? { type: submit ? "submit" : "button" }
          : {}),
        className: classnames(
          "flex w-12/12 justify-center items-center text-center text-white leading-xs transition duration-200 cursor-pointer font-bold text-base focus:outline-none",
          {
            [buttonClasses]: !isWrapped,
          }
        ),
        onClick: !disabled ? onClick : null,
        disabled,
        "data-testid": dataTestid,
        children: clonedElement,
      })}
    </div>
  )
}

export default Button
export { Props as ButtonProps }
