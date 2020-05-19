import React, { FC } from "react"

interface Props {
  color?: string
  width?: number | string
  height?: number | string
}

const Logout: FC<Props> = ({ color = "#a0a7ab", width = 32, height = 32 }) => (
  <svg height={width} width={height} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17 4a2 2 0 012 2v7h-2V6H5v20h12v-7h2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2zm5.613 5.21l.094.083L29.414 16l-6.707 6.707a1 1 0 01-1.497-1.32l.083-.094L25.585 17H12a1 1 0 010-2h13.585l-4.292-4.293a1 1 0 01-.083-1.32l.083-.094a1 1 0 011.32-.083z"
      fill={color}
      fill-rule="evenodd"
    />
  </svg>
)

export default Logout
