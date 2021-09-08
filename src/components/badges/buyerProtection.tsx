import React, { FC } from "react"

import { BadgeProps } from "./types"
import BaseBadge from "./base"
import UmbrellaIcon from "../../assets/components/umbrella"

export const BuyerProtectionBadge: FC<BadgeProps> = ({
  language,
  size = "large",
  tooltipContent,
}) => {
  const title = {
    de: "Käuferschutz",
    fr: "Protection des acheteurs",
    it: "Protezione dell’acquirente",
    en: "Buyer Protection",
  }

  return (
    <div className="text-grey-dark">
      <BaseBadge
        icon={
          <div className="text-green-dark">
            <UmbrellaIcon width="24" height="24" />
          </div>
        }
        tooltipContent={tooltipContent}
        size={size}
        text={title[language]}
      />
    </div>
  )
}

export default BuyerProtectionBadge
export { BadgeProps as BuyerProtectionBadgeProps }
