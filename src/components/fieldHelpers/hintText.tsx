import React, { FC } from "react"
import classNames from "classnames"

interface Props {
  text: string
  hasError?: boolean
}

const HintText: FC<Props> = ({ text, hasError }) => (
  <span
    className={classNames(
      "inline-block font-bold text-sm text-left h-20 w-12/12",
      {
        "text-salmon": hasError,
      }
    )}
  >
    {text}
  </span>
)

export default HintText
