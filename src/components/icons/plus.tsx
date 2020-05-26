import React, { FC } from "react"
import { defaultConfig as tailwindConfig } from "../../tailwind/index"
const {
  theme: {
    colors: { "grey-3": defaultColor },
    width: { iconDefault: defaultWidth },
    height: { iconDefault: defaultHeight },
  },
} = tailwindConfig

interface Props {
  color?: string
  width?: number | string
  height?: number | string
}

const Plus: FC<Props> = ({
  color = defaultColor,
  width = defaultWidth,
  height = defaultHeight,
}) => (
  <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 7a9 9 0 018.996 8.735L25 16a9 9 0 01-8.735 8.996L16 25a9 9 0 01-9-9 9 9 0 018.735-8.996L16 7zm1 4h-2v4h-4v2h4v4h2v-4h4v-2h-4v-4z"
      fill={color}
      fillRule="evenodd"
    />
  </svg>
)

export default Plus
