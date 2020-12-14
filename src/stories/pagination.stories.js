import React from "react"
import StoryContainer from "./storyContainer"
import Pagination from "../components/pagination"
import { action } from "@storybook/addon-actions"

export default {
  title: "Pagination",
  component: Pagination,
  args: {
    storyName: "",
    pageCount: 100,
    renderHead: (links) => links,
    previousLabel: "Previous",
    nextLabel: "Next",
    rangePageLabel: "of",
    onPageChange: action("page changed"),
    query: { foo: "bar" },
    pageLinkBuilder: (page) => {
      return `/paginated/?page=${page}`
    },
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
    <StoryContainer
      title={args.storyName}
      style={""}
      component={<Pagination {...args} />}
    />
  )
}

export const OnFirstPage = Template.bind({})
OnFirstPage.args = {
  storyName: "On first page",
  forcePage: 0,
}

export const OnLastPage = Template.bind({})
OnLastPage.args = {
  storyName: "On last page",
  forcePage: 99,
}

export const OnPage50 = Template.bind({})
OnPage50.args = {
  storyName: "On page 50",
  forcePage: 49,
}
