import React, { FC } from "react"

const CloseM: FC<{ color?: string }> = ({ color = "#232A36" }) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      stroke={color}
      strokeWidth="1.2"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 7l10 10M17 7L7 17" />
    </g>
  </svg>
)

export default CloseM
