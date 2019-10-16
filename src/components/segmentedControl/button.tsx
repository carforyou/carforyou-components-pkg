import React, { FC, ReactNode } from "react"
import classnames from "classnames"

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
  return (
    <button
      type="submit"
      className={classnames(
        "flex w-12/12 px-8 justify-center items-center text-white leading-xs transition-2 cursor-pointer font-bold text-base focus:outline-none",
        small ? "py-8" : "py-16",
        selected
          ? "bg-teal hover:bg-teal-dark focus:bg-teal"
          : "bg-white border-teal text-teal",
        disabled
          ? "cursor-not-allowed border-grey-3 bg-grey-1 text-grey-3 hover:border-grey-3 hover:bg-grey-1"
          : null,
        {
          "rounded-none": position === "middle",
          "rounded-l": position === "left",
          "rounded-r": position === "right",
          "border-r-2": !selected || disabled,
          "border-l-2": (!selected || disabled) && position === "left",
          "hover:bg-teal-light active:bg-teal-bright focus:shadow-segmentedControlFocus":
            !selected && !disabled,
          "border-t-2 border-b-2": !selected || disabled
        }
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
