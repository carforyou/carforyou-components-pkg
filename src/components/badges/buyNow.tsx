import React, { FC } from "react"

import CreditCardIcon from "../../assets/components/creditCard"

import Badge, { ExternalBadgeProps } from "."

export const BuyNowBadge: FC<ExternalBadgeProps> = ({
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
      <Badge
        icon={<CreditCardIcon width="24" height="24" />}
        tooltipContent={tooltipContent}
        size={size}
        text={title[language]}
      />
    </div>
  )
}

export default BuyNowBadge
export { ExternalBadgeProps as BuyNowBadgeProps }
