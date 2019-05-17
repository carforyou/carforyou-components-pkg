import * as React from "react"
import { StatelessComponent } from "react"
import ReactPaginate from "react-paginate"
import ArrowRightM from "./icons/ArrowRightMCrop"

import "./pagination.css"

interface Props {
  pageCount: number
  previousLabel: string
  nextLabel: string
  onPageChange: (data: any) => void
  forcePage: number
  query: object
  pageLinkBuilder: (page: number, params: object) => string
}

// const getRelLinks = (forcePage, query, pageCount, linkBuilder) => {
//   if (forcePage === 0) {
//     return <link href={linkBuilder(forcePage + 2, query)} rel="next" />
//   } else if (forcePage === pageCount - 1) {
//     return <link href={linkBuilder(forcePage, query)} rel="prev" />
//   } else {
//     return [
//       <link href={linkBuilder(forcePage + 2, query)} rel="next" key="next" />,
//       <link href={linkBuilder(forcePage, query)} rel="prev" key="prev" />
//     ]
//   }
// }

const Pagination: StatelessComponent<Props> = ({
  pageCount,
  previousLabel,
  nextLabel,
  onPageChange,
  forcePage,
  query,
  pageLinkBuilder
}) => {
  return pageCount > 1 ? (
    <>
      {/* <Head>{getRelLinks(forcePage, query, pageCount, pageLinkBuilder)}</Head> */}
      <ReactPaginate
        hrefBuilder={(page: number) => pageLinkBuilder(page, query)}
        pageCount={pageCount}
        previousLabel={
          <>
            <ArrowRightM
              height="10"
              width="10"
              className="inline-block align-middle rotate-180"
            />{" "}
            {previousLabel}
          </>
        }
        nextLabel={
          <>
            {nextLabel}{" "}
            <ArrowRightM
              height="10"
              width="10"
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
