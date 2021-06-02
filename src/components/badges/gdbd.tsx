import React, { FC, ReactNode } from "react"

import styles from "./gdbd.module.css"

import Badge from "../badges"
import PriceCheckIcon from "../../assets/components/priceCheck"

export enum Scores {
  GreatDeal = "great-deal",
  GoodDeal = "good-deal",
  FairDeal = "fair-deal",
  HighDeal = "high-deal",
  NotDefined = "not-defined",
}

interface Props {
  language: string
  score: string
  tooltip?: ReactNode
}

export const GdbdBadge: FC<Props> = ({
  language,
  score = Scores.NotDefined,
  tooltip,
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

  return (
    <div key={score} className="mr-5">
      <Badge
        icon={() => (
          <span className={styles[score]}>
            <PriceCheckIcon width="24" height="24" />
          </span>
        )}
        tooltip={tooltip}
      >
        <span className={styles[score]}>{title[language][score]}</span>
      </Badge>
    </div>
  )
}

export default GdbdBadge
