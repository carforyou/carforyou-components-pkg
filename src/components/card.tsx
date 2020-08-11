import React, { FC, ReactNode } from "react"

interface Props {
  renderImage: () => ReactNode
  children: ReactNode
  onClick?: () => void
}

export const Card: FC<Props> = ({ renderImage, children, onClick }) => {
  return (
    <article className="fixedCard" onClick={onClick}>
      {renderImage()}
      {children}
    </article>
  )
}

export default Card
