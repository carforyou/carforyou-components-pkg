import React, { FC } from "react"

import ImageMissing from "../../assets/components/imageMissing"

interface Props {
  image: string
  className?: string
  trackClickToPDP?: () => void
  onLoad?: () => void
  getImageAltAttribute?: string
}

const Image: FC<Props> = ({
  image,
  className = "",
  onLoad,
  getImageAltAttribute,
}) => {
  return image ? (
    <img
      data-testid="component-image"
      className={className}
      src={image}
      alt={getImageAltAttribute}
      onError={() => {
        ;<ImageMissing />
      }}
      onLoad={onLoad}
    />
  ) : (
    <ImageMissing />
  )
}

export default Image
export { Props as ImageProps }
