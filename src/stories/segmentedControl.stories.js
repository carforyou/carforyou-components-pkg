import React from "react"

import { action } from "@storybook/addon-actions"

import StoryContainer from "./storyContainer"
import SegmentedControl from "../components/segmentedControl"

const options = () => (
  "options",
  [
    { value: 1, name: "Button 1" },
    { value: 2, name: "Button 2" },
    { value: 3, name: "Button 3" },
  ]
)
const onSelect = () => action("onSelect")
const initialSelection = (initial = null) => ("Initial Selection", initial)
const small = (initial = false) => ("Small", initial)
const disabled = (initial = false) => ("Disabled", initial)

export default {
  title: "Segmented Control",
  component: SegmentedControl,
  args: {
    storyName: "Default",
  },
  argTypes: {
    buttonName: {
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
      style={"w-12/12 md:w-4/12"}
      component={<SegmentedControl {...args} />}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  options: options(),
  onSelect: onSelect(),
  initialSelection: initialSelection(),
  small: small(),
  disabled: disabled(),
}

export const WithTwoButtons = Template.bind({})
WithTwoButtons.args = {
  storyName: "With two buttons",
  options: [
    { value: 1, name: "Button 1" },
    { value: 2, name: "Button 2" },
  ],
  onSelect: onSelect(),
  initialSelection: initialSelection(),
  small: small(),
  disabled: disabled(),
}

export const WithoutSelectionHandler = Template.bind({})
WithoutSelectionHandler.args = {
  storyName: "Without selection handler",
  options: options(),
  initialSelection: initialSelection(2),
  small: small(),
  disabled: disabled(),
}

export const WithInitialSelection = Template.bind({})
WithInitialSelection.args = {
  storyName: "With initial selection",
  options: options(),
  onSelect: onSelect(),
  initialSelection: initialSelection(2),
  small: small(),
  disabled: disabled(),
}

export const WithCustomOptionRender = Template.bind({})
WithCustomOptionRender.args = {
  storyName: "With custom option render",
  options: options(),
  onSelect: onSelect(),
  initialSelection: initialSelection(),
  small: small(),
  disabled: disabled(),
  renderOption: ({ name, value }) => (
    <div className="w-12/12 flex justify-between">
      <span>{name}</span>
      <span>({value})</span>
    </div>
  ),
}

export const Small = Template.bind({})
Small.args = {
  storyName: "Small",
  options: options(),
  onSelect: onSelect(),
  initialSelection: initialSelection(),
  small: small(true),
  disabled: disabled(),
}

export const Disabled = Template.bind({})
Disabled.args = {
  storyName: "Disabled",
  options: options(),
  onSelect: onSelect(),
  initialSelection: initialSelection(),
  small: small(),
  disabled: disabled(true),
}

export const DisabledSmall = Template.bind({})
DisabledSmall.args = {
  storyName: "Disabled Small",
  options: options(),
  onSelect: onSelect(),
  initialSelection: initialSelection(),
  small: small(true),
  disabled: disabled(true),
}
