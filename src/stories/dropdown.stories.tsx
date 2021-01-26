import React, { FC, ReactChild } from "react"

import { action } from "@storybook/addon-actions"

import StoryContainer from "./storyContainer"
import Dropdown from "../components/dropdown/index"

const options = () => [
  { value: 1, name: "One" },
  { value: 2, name: "Two" },
  { value: 3, name: "Three" },
  { value: 4, name: "Four" },
  { value: 5, name: "Five" },
  { value: 6, name: "Six" },
]

const onSelect = () => action("onSelect")

export default {
  title: "Dropdown",
  component: Dropdown,
  args: {
    storyName: "",
    options: options(),
    toggle: ({ name, placeholder }) => (
      <div className="text-left">
        <span className="font-regular">Select number: </span>
        <span className={placeholder ? "font-regular" : "font-bold"}>
          {name || "-"}
        </span>
      </div>
    ),
    selected: null,
    disabled: false,
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
  toggle: (
    selected: {
      name: string
      value: number | string
      placeholder?: boolean
    },
    isOpen: boolean
  ) => ReactChild
  options: Array<{
    value: number | string
    name: string
  }>
}

const Template: FC<Props> = (args) => {
  return (
    <StoryContainer
      title={args.storyName}
      style={"relative"}
      component={<Dropdown {...args} />}
    />
  )
}

export const WithPlaceholder = Template.bind({})
WithPlaceholder.args = {
  storyName: "With placeholder",
  onSelect: onSelect(),
  placeholder: "Select number",
}

export const WithoutPlaceholder = Template.bind({})
WithoutPlaceholder.args = {
  storyName: "Without placeholder",
  onSelect: onSelect(),
}

export const WithCustomOptionRender = Template.bind({})
WithCustomOptionRender.args = {
  storyName: "With custom option render",
  onSelect: onSelect(),
  renderOption: ({ name, value }) => (
    <div className="w-12/12 flex justify-between">
      <span>{name}</span>
      <span>({value})</span>
    </div>
  ),
}

export const WithoutSelectionHandler = Template.bind({})
WithoutSelectionHandler.args = {
  storyName: "Without selection handler",
}
