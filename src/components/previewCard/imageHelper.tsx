import React, { FC } from "react"

import styles from "./index.module.css"

interface Props {
  imageSrc: string
  pictureAlt: string
  isLogo: boolean
  handleOnErrorImage?: (e) => void
}

const Image: FC<Props> = ({
  imageSrc,
  pictureAlt,
  handleOnErrorImage,
  isLogo,
}) => (
  <img
    src={imageSrc}
    alt={pictureAlt}
    className={
      isLogo
        ? "flex-shrink-0 mr-10"
        : `${styles.promotionImage} w-12/12 object-cover`
    }
    onError={(e) => {
      handleOnErrorImage && handleOnErrorImage(e)
    }}
  />
)

export default Image
