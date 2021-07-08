import React, { FC } from "react"

interface Props {
  image: string
  className?: string
  onLoad?: () => void
  getImageAltAttribute?: string
}

const Image: FC<Props> = ({
  image,
  className = "",
  onLoad,
  getImageAltAttribute,
}) => {
  return (
    <img
      data-testid="component-image"
      className={className}
      src={image}
      alt={getImageAltAttribute}
      onLoad={onLoad}
    />
  )
}

export default Image
export { Props as ImageProps }
