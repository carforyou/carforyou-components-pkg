import React, { FC, ReactNode } from "react"

import styles from "./gdbd.module.css"

import Badge from "../badges"
import { BadgeSize, Language } from "../../types"
import PriceCheckIcon from "../../assets/components/priceCheck"

// ### A: enum Version

export enum Scores {
  GreatDeal = "great-deal",
  GoodDeal = "good-deal",
  FairDeal = "fair-deal",
  HighDeal = "high-deal",
  NotDefined = "not-defined",
}

// Usage

// <Foo score={Scores.GreatDeal}` />

// ### B: enum Version

// Union Type Version
type UnionScore =
  | "great-deal"
  | "good-deal"
  | "fair-deal"
  | "high-deal"
  | "not-defined"

// Usage

// <Foo score="great-deal" />
interface GdbdBadgeProps {
  language: Language
  score: Scores
  size: BadgeSize
  tooltip?: ReactNode
}

export const GdbdBadge: FC<GdbdBadgeProps> = ({
  language,
  score = Scores.NotDefined,
  tooltip,
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
        tooltip={tooltip}
        text={text}
        size={size}
      />
    </div>
  )
}

export default GdbdBadge
export { GdbdBadgeProps }
