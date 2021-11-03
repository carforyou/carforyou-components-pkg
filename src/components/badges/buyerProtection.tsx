import React, { FC } from "react"

import { BadgeProps } from "./types"
import BaseBadge from "./base"
import UmbrellaIcon from "../../assets/dist/umbrella"

export const BuyerProtectionBadge: FC<BadgeProps> = ({
  language,
  withText = true,
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
        size="small"
        background="white"
        text={withText && title[language]}
      />
    </div>
  )
}

export default BuyerProtectionBadge
export { BadgeProps as BuyerProtectionBadgeProps }
