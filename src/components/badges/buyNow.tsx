import React, { FC } from "react"

import { BadgeProps } from "./types"
import BaseBadge from "./base"
import CreditCardIcon from "../../assets/dist/creditCard"

export const BuyNowBadge: FC<BadgeProps> = ({
  language,
  size = "large",
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
        size={size}
        text={title[language]}
      />
    </div>
  )
}

export default BuyNowBadge
export { BadgeProps as BuyNowBadgeProps }
