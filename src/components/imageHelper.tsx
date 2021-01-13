import React, { FC } from "react"

interface Props {
  image: {
    id: number
    externalUrl: string
    s3Key: string
  }
  height: string
  cdnUrl: string
  pictureAlt?: string
}

const ImageHelper: FC<Props> = ({
  image: { s3Key },
  cdnUrl,
  pictureAlt,
  height,
}) => (
  <img
    src={`${cdnUrl}/${s3Key}?w=350`}
    className={`${height} w-12/12 object-cover`}
    alt={pictureAlt}
  />
)

export default ImageHelper
