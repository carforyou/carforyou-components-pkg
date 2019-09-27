import * as React from "react"
import { FC, MouseEvent, ReactNode } from "react"
import classnames from "classnames"

export interface Props {
  children: ReactNode
  teal?: boolean
  small?: boolean
  disabled?: boolean
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

export const Button: FC<Props> = ({
  children,
  teal,
  small,
  disabled,
  onClick
}) => {
  return (
    <button
      type="submit"
      className={classnames(
        "flex w-12/12 px-10 justify-center items-center text-white leading-xs transition-2 cursor-pointer font-bold text-base rounded focus:outline-none",
        small ? "py-8" : "py-16",
        teal
          ? "bg-teal hover:bg-teal-dark focus:bg-teal"
          : "bg-salmon hover:bg-salmon-dark focus:bg-salmon",
        disabled ? "cursor-not-allowed bg-grey-3 hover:bg-grey-3" : null
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
