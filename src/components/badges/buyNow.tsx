import React, { FC } from "react"

import CreditCardIcon from "../../assets/dist/creditCard"
import { BadgeProps } from "./types"
import BaseBadge from "./base"

export const BuyNowBadge: FC<BadgeProps> = ({
  language,
  withText = true,
  tooltipContent,
}) => {
  const title = {
    de: "Online kaufen",
    fr: "Acheter en ligne",
    it: "Acquistare l'auto online",
    en: "Buy online",
  }

  return (
    <div className="text-teal">
      <BaseBadge
        icon={<CreditCardIcon width="24" height="24" />}
        tooltipContent={tooltipContent}
        size="small"
        background="white"
        text={withText && title[language]}
      />
    </div>
  )
}

export default BuyNowBadge
export { BadgeProps as BuyNowBadgeProps }
