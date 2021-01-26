import React, { FC, ReactChild, useState } from "react"

import { action } from "@storybook/addon-actions"

import StoryContainer from "./storyContainer"
import Input from "../components/input/inputField"
import DropdownWithAutosuggest, {
  InputProps,
} from "../components/dropdown/withAutosuggest"

const options = () => [
  { value: 1, name: "One" },
  { value: 2, name: "Two" },
  { value: 3, name: "Three" },
  { value: 4, name: "Four" },
  { value: 5, name: "Five" },
  { value: 6, name: "Six" },
]

const onSelect = () => action("onSelect")
const allowCustomValues = (initial = false) => initial

export default {
  title: "DropdownWithAutosuggest",
  component: DropdownWithAutosuggest,
  args: {
    storyName: "",
    onSelect: onSelect(),
    input: ({ getInputProps }) => (
      <Input
        {...getInputProps({
          placeholder: "Select number",
        })}
      />
    ),
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
  input: (propGetter: InputProps) => ReactChild
  onSelect: (selection: number | string | { customValue: string }) => void
}

const Template: FC<Props> = (args) => {
  return (
    <StoryContainer
      title={args.storyName}
      style={"relative"}
      component={<DropdownWithAutosuggest {...args} />}
    />
  )
}

const TypeAheadWrapper = (args) => {
  const [suggestions, setSuggestions] = useState([])
  const onTypeAhead = (value) =>
    setSuggestions(
      [1, 2, 3, 4, 5].map((i) => ({
        name: `${value}: suggestion ${i}`,
        value: `${value}.${i}`,
      }))
    )
  return (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">{args.storyName}</div>
      <div className="relative">
        <DropdownWithAutosuggest
          {...args}
          options={suggestions}
          onTypeAhead={onTypeAhead}
        />
      </div>
    </div>
  )
}

export const Default = Template.bind({})
Default.onTypeAhead = null
Default.args = {
  storyName: "With placeholder",
  options: options(),
  selected: null,
  allowCustomValues: allowCustomValues(),
  trimInput: false,
}

export const WithCustomValues = Template.bind({})
WithCustomValues.args = {
  storyName: "With custom values",
  options: options(),
  selected: null,
  allowCustomValues: allowCustomValues(true),
  trimInput: false,
}

export const WithTypeAhead = TypeAheadWrapper.bind({})
WithTypeAhead.args = {
  storyName: "With Type Ahead",
}
