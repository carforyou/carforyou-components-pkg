import React, { FC } from "react"

import { BadgeProps } from "./types"
import BaseBadge from "./base"
import ElectricIcon from "../../assets/dist/electric"

export const ElectricBadge: FC<BadgeProps> = ({
  language,
  withText = true,
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
        background="green"
        text={withText && title[language]}
      />
    </div>
  )
}

export default ElectricBadge
export { BadgeProps as ElectricBadgeProps }
