import React, { FC } from "react"

import { action } from "@storybook/addon-actions"

import { StoryProps } from "./storyProps"
import StoryContainer from "./storyContainer"
import SegmentedControl, {
  SegmentedControlProps,
} from "../components/segmentedControl"

const options = () => [
  { value: 1, name: "Button 1" },
  { value: 2, name: "Button 2" },
  { value: 3, name: "Button 3" },
]

const onSelect = () => action("onSelect")
const initialSelection = (initial = null) => initial
const small = (initial = false) => initial
const disabled = (initial = false) => initial
const growing = (initial = false) => initial

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

interface Props extends StoryProps<unknown>, SegmentedControlProps<unknown> {}

const Template: FC<Props> = (args) => {
  return (
    <StoryContainer
      title={args.storyName}
      style={"w-12/12 md:w-6/12"}
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
  growing: growing(),
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

export const Growing = Template.bind({})
Growing.args = {
  storyName: "Growing",
  options: [
    { value: 1, name: "Button 1" },
    { value: 2, name: "Button with very long text" },
    { value: 3, name: "Button with even longer text" },
  ],
  onSelect: onSelect(),
  initialSelection: initialSelection(),
  small: small(true),
  disabled: disabled(),
  growing: growing(true),
}
