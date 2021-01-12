import React, { FC } from "react"
import classNames from "classnames"

interface Props {
  image: {
    id: number
    externalUrl: string
    s3Key: string
  }
  fullWidth?: boolean
  cdnUrl: string
  pictureAlt?: string
}

const ImageHelper: FC<Props> = ({
  image: { s3Key },
  fullWidth,
  cdnUrl,
  pictureAlt,
}) => (
  <img
    src={`${cdnUrl}/${s3Key}?${fullWidth ? "w=350" : "fit=clip&h=180"}`}
    className={classNames("max-h-full", { "w-12/12 object-cover": fullWidth })}
    alt={pictureAlt}
  />
)

export default ImageHelper
