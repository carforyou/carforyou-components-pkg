import React, { StatelessComponent } from "react"
import ReactPaginate from "react-paginate"
import ArrowRightM from "./icons/ArrowRightMCrop"

interface Props {
  pageCount: number
  previousLabel: string
  nextLabel: string
  rangePageLabel: string
  onPageChange: (data: any) => void
  forcePage: number
  query: object
  pageLinkBuilder: (page: number, params: object) => string
  renderHead?: (links) => void
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
  rangePageLabel,
  onPageChange,
  forcePage,
  query,
  pageLinkBuilder,
  renderHead
}) => {
  const links = getRelLinks(forcePage, query, pageCount, pageLinkBuilder)

  return pageCount > 1 ? (
    <div className="flex justify-center">
      {renderHead(links)}
      <ReactPaginate
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
      <div className="flex items-center lg:hidden">
        <span>
          <span className="font-bold">{`${forcePage + 1}` + " "}</span>
          {`${rangePageLabel} ${pageCount}`}
        </span>
      </div>
    </div>
  ) : null
}

export default Pagination
