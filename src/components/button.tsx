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
  const padding = classnames("px-10 py-5", small ? "min-h-36" : "min-h-52")
  const { clonedElement, isWrapped } = wrapLink(children, padding)

  return (
    <button
      type={submit ? "submit" : "button"}
      className={classnames(
        "w-12/12 text-white leading-xs transition-2 cursor-pointer font-bold text-base rounded border focus:outline-none",
        { [padding]: !isWrapped },
        teal
          ? "bg-teal border-teal hover:bg-teal-dark focus:bg-teal"
          : tealBorder
          ? "bg-white border-teal text-teal hover:opacity-60"
          : "bg-salmon border-salmon hover:bg-salmon-dark focus:bg-salmon",
        disabled
          ? "bg-grey-3 border-grey-3 cursor-not-allowed hover:bg-grey-3"
          : null
      )}
      onClick={onClick}
      disabled={disabled}
      data-testid={dataTestid}
    >
      {icon ? (
        <>
          {icon()}
          <span className="pl-5 pr-8">{clonedElement}</span>
        </>
      ) : (
        clonedElement
      )}
    </button>
  )
}

export default Button
