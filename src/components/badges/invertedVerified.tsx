import React, { FC } from "react"

import { BadgeProps } from "./types"
import BaseBadge from "./base"
import VerifiedBoldIcon from "../../assets/dist/icons/verifiedBold"

export const InvertedVerifiedBadge: FC<BadgeProps> = ({
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
      icon={<VerifiedBoldIcon width="24" height="24" />}
      tooltipContent={tooltipContent}
      size="small"
      withText={size === "large"}
      text={title[language]}
      background="grey"
    />
  )
}

export default InvertedVerifiedBadge
export { BadgeProps as VerifiedBadgeProps }
