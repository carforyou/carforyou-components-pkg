// import styles from "./pagination.css"

import React, { StatelessComponent } from "react"
import ReactPaginate from "react-paginate"
import Head from "next/head"

interface Props {
  pageCount: number
  previousLabel: string
  nextLabel: string
  onPageChange: (data: any) => void
  forcePage: number
  query: object
  pageLinkBuilder: (page: number, params: object) => string
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

const Pagination: StatelessComponent<Props> = ({
  pageCount,
  previousLabel,
  nextLabel,
  onPageChange,
  forcePage,
  query,
  pageLinkBuilder
}) => {
  return (
    pageCount > 1 ? (<>
      <Head>{getRelLinks(forcePage, query, pageCount, pageLinkBuilder)}</Head>
      <ReactPaginate
        hrefBuilder={page => pageLinkBuilder(page, query)}
        pageCount={pageCount}
        previousLabel={previousLabel}
        nextLabel={nextLabel}
        breakLabel={<span>...</span>}
        breakClassName="break-me"
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        onPageChange={onPageChange}
        containerClassName="pagination"
        pageClassName="page"
        subContainerClassName="pages pagination"
        activeClassName="active"
        forcePage={forcePage}
      />
    </>) : null
  )
}

export default Pagination
