import React, { FC } from "react"
import classnames from "classnames"

interface Props {
  image: string
  onLoad?: () => void
  alt?: string
  objectFit?: "cover" | "contain"
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
      className={`${cover} h-full w-12/12`}
      height={height}
      width={width}
    />
  )
}

export default Image
export { Props as ImageProps }
