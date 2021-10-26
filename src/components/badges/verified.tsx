import React, { FC } from "react"
import classNames from "classnames"

import { BadgeProps } from "./types"
import { BadgeBackground, BadgeSize } from "./types"
import BaseBadge from "./base"
import VerifiedIcon from "../../assets/dist/verified"

interface VerifiedBadgeProps extends BadgeProps {
  textColor?: "grey" | "white"
  badgeSize?: BadgeSize
  background?: BadgeBackground
}

export const VerifiedBadge: FC<VerifiedBadgeProps> = ({
  language,
  size = "large",
  badgeSize = "small",
  tooltipContent,
  textColor = "grey",
  background = "white",
}) => {
  const title = {
    de: "Verifiziert",
    fr: "Vérifié",
    it: "Verificato",
    en: "Verified",
  }

  return (
    <div
      className={classNames({
        "text-grey-dark": textColor === "grey",
        "text-white": textColor === "white",
      })}
    >
      <BaseBadge
        icon={<VerifiedIcon width="24" height="24" />}
        tooltipContent={tooltipContent}
        size={badgeSize}
        withText={size === "large"}
        background={background}
        text={title[language]}
      />
    </div>
  )
}

export default VerifiedBadge
export { BadgeProps as VerifiedBadgeProps }
