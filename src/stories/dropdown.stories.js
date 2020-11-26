import React from "react"
import Dropdown from "../components/dropdown/index"
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
const disabled = () => ("disabled", false)
const placeholderKnob = () => ("placeholder", "Select number")

export default {
  title: "Dropdown",
  component: Dropdown,
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
        <Dropdown {...args} />
      </div>
    </div>
  )
}

export const WithPlaceholder = Template.bind({})
WithPlaceholder.args = {
  storyName: "With placeholder",
  options: options(),
  toggle: ({ name, placeholder }) => (
    <div className="text-left">
      <span className={placeholder ? "font-regular" : "font-bold"}>{name}</span>
    </div>
  ),
  selected: selected(),
  onSelect: onSelect(),
  disabled: disabled(),
  placeholder: placeholderKnob(),
}

export const WithoutPlaceholder = Template.bind({})
WithoutPlaceholder.args = {
  storyName: "Without placeholder",
  options: options(),
  toggle: ({ name, placeholder }) => (
    <div className="text-left">
      <span className="font-regular">Select number: </span>
      <span className={placeholder ? "font-regular" : "font-bold"}>
        {name || "-"}
      </span>
    </div>
  ),
  selected: selected(),
  onSelect: onSelect(),
  disabled: disabled(),
}

export const WithCustomOptionRender = Template.bind({})
WithCustomOptionRender.args = {
  storyName: "With custom option render",
  options: options(),
  toggle: ({ name, placeholder }) => (
    <div className="text-left">
      <span className="font-regular">Select number: </span>
      <span className={placeholder ? "font-regular" : "font-bold"}>
        {name || "-"}
      </span>
    </div>
  ),
  selected: selected(),
  onSelect: onSelect(),
  disabled: disabled(),
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
  options: options(),
  toggle: ({ name, placeholder }) => (
    <div className="text-left">
      <span className="font-regular">Select number: </span>
      <span className={placeholder ? "font-regular" : "font-bold"}>
        {name || "-"}
      </span>
    </div>
  ),
  selected: selected(),
  disabled: disabled(),
}
