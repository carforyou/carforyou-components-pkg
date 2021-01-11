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
}

const ImageHelper: FC<Props> = ({ image: { s3Key }, fullWidth, cdnUrl }) => (
  <img
    src={`${cdnUrl}/${s3Key}?${fullWidth ? "w=350" : "fit=clip&h=180"}`}
    className={classNames("max-h-full", { "w-12/12 object-cover": fullWidth })}
  />
)

export default ImageHelper
