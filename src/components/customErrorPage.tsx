import React, { FC } from "react"

import Button from "./button"

interface Props {
  statusCode: number | "default"
  image: string
  pageTitle: string
  pageSubtitle: string
  redirectHref: string
  redirectLabel: string
}
const CustomErrorPage: FC<Props> = ({
  statusCode,
  image,
  pageTitle,
  pageSubtitle,
  redirectHref,
  redirectLabel,
}) => {
  return (
    <div
      data-testid={`error${statusCode}`}
      className="text-center pageWithFooter flex flex-col items-center justify-center"
    >
      <img
        src={image}
        className="w-110 lg:w-200"
        alt={`${statusCode} Error page`}
      />
      <h1 className="text-xl md:text-3xl">{pageTitle}</h1>
      <h2 className="text-xl mt-20 mb-10 lg:mb-60 font-regular">
        {pageSubtitle}
      </h2>
      <div className="w-110 lg:w-200">
        <Button>
          <a href={redirectHref} className="mx-auto">
            {redirectLabel}
          </a>
        </Button>
      </div>
    </div>
  )
}

export default CustomErrorPage
export { Props as Error404Props }
