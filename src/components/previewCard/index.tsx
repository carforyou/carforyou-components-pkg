import React, { FC } from "react"

import styles from "./index.module.css"
import FixedCard from "../card/fixed"
import UploadImagesIcon from "../../assets/dist/icons/uploadImage"
import ArrowIcon from "../../assets/dist/icons/arrowDownM"

interface Props {
  footerTitle: string
  footerText: string
  cardTitle?: string
  previewLabel: string
  image?: string
  logo?: string
  link?: string
  onImageFailedLoading?: (e) => void
}

const PreviewCard: FC<Props> = ({
  footerTitle,
  footerText,
  cardTitle,
  previewLabel,
  image,
  logo,
  link,
  onImageFailedLoading,
}) => {
  return (
    <FixedCard
      renderImage={() => (
        <div className="bg-grey-1 flex justify-center items-center text-grey-2 md:h-cardImage w-12/12 md:w-card">
          {!image ? (
            <UploadImagesIcon width="72px" height="72px" />
          ) : (
            <img
              src={image}
              alt={cardTitle}
              className={`${styles.promotionImage} w-12/12 object-cover`}
              onError={(e) => {
                onImageFailedLoading && onImageFailedLoading(e)
              }}
            />
          )}
        </div>
      )}
    >
      <div className="p-20 w-12/12 md:w-card max-h-dropdown">
        {cardTitle ? (
          <p className="text-lg">{cardTitle}</p>
        ) : (
          <>
            <div className="bg-grey-1 h-20 w-12/12" />
            <div className="bg-grey-1 h-20 w-12/12 my-10" />
            <div className="bg-grey-1 h-20 w-6/12" />
          </>
        )}

        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-teal flex items-center font-bold mt-16"
        >
          {previewLabel}
          <ArrowIcon className="text-teal transform customRotate-270" />
        </a>
        <hr className="text-grey-1 my-20" />
        <div className="w-12/12 flex items-center">
          {logo ? (
            <div className="w-2/12 mr-10">
              <img src={logo} alt={"logo"} className={"flex-shrink-0 mr-10"} />
            </div>
          ) : null}
          <div className="w-10/12">
            <div className="font-bold">{footerTitle}</div>
            <div className="text-sm mt-5">{footerText}</div>
          </div>
        </div>
      </div>
    </FixedCard>
  )
}

export default PreviewCard
export { Props as PreviewCardProps }
