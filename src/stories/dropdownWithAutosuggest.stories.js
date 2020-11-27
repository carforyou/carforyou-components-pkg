import React, { useState } from "react"
import DropdownWithAutosuggest from "../components/dropdown/withAutosuggest"
import { action } from "@storybook/addon-actions"

const options = () => (
  "options",
  [
    { value: 1, name: "One" },
    { value: 2, name: "Two" },
    { value: 3, name: "Three" },
    { value: 4, name: "Four" },
    { value: 5, name: "Five" },
    { value: 6, name: "Six" },
  ]
)

const onSelect = () => action("onSelect")
const selected = () => ("selected", null)
const allowCustomValues = (initial = false) => ("allowCustomValues", initial)
const trimInput = () => ("trimInput", false)

export default {
  title: "DropdownWithAutosuggest",
  component: DropdownWithAutosuggest,
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
      <div className="relative">
        <DropdownWithAutosuggest {...args} />
      </div>
    </div>
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
  onSelect: onSelect(),
  input: ({ getInputProps }) => (
    <input
      {...getInputProps({
        placeholder: "Select number",
        className:
          "text-grey-dark outline-none px-10 py-15 border-grey-2 rounded border focus:border-grey-4 focus:outline-none hover:border-grey-3 hover:transition duration-200",
      })}
    />
  ),
  selected: selected(),
  allowCustomValues: allowCustomValues(),
  trimInput: trimInput(),
}

export const WithCustomValues = Template.bind({})
WithCustomValues.args = {
  storyName: "With custom values",
  options: options(),
  onSelect: onSelect(),
  input: ({ getInputProps }) => (
    <input
      {...getInputProps({
        placeholder: "Select number",
        className:
          "text-grey-dark outline-none px-10 py-15 border-grey-2 rounded border focus:border-grey-4 focus:outline-none hover:border-grey-3 hover:transition duration-200",
      })}
    />
  ),
  selected: selected(),
  allowCustomValues: allowCustomValues(true),
  trimInput: trimInput(),
}

export const WithTypeAhead = TypeAheadWrapper.bind({})
WithTypeAhead.args = {
  storyName: "With Type Ahead",
  onSelect: onSelect(),
  input: ({ getInputProps }) => (
    <input
      {...getInputProps({
        placeholder: "Select number",
        className:
          "text-grey-dark outline-none px-10 py-15 border-grey-2 rounded border focus:border-grey-4 focus:outline-none hover:border-grey-3 hover:transition duration-200",
      })}
    />
  ),
}
