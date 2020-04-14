import React, { FC, MouseEvent, ReactNode, createElement } from "react"
import classnames from "classnames"

import { wrapLink } from "../lib/buttonHelper"

interface Props {
  /** - */
  children: ReactNode
  dataTestid?: string
  teal?: boolean
  tealBorder?: boolean
  small?: boolean
  disabled?: boolean
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  submit?: boolean
  icon?: () => ReactNode
}

export const Button: FC<Props> = ({
  children,
  dataTestid,
  teal,
  tealBorder,
  small,
  disabled,
  onClick,
  submit,
  icon
}) => {
  const padding = classnames("px-10", small ? "min-h-36" : "min-h-52")
  const { clonedElement, isWrapped } = wrapLink(children, padding)

  return (
    <div className="flex flex-col">
      {createElement(isWrapped ? "div" : "button", {
        type: submit ? "submit" : "button",
        className: classnames(
          "flex w-12/12 justify-center items-center text-white leading-xs transition duration-200 cursor-pointer font-bold text-base rounded border focus:outline-none",
          { [padding]: !isWrapped },
          teal
            ? "bg-teal border-teal hover:bg-teal-dark focus:bg-teal"
            : tealBorder
            ? "bg-white border-teal text-teal hover:opacity-60"
            : "bg-salmon border-salmon hover:bg-salmon-dark focus:bg-salmon",
          disabled
            ? "bg-grey-3 border-grey-3 cursor-not-allowed hover:bg-grey-3"
            : null
        ),
        onClick: !disabled ? onClick : null,
        disabled,
        "data-testid": dataTestid,
        children: icon ? (
          <>
            {icon()}
            <span className="pl-5 pr-8">{clonedElement}</span>
          </>
        ) : (
          clonedElement
        )
      })}
    </div>
  )
}

export default Button
