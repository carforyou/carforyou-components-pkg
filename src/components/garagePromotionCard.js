import React from "react"

import ImageHelper from "./imageHelper"
import UploadImagesIcon from "./icons/uploadImage"
import ArrowRightTeal from "./icons/arrowRight"
import { FixedCard } from "./card/fixed"

const GaragePromotionCard = ({
  dealer,
  title,
  previewLabel,
  mainImage,
  logo,
  linkToDealerPage,
  url,
}) => {
  return (
    <FixedCard
      renderImage={() => (
        <div className="bg-grey-1 flex justify-center items-center text-grey-2 h-cardImageSmall md:h-cardImage w-12/12 md:w-card">
          {mainImage?.s3Key ? (
            <ImageHelper image={mainImage} cdnUrl={url} fullWidth />
          ) : (
            <UploadImagesIcon width="72px" height="72px" />
          )}
        </div>
      )}
    >
      <div className="p-20 w-12/12 md:w-card max-h-dropdown">
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
          {logo?.s3Key ? (
            <div className="w-2/12 mr-10">
              <ImageHelper image={logo} cdnUrl={url} fullWidth />
            </div>
          ) : null}
          <div className="w-10/12">
            <div className="font-bold">{dealer.name}</div>
            <div className="text-sm mt-5">{`${dealer.address}, ${dealer.zipCode} ${dealer.city}`}</div>
          </div>
        </div>
      </div>
    </FixedCard>
  )
}

export default GaragePromotionCard
