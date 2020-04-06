import React, { FC } from "react"

interface Props {
  handleClick: () => void
}

const Overlay: FC<Props> = ({ handleClick }) => (
  <div
    className="absolute inset-0 bg-grey-dark opacity-40 transition duration-200"
    data-testid="modal-overlay"
    onClick={handleClick}
  />
)

export default Overlay
