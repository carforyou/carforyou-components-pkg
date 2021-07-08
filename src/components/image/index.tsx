import React, { FC } from "react"

import ImageMissing from "../../assets/components/imageMissing"

interface Props {
  image: string
  className?: string
  href?: string
  trackClickToPDP?: () => void
  onLoad?: () => void
  getImageAltAttribute?: string
}

const Image: FC<Props> = ({
  image,
  className = "",
  href,
  trackClickToPDP,
  onLoad,
  getImageAltAttribute,
}) => {
  const renderImg = () => {
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

  return href ? (
    <a
      className="link-image relative opacity-100 hover:opacity-100 flex justify-center items-center max-w-full flex-1"
      onClick={trackClickToPDP}
      href={href}
    >
      {renderImg()}
      <div className="bg-gradient-to-bottom-black h-60 absolute bottom-0 w-12/12 opacity-60" />
    </a>
  ) : (
    renderImg()
  )
}
export default Image
export { Props as ImageProps }
