import React, { FC } from "react"

import { BadgeProps } from "./types"
import BaseBadge from "./base"
import ElectricIcon from "../../assets/dist/electric"

export const SmallElectricBadge: FC<BadgeProps> = ({
  language,
  size = "large",
  tooltipContent,
}) => {
  const title = {
    de: "Elektro",
    fr: "Électrique",
    it: "Elettrica",
    en: "Electric",
  }

  return (
    <div className="text-white">
      <BaseBadge
        icon={<ElectricIcon width="24" height="24" />}
        tooltipContent={tooltipContent}
        size="small"
        withText={size === "large"}
        background="green"
        text={title[language]}
      />
    </div>
  )
}

export default SmallElectricBadge
export { BadgeProps as ElectricBadgeProps }
