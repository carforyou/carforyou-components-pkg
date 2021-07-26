import React, { FC } from "react"
import classnames from "classnames"

interface Props {
  image: string
  onLoad?: () => void
  alt?: string
  fullWidth?: boolean
  fullHeight?: boolean
  imageType?:
    | "fixedCard"
    | "rounded"
    | "growingCard"
    | "galleryPicture"
    | "fullScreenGalleryImage"
    | "imageInfo"
  objectFit?: "cover" | "contain"
}

const Image: FC<Props> = ({
  image,
  objectFit,
  imageType,
  onLoad,
  alt,
  fullWidth,
  fullHeight,
}) => {
  const cover = classnames({
    "object-cover": objectFit === "cover",
    "object-contain": objectFit === "contain",
  })

  const imageWidth = classnames({
    "w-12/12 ": fullWidth,
  })

  const imageHeight = classnames({
    "h-full": fullHeight,
  }) 

  const classes = classnames({
    "max-h-imageInfo": imageType === "imageInfo",
    "m-auto max-h-screen": imageType === "fullScreenGalleryImage",
    "h-galleryImage": imageType === "galleryPicture",
    "h-image": imageType === "fixedCard",
    "max-h-image md:max-h-imageLarge": imageType === "growingCard",
    "rounded-10 rounded-b-none h-80 md:h-118 xl:h-160": imageType === "rounded",
  })

  const imageClasses = classnames(cover, classes, imageWidth, imageHeight)

  return (
    <img
      data-testid="component-image"
      src={image}
      alt={alt}
      onLoad={onLoad}
      className={imageClasses}
    />
  )
}

export default Image
export { Props as ImageProps }
