import React, { FC } from "react"

import styles from "./index.module.css"
import UploadImagesIcon from "../icons/uploadImage"
import ArrowRightTeal from "../icons/arrowRight"
import { FixedCard } from "../card/fixed"

interface Props {
  name: string
  location: {
    address?: string
    zipCode: string
    city?: string
  }
  title?: string
  previewLabel: string
  image?: string
  logo?: string
  link?: string
  editMode?: boolean
  handleOnClick?: () => void
  handleOnError?: (e) => void
  handleOnClickText?: () => void
}

const PreviewCard: FC<Props> = ({
  name,
  location,
  title,
  previewLabel,
  image,
  logo,
  link,
  editMode,
  handleOnClick,
  handleOnError,
  handleOnClickText,
}) => {
  return (
    <FixedCard
      renderImage={() => (
        <div className="bg-grey-1 flex justify-center items-center text-grey-2 md:h-cardImage w-12/12 md:w-card">
          {!image && editMode ? (
            <UploadImagesIcon width="72px" height="72px" />
          ) : (
            <img
              src={image}
              className={`${styles.promotionImage} w-12/12 object-cover`}
              alt={title}
              onClick={() => {
                handleOnClick && handleOnClick()
              }}
              onError={(e) => {
                handleOnError && handleOnError(e)
              }}
            />
          )}
        </div>
      )}
    >
      <div
        className="p-20 w-12/12 md:w-card max-h-dropdown"
        onClick={() => {
          handleOnClickText && handleOnClickText()
        }}
      >
        {title ? (
          <p className="text-lg">{title}</p>
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
          <ArrowRightTeal width="32px" height="32px" />
        </a>
        <hr className="text-grey-1 my-20" />
        <div className="w-12/12 flex items-center">
          {logo ? (
            <div className="w-2/12 mr-10">
              <img src={logo} className="flex-shrink-0 mr-10" alt="logo" />
            </div>
          ) : null}
          <div className="w-10/12">
            <div className="font-bold">{name}</div>
            {location.address ? (
              <div className="text-sm mt-5">{`${location.address}, ${location.zipCode} ${location.city}`}</div>
            ) : (
              <div className="text-sm mt-5">{`${location.zipCode} ${location.city}`}</div>
            )}
          </div>
        </div>
      </div>
    </FixedCard>
  )
}

export default PreviewCard
