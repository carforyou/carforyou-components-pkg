import React, { FC } from "react"

import styles from "./gdbd.module.css"

import PriceCheckIcon from "../../assets/components/priceCheck"

import Badge, { ExternalBadgeProps } from "."

export type Score =
  | "great-deal"
  | "good-deal"
  | "fair-deal"
  | "high-deal"
  | "not-defined"

interface GdbdBadgeProps extends ExternalBadgeProps {
  score?: Score
}

export const GdbdBadge: FC<GdbdBadgeProps> = ({
  language,
  score = "not-defined",
  tooltipContent,
  size = "large",
}) => {
  const title = {
    de: {
      "fair-deal": "Marktpreis",
      "good-deal": "Günstig",
      "great-deal": "Sehr günstig",
      "high-deal": "Über dem Marktpreis",
      "not-defined": "Kein Preischeck",
    },
    en: {
      "fair-deal": "Market price",
      "good-deal": "Good value",
      "great-deal": "Very good value",
      "high-deal": "Above market price",
      "not-defined": "No price check",
    },
    fr: {
      "fair-deal": "Prix du marché",
      "good-deal": "Bon prix",
      "great-deal": "Meilleur prix",
      "high-deal": "Au-dessus du marché",
      "not-defined": "Prix non comparable",
    },
    it: {
      "fair-deal": "Prezzo di mercato",
      "good-deal": "Sotto valore di mercato",
      "great-deal": "Vantaggioso",
      "high-deal": "Sopra valore di mercato",
      "not-defined": "Prezzo non comparabile",
    },
  }
  const text = title[language][score]

  return (
    <div className={styles[score]}>
      <Badge
        icon={<PriceCheckIcon width="24" height="24" />}
        tooltipContent={tooltipContent}
        text={text}
        size={size}
      />
    </div>
  )
}

export default GdbdBadge
export { GdbdBadgeProps }
