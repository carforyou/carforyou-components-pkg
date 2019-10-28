import React, { StatelessComponent, ReactNode } from "react"
import ReactPaginate from "react-paginate"
import ArrowRightM from "./icons/ArrowRightMCrop"

interface Props {
  pageCount: number
  previousLabel: string
  nextLabel: string
  onPageChange: (data: any) => void
  forcePage: number
  query: object
  pageLinkBuilder: (page: number, params: object) => string
  renderHead?: ReactNode
}

const getRelLinks = (forcePage, query, pageCount, linkBuilder) => {
  if (forcePage === 0) {
    return <link href={linkBuilder(forcePage + 2, query)} rel="next" />
  } else if (forcePage === pageCount - 1) {
    return <link href={linkBuilder(forcePage, query)} rel="prev" />
  } else {
    return [
      <link href={linkBuilder(forcePage + 2, query)} rel="next" key="next" />,
      <link href={linkBuilder(forcePage, query)} rel="prev" key="prev" />
    ]
  }
}

export const Pagination: StatelessComponent<Props> = ({
  pageCount,
  previousLabel,
  nextLabel,
  onPageChange,
  forcePage,
  query,
  pageLinkBuilder
}) => {
  const renderHead = getRelLinks(forcePage, query, pageCount, pageLinkBuilder)

  return pageCount > 1 ? (
    <>
      <ReactPaginate
        children={renderHead}
        hrefBuilder={(page: number) => pageLinkBuilder(page, query)}
        pageCount={pageCount}
        previousLabel={
          <>
            <ArrowRightM
              height="17"
              width="17"
              className="inline-block align-middle rotate-180"
            />
            <span className="pl-10">{previousLabel}</span>
          </>
        }
        nextLabel={
          <>
            <span className="pr-10">{nextLabel}</span>
            <ArrowRightM
              height="17"
              width="17"
              className="inline-block align-middle"
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
    </>
  ) : null
}

export default Pagination
