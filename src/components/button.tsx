import React, { FC, MouseEvent, ReactNode } from "react"
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
  const padding = classnames("px-10", icon ? "py-10" : small ? "py-8" : "py-16")
  const { clonedElement, isWrapped } = wrapLink(children, padding)

  return (
    <button
      type={submit ? "submit" : "button"}
      className={classnames(
        "flex w-12/12 justify-center items-center text-white leading-xs transition-2 cursor-pointer font-bold text-base rounded focus:outline-none",
        { [padding]: !isWrapped },
        teal
          ? "bg-teal hover:bg-teal-dark focus:bg-teal"
          : tealBorder
          ? "bg-white border border-teal text-teal hover:opacity-60"
          : "bg-salmon hover:bg-salmon-dark focus:bg-salmon",
        disabled ? "cursor-not-allowed bg-grey-3 hover:bg-grey-3" : null
      )}
      onClick={onClick}
      disabled={disabled}
      data-testid={dataTestid}
    >
      {icon ? (
        <>
          {icon()}
          <span className="pl-8 pr-16">{clonedElement}</span>
        </>
      ) : (
        clonedElement
      )}
    </button>
  )
}

export default Button
