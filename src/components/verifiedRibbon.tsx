import React, { FC } from "react"

import classnames from "classnames"

import Verified from "./icons/verified"
import Ribbon from "./icons/ribbon"

interface Props {
  label?: string
  ribbonWidth: string
  iconWidth: string
  fontSize?:
    | "text-xs"
    | "text-sm"
    | "text-base"
    | "text-lg"
    | "text-xl"
    | "text-2xl"
    | "text-3xl"
}

const VerifiedRibbon: FC<Props> = ({
  label,
  ribbonWidth,
  iconWidth,
  fontSize = "text-base",
}) => {
  return (
    <div className="relative">
      <span className="text-grey-dark">
        <Ribbon width={ribbonWidth} />
      </span>
      <span className="absolute left-0 mt-10 ml-10">
        <Verified width={iconWidth} />
        <span className={classnames("text-white font-bold pl-5", fontSize)}>
          {label}
        </span>
      </span>
    </div>
  )
}

export default VerifiedRibbon
export { Props as VerifiedRibbonProps }
