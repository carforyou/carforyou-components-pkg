import React, { FC } from "react"

import { BadgeProps } from "./types"
import BaseBadge from "./base"
import MbgIcon from "../../assets/components/moneyBackGuarantee"

export const MbgBadge: FC<BadgeProps> = ({
  language,
  size = "large",
  tooltipContent,
}) => {
  const title = {
    de: "Geld-Zurück-Garantie",
    fr: "Garantie de remboursement",
    it: "Garanzia di rimborso",
    en: "Money-Back-Guarantee",
  }

  return (
    <div className="text-green-light">
      <BaseBadge
        icon={<MbgIcon width="24" height="24" />}
        tooltipContent={tooltipContent}
        text={title[language]}
        size={size}
      />
    </div>
  )
}

export default MbgBadge
export { BadgeProps as MbgBadgeProps }
