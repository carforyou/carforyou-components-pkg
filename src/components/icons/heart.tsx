import React, { FC } from "react"

interface Props {
  color?: string
  width?: number
  height?: number
}

const Heart: FC<Props> = ({ color = "#A0A7AB", width = 32, height = 32 }) => (
  <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.417 7C23.495 7 26 9.513 26 12.603c0 1.45-.544 2.806-1.52 3.841L16 25l-8.443-8.516A5.59 5.59 0 016 12.603C6 9.513 8.505 7 11.583 7c1.76 0 3.375.822 4.417 2.175A5.564 5.564 0 0120.417 7zm0 1.6a3.962 3.962 0 00-3.004 1.372l-.145.179L16 11.797l-1.268-1.646A3.963 3.963 0 0011.583 8.6C9.39 8.6 7.6 10.396 7.6 12.603c0 .96.336 1.871.938 2.581l.156.173L16 22.727l7.18-7.243a3.963 3.963 0 001.213-2.647l.007-.234c0-2.207-1.79-4.003-3.983-4.003z"
      fill={color}
      fill-rule="evenodd"
    />
  </svg>
)

export default Heart
