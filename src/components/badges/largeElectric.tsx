import React, { FC } from "react"

import ElectricIcon from "../../assets/dist/electric"
import { BadgeProps } from "./types"
import BaseBadge from "./base"

export const LargeElectricBadge: FC<BadgeProps> = ({
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
        size="large"
        background="green"
        text={withText && title[language]}
      />
    </div>
  )
}

export default LargeElectricBadge
export { BadgeProps as ElectricBadgeProps }
