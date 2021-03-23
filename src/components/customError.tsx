import React, { FC } from "react"

import Button from "./button"

interface Props {
  statusCode: number
  pageTitle: string
  pageSubtitle: string
  redirectHref: string
  redirectLabel: string
}
const CustomError: FC<Props> = ({
  statusCode,
  pageTitle,
  pageSubtitle,
  redirectHref,
  redirectLabel,
}) => {
  return (
    <div
      data-testid={statusCode === 404 ? "error404" : "errorDefault"}
      className="text-center pageWithFooter flex flex-col items-center justify-center"
    >
      {statusCode === 404 ? (
        <img src="/error404.png" className="w-110 lg:w-200" alt="404 page" />
      ) : (
        <img
          src="/error-default.png"
          className="w-110 lg:w-200"
          alt="Error page"
        />
      )}
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

export default CustomError
export { Props as Error404Props }
