import React, { FC, MouseEvent, ReactNode } from "react"
import classnames from "classnames"

import { wrapLink } from "../lib/buttonHelper"

export interface Props {
  /** - */
  children: ReactNode
  dataTestid?: string
  teal?: boolean
  tealBorder?: boolean
  small?: boolean
  disabled?: boolean
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

export const Button: FC<Props> = ({
  children,
  dataTestid,
  teal,
  tealBorder,
  small,
  disabled,
  onClick
}) => {
  const padding = classnames("px-10", small ? "py-8" : "py-16")
  const { clonedElement, isWrapped } = wrapLink(children, padding)

  return (
    <button
      type="submit"
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
      {clonedElement}
    </button>
  )
}

export default Button
