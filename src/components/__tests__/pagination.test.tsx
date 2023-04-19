import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"

import Pagination from "../pagination"

describe("<Pagination>", () => {
  const handlePageClick = jest.fn()
  const selectedPage = 2
  const linkBuilder = (page, params) => {
    if (!page && params.page) {
      delete params.page
    }
    if (page && Object.keys(params).length) {
      return `search ${page}`
    }
    return `search ${params}`
  }

  it("has the correct href for the active page", () => {
    render(
      <Pagination
        previousLabel="previous"
        nextLabel="next"
        rangePageLabel="of"
        onPageChange={handlePageClick}
        pageCount={100}
        forcePage={selectedPage}
        query={{}}
        pageLinkBuilder={() => linkBuilder(1, { lng: "de" })}
      />
    )
    fireEvent.click(screen.getByText("2"))

    expect(handlePageClick).toHaveBeenCalledWith({ selected: 1 })
  })

  it("applies marks active page as active", async () => {
    render(
      <Pagination
        previousLabel="previous"
        nextLabel="next"
        rangePageLabel="of"
        onPageChange={jest.fn()}
        pageCount={100}
        forcePage={selectedPage}
        query={{}}
        pageLinkBuilder={() => linkBuilder(1, { lng: "de" })}
      />
    )
    fireEvent.click(screen.getByRole("link", { name: "Page 2" }))
    expect(screen.getByRole("link", { name: "Page 2 is your current page" }))
  })

  it("does not mark inactive page as active", async () => {
    render(
      <Pagination
        previousLabel="previous"
        nextLabel="next"
        rangePageLabel="of"
        onPageChange={jest.fn()}
        pageCount={100}
        forcePage={selectedPage}
        query={{}}
        pageLinkBuilder={() => linkBuilder(1, { lng: "de" })}
      />
    )
    fireEvent.click(screen.getByText("2"))
    expect(
      screen.queryByRole("link", { name: "Page 3 is your current page" })
    ).not.toBeInTheDocument()
  })
})
