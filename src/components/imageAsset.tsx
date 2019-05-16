import React, { StatelessComponent, ImgHTMLAttributes } from "react"

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  path: string
}

const ImageAsset: StatelessComponent<Props> = ({ path, ...imgProps }) => {
  const src = require(`~/assets/${path}`)
  return <img src={src} {...imgProps} />
}

export default ImageAsset
