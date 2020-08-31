import React from "react"

const ClockOutlinedTeal = (props) => {
  return (
    <svg viewBox="0 0 22 22" {...props}>
      <g
        transform="translate(-5 -5)"
        stroke="#3696B9"
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
      >
        <rect x={6} y={6} width={20} height={20} rx={10} />
        <path strokeLinecap="round" d="M16 11.2V16l2.4 2.4" />
      </g>
    </svg>
  )
}

export default ClockOutlinedTeal
