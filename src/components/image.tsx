import React, { FC } from "react"
import classnames from "classnames"

interface Props {
  source: string
  onLoad?: () => void
  alt?: string
  objectFit?: "cover" | "contain"
  fullScreenHeight?: boolean
  width?: number
  height?: number
  onError?: (e) => void
}

const Image: FC<Props> = ({
  source,
  objectFit,
  onLoad,
  alt,
  width,
  height,
  onError,
  fullScreenHeight,
}) => {
  const cover = classnames({
    "object-cover": objectFit === "cover",
    "object-contain": objectFit === "contain",
  })

  return (
    <img
      data-testid="component-image"
      src={source}
      alt={alt}
      onLoad={onLoad}
      onError={onError}
      className={classnames(
        "h-full",
        cover,
        fullScreenHeight ? "m-auto max-h-screen" : "w-12/12"
      )}
      height={height}
      width={width}
    />
  )
}

export default Image
export { Props as ImageProps }
