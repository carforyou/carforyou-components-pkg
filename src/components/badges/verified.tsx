import React, { FC } from "react"

import VerifiedIcon from "../../assets/dist/verified"
import { BadgeProps } from "./types"
import BaseBadge from "./base"

export const VerifiedBadge: FC<BadgeProps> = ({
  language,
  withText = true,
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
        background="white"
        text={withText && title[language]}
      />
    </div>
  )
}

export default VerifiedBadge
export { BadgeProps as VerifiedBadgeProps }
