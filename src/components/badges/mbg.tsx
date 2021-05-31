import React, { FC } from "react"

import Badge, { ExternalBadgeProps } from "../badges"
import MbgIcon from "../../assets/components/moneyBackGuarantee"

export const MbgBadge: FC<ExternalBadgeProps> = ({
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
      <Badge
        icon={<MbgIcon width="24" height="24" />}
        tooltipContent={tooltipContent}
        text={title[language]}
        size={size}
      />
    </div>
  )
}

export default MbgBadge
export { ExternalBadgeProps as MbgBadgeProps }
