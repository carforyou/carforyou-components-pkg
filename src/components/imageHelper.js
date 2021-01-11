import React from "react"
import classNames from "classnames"

const ImageHelper = ({ image: { s3Key }, fullWidth, cdnUrl }) => (
  <img
    src={`${cdnUrl}/${s3Key}?${fullWidth ? "w=350" : "fit=clip&h=180"}`}
    className={classNames("max-h-full", { "w-12/12 object-cover": fullWidth })}
  />
)

export default ImageHelper
