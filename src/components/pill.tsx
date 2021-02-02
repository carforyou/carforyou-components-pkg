import React, { FC, ReactNode } from "react"
import classnames from "classnames"

interface Props {
  children: ReactNode
  secondary?: boolean
}

export const Pill: FC<Props> = ({ children, secondary }) => (
  <div
    className={classnames(
      "inline-block text-white rounded-pill text-xs pt-0 pb-1 px-5",
      secondary ? "bg-black" : "bg-salmon"
    )}
  >
    {children}
  </div>
)

export default Pill
export { Props as PillProps }
