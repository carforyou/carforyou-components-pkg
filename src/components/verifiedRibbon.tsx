import React, { FC } from "react"

import Verified from "./icons/verified"
import Ribbon from "./icons/ribbon"

interface Props {
  label: string
}

const RibbonVerified: FC<Props> = ({ label }) => {
  return (
    <>
      <span className="text-grey-dark">
        <Ribbon />
      </span>
      <span className="absolute top-10 left-0 ml-10">
        <Verified />
        <span className="text-white font-bold pl-3 text-sm">{label}</span>
      </span>
    </>
  )
}

export default RibbonVerified
