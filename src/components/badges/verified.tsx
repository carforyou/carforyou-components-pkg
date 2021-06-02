import React, { FC } from "react"

import { BadgeProps } from "./types"
import BaseBadge from "./base"
import VerifiedIcon from "../../assets/components/verified"

export const VerifiedBadge: FC<BadgeProps> = ({
  language,
  size = "large",
  tooltipContent,
}) => {
  const title = {
    de: "Verifiziert",
    fr: "Vérifié",
    it: "Verificato",
    en: "Verified",
  }
  return (
    <BaseBadge
      icon={<VerifiedIcon width="24" height="24" />}
      tooltipContent={tooltipContent}
      size={size}
      text={title[language]}
    />
  )
}

export default VerifiedBadge
export { BadgeProps as VerifiedBadgeProps }
