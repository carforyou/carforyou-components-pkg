import React, { FC } from "react"

interface Props {
  handleClick: () => void
}

const Overlay: FC<Props> = ({ handleClick }) => (
  <div
    className="fixed w-12/12 h-full top-0 left-0 z-20"
    onClick={handleClick}
  />
)

export default Overlay
