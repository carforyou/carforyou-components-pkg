import React, { FC } from "react"

import styles from "./index.module.css"

interface Props {
  imageSrc?: string
  pictureAlt?: string
  handleOnErrorImage?: (e) => void
}

const ImageHelper: FC<Props> = ({ imageSrc, pictureAlt, handleOnErrorImage }) =>
  imageSrc ? (
    <img
      src={imageSrc}
      alt={pictureAlt}
      className={
        pictureAlt == "logo"
          ? "flex-shrink-0 mr-10"
          : `${styles.promotionImage} w-12/12 object-cover`
      }
      onError={(e) => {
        handleOnErrorImage && handleOnErrorImage(e)
      }}
    />
  ) : null

export default ImageHelper
