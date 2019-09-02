import * as React from "react"
import { FC, ReactNode } from "react"
import classnames from "classnames"

interface Props {
  children: ReactNode
  teal?: boolean
  large?: boolean
  disabled?: boolean
  smallText?: boolean
  fontBold?: boolean
  fontRegular?: boolean
  onClick?: () => void
}

const Button: FC<Props> = ({
  children,
  teal,
  large,
  disabled,
  smallText,
  fontRegular,
  onClick
}) => {
  return (
    <button
      type="submit"
      formNoValidate
      className={classnames(
        "flex w-12/12 px-10 justify-center items-center rounded text-white leading-xs transition-2 cursor-pointer appearance-none leading-none focus:outline-none",
        large ? "h-56" : "h-50",
        smallText ? "text-sm" : "text-base",
        fontRegular ? "font-regular" : "font-bold",
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
