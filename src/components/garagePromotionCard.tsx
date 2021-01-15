import React, { FC, MouseEvent } from "react"

import UploadImagesIcon from "./icons/uploadImage"
import ArrowRightTeal from "./icons/arrowRight"
import { FixedCard } from "./card/fixed"

interface Props {
  dealerName: string
  dealerLocation: {
    address?: string
    zipCode: string
    city?: string
  }
  title?: string
  previewLabel: string
  mainImage?: string
  logo?: string
  linkToDealerPage?: string
  handleOnClick?: (event: MouseEvent<HTMLButtonElement>) => void
  handleOnError?: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleOnClickText?: (event: MouseEvent<HTMLButtonElement>) => void
}

const GaragePromotionCard: FC<Props> = ({
  dealerName,
  dealerLocation,
  title,
  previewLabel,
  mainImage,
  logo,
  linkToDealerPage,
  handleOnClick,
  handleOnError,
  handleOnClickText,
}) => {
  return (
    <FixedCard
      renderImage={() => (
        <div>
          {!mainImage.includes("null") ? (
            <img
              src={mainImage}
              className="promotionImage w-12/12 object-cover"
              alt={title}
              onClick={() => {
                handleOnClick
              }}
              onError={() => {
                handleOnError
              }}
            />
          ) : (
            <UploadImagesIcon width="72px" height="72px" />
          )}
        </div>
      )}
    >
      <div
        className="p-20 w-12/12 md:w-card max-h-dropdown"
        onClick={() => {
          handleOnClickText
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
          href={linkToDealerPage}
          target="_blank"
          rel="noreferrer"
          className="text-teal flex items-center font-bold mt-16"
        >
          {previewLabel}
          <ArrowRightTeal width="32px" height="32px" />
        </a>
        <hr className="text-grey-1 my-20" />
        <div className="w-12/12 flex items-center">
          {!logo.includes("null") ? (
            <div className="w-2/12 mr-10">
              <img src={logo} className="flex-shrink-0 mr-10" alt="logo" />
            </div>
          ) : null}
          <div className="w-10/12">
            <div className="font-bold">{dealerName}</div>
            <div className="text-sm mt-5">{`${dealerLocation.address}, ${dealerLocation.zipCode} ${dealerLocation.city}`}</div>
          </div>
        </div>
      </div>
    </FixedCard>
  )
}

export default GaragePromotionCard
