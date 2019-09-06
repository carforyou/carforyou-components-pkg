import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
// import { linkTo } from '@storybook/addon-links';
import Pagination from "../src/components/pagination"

import "../.storybook/stories.css"
import "../assets/index.css"

storiesOf("Pagination", module)
  .add("on first page", () => (
    <Pagination
      pageCount={9}
      forcePage={0}
      previousLabel="Previous"
      nextLabel="Next"
      onPageChange={action("page changed")}
      query={{ foo: "bar" }}
      pageLinkBuilder={page => {
        return `/paginated/?page=${page}`
      }}
    />
  ))
  .add("on last page", () => (
    <Pagination
      pageCount={9}
      forcePage={8}
      previousLabel="Previous"
      nextLabel="Next"
      onPageChange={action("page changed")}
      query={{ foo: "bar" }}
      pageLinkBuilder={page => {
        return `/paginated/?page=${page}`
      }}
    />
  ))
  .add("on page 3", () => (
    <Pagination
      pageCount={9}
      forcePage={3}
      previousLabel="Previous"
      nextLabel="Next"
      onPageChange={action("page changed")}
      query={{ foo: "bar" }}
      pageLinkBuilder={page => {
        return `/paginated/?page=${page}`
      }}
    />
  ))
