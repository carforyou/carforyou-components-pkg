import React, { FC } from "react"

import { BadgeProps } from "./types"
import BaseBadge from "./base"
import VerifiedIcon from "../../assets/dist/verified"

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
      icon={<VerifiedIcon width="24" height="24" />}
      tooltipContent={tooltipContent}
      size="medium"
      withText={size === "large"}
      text={title[language]}
      background="grey"
    />
  )
}

export default InvertedVerifiedBadge
export { BadgeProps as VerifiedBadgeProps }
