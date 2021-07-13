import React, { FC } from "react"
import classNames from "classnames"

interface Props {
  image: string
  className?: string
  onLoad?: () => void
  getImageAltAttribute?: string
  objectFit?: "fullWidth" | "cardImage" | "rounded"
}

const Image: FC<Props> = ({
  image,
  objectFit,
  onLoad,
  getImageAltAttribute,
}) => {
  return (
    <img
      data-testid="component-image"
      src={image}
      alt={getImageAltAttribute}
      onLoad={onLoad}
      className={classNames("max-h-full", {
        "w-12/12 object-cover": objectFit === "fullWidth",
        "rounded-10 rounded-b-none object-cover h-80 md:h-118 xl:h-160 w-12/12":
          objectFit === "rounded",
        "object-cover h-image w-full": objectFit === "cardImage",
      })}
    />
  )
}

export default Image
export { Props as ImageProps }
