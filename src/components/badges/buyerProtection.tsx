import React, { FC } from "react"

import UmbrellaIcon from "../../assets/components/umbrella"

import Badge, { ExternalBadgeProps } from "."

export const BuyerProtectionBadge: FC<ExternalBadgeProps> = ({
  language,
  size = "large",
  tooltipContent,
}) => {
  const title = {
    de: "Käuferschutz",
    fr: "Protection des acheteurs",
    it: "Protezione dell’acquirente",
    en: "Buyer Protection",
  }
  return (
    <Badge
      icon={
        <div className="text-green-dark">
          <UmbrellaIcon width="24" height="24" />
        </div>
      }
      tooltipContent={tooltipContent}
      size={size}
      text={title[language]}
    />
  )
}

export default BuyerProtectionBadge
export { ExternalBadgeProps as BuyerProtectionBadgeProps }
