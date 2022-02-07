import ReactPaginate from "react-paginate"
import React, { FC } from "react"

import ArrowDownMIcon from "../assets/dist/icons/arrowDownMCrop"

interface Props {
  pageCount: number
  previousLabel: string
  nextLabel: string
  rangePageLabel: string
  onPageChange: (data) => void
  forcePage: number
  query?: Record<string, unknown>
  pageLinkBuilder?: (page: number, params: Record<string, unknown>) => string
  renderHead?: (links) => void
}

const getRelLinks = (forcePage, query, pageCount, linkBuilder) => {
  if (forcePage === 0) {
    return <link href={linkBuilder(forcePage + 2, query)} rel="next" />
  } else if (forcePage === pageCount - 1) {
    return (
      <link
        href={linkBuilder(forcePage === 1 ? null : forcePage, query)}
        rel="prev"
      />
    )
  } else {
    return [
      <link href={linkBuilder(forcePage + 2, query)} rel="next" key="next" />,
      <link
        href={linkBuilder(forcePage === 1 ? null : forcePage, query)}
        rel="prev"
        key="prev"
      />,
    ]
  }
}

export const Pagination: FC<Props> = ({
  pageCount,
  previousLabel,
  nextLabel,
  rangePageLabel,
  onPageChange,
  forcePage,
  query,
  pageLinkBuilder,
  renderHead,
}) => {
  return pageCount > 1 ? (
    <div className="flex justify-center">
      {renderHead &&
        renderHead(getRelLinks(forcePage, query, pageCount, pageLinkBuilder))}
      <ReactPaginate
        hrefBuilder={
          pageLinkBuilder
            ? (page: number) => pageLinkBuilder(page, query)
            : null
        }
        pageCount={pageCount}
        previousLabel={
          <>
            <ArrowDownMIcon
              height="28"
              width="28"
              className="inline-block transform rotate-90"
            />
            {previousLabel}
          </>
        }
        nextLabel={
          <>
            {nextLabel}
            <ArrowDownMIcon
              height="28"
              width="28"
              className="inline-block align-middle transform rotate-270"
            />
          </>
        }
        breakLabel={<span>...</span>}
        breakClassName="break-me"
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        onPageChange={onPageChange}
        containerClassName="pagination"
        pageClassName="page"
        activeClassName="active"
        forcePage={forcePage}
      />
      <div className="flex items-center lg:hidden">
        <span>
          <span className="font-bold">{`${forcePage + 1} `}</span>
          {`${rangePageLabel} ${pageCount}`}
        </span>
      </div>
    </div>
  ) : null
}

export default Pagination
export { Props as PaginationProps }
