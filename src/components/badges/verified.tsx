import React, { FC } from "react"

import { BadgeProps } from "./types"
import BaseBadge from "./base"
import VerifiedIcon from "../../assets/dist/verified"

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
    <div className="text-grey-dark">
      <BaseBadge
        icon={<VerifiedIcon width="24" height="24" />}
        tooltipContent={tooltipContent}
        size="small"
        withText={size === "large"}
        background="white"
        text={title[language]}
      />
    </div>
  )
}

export default VerifiedBadge
export { BadgeProps as VerifiedBadgeProps }
