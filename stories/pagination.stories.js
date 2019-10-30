import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { wInfo } from "./utils"
import Pagination from "../src/components/pagination"

import "../.storybook/stories.css"
import "../assets/index.css"

storiesOf("Pagination", module)
  .add(
    "on first page", 
    wInfo(`
    Description
    ~~~~
    <Pagination>
      pageCount={9}
      forcePage={0}
      previousLabel="Previous"
      nextLabel="Next"
      onPageChange={action("page changed")}
      query={{ foo: "bar" }}
      pageLinkBuilder={(page, queryParams) => {
        return pathFor("mbg/search", { ...queryParams, page })
      }}
    </Pagination>
    `)(() => (
      <Pagination
        pageCount={9}
        forcePage={0}
        renderHead={links => links}
        previousLabel="Previous"
        nextLabel="Next"
        onPageChange={action("page changed")}
        query={{ foo: "bar" }}
        pageLinkBuilder={page => {
          return `/paginated/?page=${page}`
        }}
      />
    ))
  )
  .add("on last page",
  wInfo(`
  Description
  ~~~~
  <Pagination>
    pageCount={9}
    forcePage={8}
    previousLabel="Previous"
    nextLabel="Next"
    onPageChange={action("page changed")}
    query={{ foo: "bar" }}
    pageLinkBuilder={(page, queryParams) => {
      return pathFor("mbg/search", { ...queryParams, page })
    }}
  </Pagination>
  `)(() => (
      <Pagination
        pageCount={9}
        forcePage={8}
        renderHead={links => links}
        previousLabel="Previous"
        nextLabel="Next"
        onPageChange={action("page changed")}
        query={{ foo: "bar" }}
        pageLinkBuilder={page => {
          return `/paginated/?page=${page}`
        }}
      />
    ))
  )
  .add("on page 3",
  wInfo(`
  Description
  ~~~~
  <Pagination>
    pageCount={9}
    forcePage={2}
    previousLabel="Previous"
    nextLabel="Next"
    onPageChange={action("page changed")}
    query={{ foo: "bar" }}
    pageLinkBuilder={(page, queryParams) => {
      return pathFor("mbg/search", { ...queryParams, page })
    }}
  </Pagination>
  `)(() => (
      <Pagination
        pageCount={9}
        forcePage={2}
        renderHead={links => links}
        previousLabel="Previous"
        nextLabel="Next"
        onPageChange={action("page changed")}
        query={{ foo: "bar" }}
        pageLinkBuilder={page => {
          return `/paginated/?page=${page}`
        }}
      />
    ))
  ) 
