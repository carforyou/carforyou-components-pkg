import React, { FC } from "react"
import classnames from "classnames"

interface Props {
  image: string
  onLoad?: () => void
  getImageAltAttribute?: string
  imageType?:
    | "fullWidth"
    | "fixedCard"
    | "rounded"
    | "growingCard"
    | "fullScreenSlider"
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
  getImageAltAttribute,
}) => {
  const cover = classnames({
    "object-cover": objectFit === "cover",
    "object-contain": objectFit === "contain",
  })

  const classes = classnames({
    "w-12/12": imageType === "fullWidth",
    "rounded-10 rounded-b-none h-80 md:h-118 xl:h-160 w-12/12":
      imageType === "rounded",
    "h-image w-12/12": imageType === "fixedCard",
    "w-12/12 h-full max-h-image md:max-h-imageLarge":
      imageType === "growingCard",
    "max-w-full max-h-screen h-full m-auto": imageType === "fullScreenSlider",
    "w-12/12 h-galleryImage": imageType === "galleryPicture",
    "h-auto m-auto max-h-screen max-w-full":
      imageType === "fullScreenGalleryImage",
    "w-12/12 max-h-imageInfo": imageType === "imageInfo",
  })

  const imageClasses = classnames(cover, classes)

  return (
    <img
      data-testid="component-image"
      src={image}
      alt={getImageAltAttribute}
      onLoad={onLoad}
      className={imageClasses}
    />
  )
}

export default Image
export { Props as ImageProps }
