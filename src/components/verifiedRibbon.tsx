import React, { FC } from "react"

import Verified from "./icons/verified"
import Ribbon from "./icons/ribbon"

interface Props {
  label: string
  ribbonWidth: string
  iconWidth: string
}

const VerifiedRibbon: FC<Props> = ({ label, ribbonWidth, iconWidth }) => {
  return (
    <div className="relative">
      <span className="text-grey-dark">
        <Ribbon width={ribbonWidth} />
      </span>
      <span className="absolute left-0 mt-10 ml-10">
        <Verified width={iconWidth} />
        <span className="text-white font-bold pl-5">{label}</span>
      </span>
    </div>
  )
}

export default VerifiedRibbon
