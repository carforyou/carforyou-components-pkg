import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { wInfo } from "./utils"
import Pagination from "../src/components/pagination"

import "../assets/index.css"

storiesOf("Pagination", module)
  .add(
    "on first page", 
    wInfo(`
    Description
    ~~~~
    <Pagination>
      pageCount={/* select page */}
      forcePage={/* select total pages */}
      previousLabel={/* select label */}
      nextLabel={/* select label */}
      rangePageLabel={/* select label */}
      renderHead={links => links}
      onPageChange={data => data}
      query={{ foo: "bar" }}
      pageLinkBuilder={() => "search"}
    </Pagination>
    `)(() => (
      <Pagination
        pageCount={100}
        forcePage={0}
        renderHead={links => links}
        previousLabel="Previous"
        nextLabel="Next"
        rangePageLabel="of"
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
    pageCount={/* select page */}
    forcePage={/* select total pages */}
    previousLabel={/* select label */}
    nextLabel={/* select label */}
    rangePageLabel={/* select label */}
    renderHead={links => links}
    onPageChange={data => data}
    query={{ foo: "bar" }}
    pageLinkBuilder={() => "search"}
  </Pagination>
  `)(() => (
      <Pagination
        pageCount={100}
        forcePage={99}
        renderHead={links => links}
        previousLabel="Previous"
        nextLabel="Next"
        rangePageLabel="of"
        onPageChange={action("page changed")}
        query={{ foo: "bar" }}
        pageLinkBuilder={page => {
          return `/paginated/?page=${page}`
        }}
      />
    ))
  )
  .add("on page 50",
  wInfo(`
  Description
  ~~~~
  <Pagination>
    pageCount={/* select page */}
    forcePage={/* select total pages */}
    previousLabel={/* select label */}
    nextLabel={/* select label */}
    rangePageLabel={/* select label */}
    renderHead={links => links}
    onPageChange={data => data}
    query={{ foo: "bar" }}
    pageLinkBuilder={() => "search"}
  </Pagination>
  `)(() => (
      <Pagination
        pageCount={100}
        forcePage={49}
        renderHead={links => links}
        previousLabel="Previous"
        nextLabel="Next"
        rangePageLabel="of"
        onPageChange={action("page changed")}
        query={{ foo: "bar" }}
        pageLinkBuilder={page => {
          return `/paginated/?page=${page}`
        }}
      />
    ))
  ) 
