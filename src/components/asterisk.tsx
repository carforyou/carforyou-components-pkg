import React, { FC } from "react"

interface Props {
  isRelative?: boolean
}

const Asterisk: FC<Props> = ({ isRelative = true }) => (
  <span
    className={`text-salmon leading-xxs ${
      isRelative && "relative top-requiredIndicator"
    }`}
  >
    &nbsp;*
  </span>
)

export default Asterisk
