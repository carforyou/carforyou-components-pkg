import React, { FC } from "react"

import { action } from "@storybook/addon-actions"

import StoryContainer from "./storyContainer"
import Pagination from "../components/pagination"

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

interface Props {
  storyName: string
  pageCount: number
  previousLabel: string
  nextLabel: string
  rangePageLabel: string
  onPageChange: (data: number | string) => void
  forcePage: number
}

const Template: FC<Props> = (args) => {
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
