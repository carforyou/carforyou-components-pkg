import React, { FC, ReactNode } from "react"

import Badge from "../badges"
import CreditCardIcon from "../../assets/components/creditCard"

interface Props {
  language: string
  hasText?: boolean
  tooltip?: ReactNode
}

export const BuyNowBadge: FC<Props> = ({ language, hasText, tooltip }) => {
  const title = {
    de: "Online kaufen",
    fr: "Acheter en ligne",
    it: "Acquistare l'auto online",
    en: "Buy online",
  }

  return (
    <Badge
      icon={() => (
        <span className="text-teal">
          <CreditCardIcon width="24" height="24" />
        </span>
      )}
      tooltip={tooltip}
    >
      {hasText ? <span className="text-teal">{title[language]}</span> : null}
    </Badge>
  )
}

export default BuyNowBadge
