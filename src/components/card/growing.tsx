import React, { FC, ReactNode } from "react"
import classNames from "classnames"

interface Props {
  renderImage: () => ReactNode
  children: ReactNode
  noMarginsOnMobile?: boolean
}

export const GrowingCard: FC<Props> = ({ renderImage, children, noMarginsOnMobile }) => {
  return (
    <article className={classNames("growingCard"
    {"rounded-none md:rounded-10": noMarginsOnMobile})}>
      {renderImage()}
      {children}
    </article>
  )
}

export default GrowingCard
