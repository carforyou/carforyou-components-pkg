import React, { FC, MouseEvent, ReactNode, createElement } from "react"
import classnames from "classnames"

import { wrapLink } from "../lib/buttonHelper"

interface Props {
  /** - */
  children: ReactNode
  dataTestid?: string
  teal?: boolean
  tealBorder?: boolean
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
  teal,
  tealBorder,
  size = "large",
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
  const classes = classnames("rounded border", {
    "bg-teal hover:bg-teal-dark focus:bg-teal": teal,
    "bg-white text-teal hover:opacity-60": tealBorder,
    "border-teal": teal || tealBorder,
    "bg-salmon border-salmon hover:bg-salmon-dark focus:bg-salmon":
      !teal && !tealBorder,
    "text-grey-3 hover:opacity-100": disabled && tealBorder,
    "bg-grey-3 hover:bg-grey-3": disabled && !tealBorder,
    "cursor-not-allowed border-grey-3": disabled,
  })
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
        ...(!isWrapped ? { type: submit ? "submit" : "button" } : {}),
        className: classnames(
          "flex w-12/12 justify-center items-center text-white leading-xs transition duration-200 cursor-pointer font-bold text-base focus:outline-none",
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
