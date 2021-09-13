import React, { FC } from "react"
import classnames from "classnames"

interface Props {
  source: string
  onLoad?: () => void
  alt?: string
  objectFit?: "cover" | "contain"
  fullScreen?: boolean
  width?: number
  height?: number
  onError?: (e) => void
  lazy?: boolean
}

const Image: FC<Props> = ({
  source,
  objectFit,
  onLoad,
  alt,
  width,
  height,
  onError,
  fullScreen,
  lazy = false,
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
        fullScreen ? "m-auto max-h-screen" : "w-12/12"
      )}
      height={height}
      width={width}
      loading={lazy ? "lazy" : "eager"}
    />
  )
}

export default Image
export { Props as ImageProps }
