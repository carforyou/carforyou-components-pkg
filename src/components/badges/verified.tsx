import React, { FC } from "react"

import VerifiedIcon from "../../assets/components/verified"

import Badge, { ExternalBadgeProps } from "."

export const VerifiedBadge: FC<ExternalBadgeProps> = ({
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
    <Badge
      icon={<VerifiedIcon width="24" height="24" />}
      tooltipContent={tooltipContent}
      size={size}
      text={title[language]}
    />
  )
}

export default VerifiedBadge
export { ExternalBadgeProps as VerifiedBadgeProps }
