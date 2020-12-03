import React from "react"
import Pagination from "../components/pagination"
import { action } from "@storybook/addon-actions"

export default {
  title: "Pagination",
  component: Pagination,
  args: {
    storyName: "",
  },
  argTypes: {
    storyName: {
      table: {
        disable: true,
      },
    },
  },
}

const Template = (args) => {
  return (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">{args.storyName}</div>
      <Pagination {...args} />
    </div>
  )
}

export const OnFirstPage = Template.bind({})
OnFirstPage.args = {
  storyName: "On first page",
  pageCount: 100,
  forcePage: 0,
  renderHead: (links) => links,
  previousLabel: "Previous",
  nextLabel: "Next",
  rangePageLabel: "of",
  onPageChange: action("page changed"),
  query: { foo: "bar" },
  pageLinkBuilder: (page) => {
    return `/paginated/?page=${page}`
  },
}

export const OnLastPage = Template.bind({})
OnLastPage.args = {
  storyName: "On last page",
  pageCount: 100,
  forcePage: 99,
  renderHead: (links) => links,
  previousLabel: "Previous",
  nextLabel: "Next",
  rangePageLabel: "of",
  onPageChange: action("page changed"),
  query: { foo: "bar" },
  pageLinkBuilder: (page) => {
    return `/paginated/?page=${page}`
  },
}

export const OnPage50 = Template.bind({})
OnPage50.args = {
  storyName: "On page 50",
  pageCount: 100,
  forcePage: 49,
  renderHead: (links) => links,
  previousLabel: "Previous",
  nextLabel: "Next",
  rangePageLabel: "of",
  onPageChange: action("page changed"),
  query: { foo: "bar" },
  pageLinkBuilder: (page) => {
    return `/paginated/?page=${page}`
  },
}
