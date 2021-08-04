import React, { FC } from "react"
import classnames from "classnames"

interface Props {
  image: string
  onLoad?: () => void
  alt?: string
  objectFit?: "cover" | "contain"
  galleryImage?: boolean
  width?: number
  height?: number
  onError?: (e) => void
}

const Image: FC<Props> = ({
  image,
  objectFit,
  onLoad,
  alt,
  width,
  height,
  onError,
  galleryImage,
}) => {
  const cover = classnames({
    "object-cover": objectFit === "cover",
    "object-contain": objectFit === "contain",
  })

  return (
    <img
      data-testid="component-image"
      src={image}
      alt={alt}
      onLoad={onLoad}
      onError={(e) => {
        onError && onError(e)
      }}
      className={
        galleryImage
          ? `${cover} m-auto max-h-screen h-full`
          : `${cover} h-full w-12/12`
      }
      height={height}
      width={width}
    />
  )
}

export default Image
export { Props as ImageProps }
