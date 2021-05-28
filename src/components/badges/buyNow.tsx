import React, { FC, ReactNode } from "react"

import Badge from "../badges"
import { BadgeSize, Language } from "../../types"
import CreditCardIcon from "../../assets/components/creditCard"

export interface BuyNowBadgeProps {
  language: Language
  size?: BadgeSize
  tooltip?: ReactNode
}

export const BuyNowBadge: FC<BuyNowBadgeProps> = ({
  language,
  size = "large",
  tooltip,
}) => {
  const title = {
    de: "Online kaufen",
    fr: "Acheter en ligne",
    it: "Acquistare l'auto online",
    en: "Buy online",
  }

  return (
    <div className="text-teal">
      <Badge
        icon={<CreditCardIcon width="24" height="24" />}
        tooltip={tooltip}
        size={size}
        text={title[language]}
      />
    </div>
  )
}

export default BuyNowBadge
