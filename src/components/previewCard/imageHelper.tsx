import React, { FC } from "react"

import styles from "./index.module.css"

interface Props {
  imageSrc?: string
  pictureAlt?: string
  handleOnClickImage?: () => void
  handleOnErrorImage?: (e) => void
}

const ImageHelper: FC<Props> = ({
  imageSrc,
  pictureAlt,
  handleOnClickImage,
  handleOnErrorImage,
}) =>
  imageSrc ? (
    <img
      src={imageSrc}
      alt={pictureAlt}
      className={`${styles.promotionImage} w-12/12 object-cover`}
      onClick={() => {
        handleOnClickImage && handleOnClickImage()
      }}
      onError={(e) => {
        handleOnErrorImage && handleOnErrorImage(e)
      }}
    />
  ) : null

export default ImageHelper
