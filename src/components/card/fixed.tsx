import React, { FC, ReactNode } from "react"

interface Props {
  renderImage: () => ReactNode
  children: ReactNode
  onClick?: () => void
}

export const FixedCard: FC<Props> = ({ renderImage, children, onClick }) => {
  return (
    <article className="fixedCard" onClick={onClick}>
      {renderImage()}
      {children}
    </article>
  )
}

export default FixedCard
