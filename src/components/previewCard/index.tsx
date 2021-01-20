import React, { FC } from "react"

import ImageHelper from "./imageHelper"
import UploadImagesIcon from "../icons/uploadImage"
import Arrow from "../icons/arrowDownM"
import FixedCard from "../card/fixed"

interface Props {
  footerTitle: string
  footerText: string
  title?: string
  previewLabel: string
  image?: string
  logo?: string
  link?: string
  editMode?: boolean
  handleOnClick?: () => void
  handleOnError?: (e) => void
}

const PreviewCard: FC<Props> = ({
  footerTitle,
  footerText,
  title,
  previewLabel,
  image,
  logo,
  link,
  editMode,
  handleOnClick,
  handleOnError,
}) => {
  return (
    <FixedCard
      renderImage={() => (
        <div className="bg-grey-1 flex justify-center items-center text-grey-2 md:h-cardImage w-12/12 md:w-card">
          {!image && editMode ? (
            <UploadImagesIcon width="72px" height="72px" />
          ) : (
            <ImageHelper
              imageSrc={image}
              pictureAlt={title}
              handleOnClickImage={handleOnClick}
              handleOnErrorImage={handleOnError}
            />
          )}
        </div>
      )}
    >
      <div
        className="p-20 w-12/12 md:w-card max-h-dropdown"
        onClick={() => {
          handleOnClick && handleOnClick()
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
          <Arrow
            className="text-teal transform customRotate-270"
            with="32px"
            height="32px"
          />
        </a>
        <hr className="text-grey-1 my-20" />
        <div className="w-12/12 flex items-center">
          {logo ? (
            <div className="w-2/12 mr-10">
              <ImageHelper imageSrc={logo} pictureAlt={"logo"} />
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
