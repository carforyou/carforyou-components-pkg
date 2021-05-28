import React, { FC, ReactNode } from "react"

import Badge from "../badges"
import MbgIcon from "../../assets/components/moneyBackGuarantee"

interface Props {
  language: string
  hasText?: boolean
  tooltip?: ReactNode
}

export const MbgBadge: FC<Props> = ({ language, hasText, tooltip }) => {
  const title = {
    de: "Geld-Zurück-Garantie",
    fr: "Garantie de remboursement",
    it: "Garanzia di rimborso",
    en: "Money-Back-Guarantee",
  }

  return (
    <div data-testid="mbg-icon">
      <Badge icon={() => <MbgIcon width="24" height="24" />} tooltip={tooltip}>
        {hasText ? (
          <span className="text-green-light">{title[language]}</span>
        ) : null}
      </Badge>
    </div>
  )
}

export default MbgBadge
