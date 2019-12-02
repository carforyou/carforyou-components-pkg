import React, { FC, ReactNode } from "react"

import CtaCall from "./icons/CtaCall"
import CtaWrite from "./icons/CtaWrite"
import Filter from "./icons/Filter"
import Alert from "./icons/Alert"

interface Props {
  icon: ReactNode
  label?: string
}

const iconButton: FC<Props> = ({ icon, label }) => {
  const displayIcon = icon => {
    return (
      <>
        {icon}
        {label}
      </>
    )
  }

  const eventElement = () => {
    switch (icon) {
      case "CtaCall":
        return displayIcon(
          <span className="pr-8">
            <CtaCall />
          </span>
        )
      case "CtaWrite":
        return displayIcon(<CtaWrite />)
      case "Filter":
        return displayIcon(
          <span className="pr-8">
            <Filter />
          </span>
        )
      case "Alert":
        return displayIcon(
          <span className="pr-10">
            <Alert />
          </span>
        )
    }
  }

  return eventElement()
}

export default iconButton
