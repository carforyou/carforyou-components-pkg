import React, { FC } from "react"
import classNames from "classnames"

interface Props {
  text: string
  hasError?: boolean
}

const HintText: FC<Props> = ({ text, hasError }) => (
  <span
    className={classNames("font-bold text-sm", {
      "text-salmon": hasError
    })}
  >
    {text}
  </span>
)

export default HintText
