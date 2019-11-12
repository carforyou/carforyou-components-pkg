import React from "react"
import { render, fireEvent } from "@testing-library/react"
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
    const { getByText } = render(
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
    fireEvent.click(getByText("2"))

    expect(handlePageClick).toHaveBeenCalledWith({ selected: 1 })
  })

  it("applies active style to active page", async () => {
    const { getByText } = render(
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
    fireEvent.click(getByText("2"))
    expect(getByText("2").parentElement.classList.contains("active"))
  })

  it("applies inactive style to inactive page", async () => {
    const { getByText } = render(
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
    fireEvent.click(getByText("2"))
    expect(getByText("1").parentElement.classList.contains("active")).toBe(
      false
    )
  })
})
