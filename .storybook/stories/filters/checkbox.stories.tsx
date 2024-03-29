import React, { useState } from "react"

import { action } from "@storybook/addon-actions"

import StoryContainer from "../storyContainer"
import CheckboxFilter from "../../../src/components/filters/checkbox"
import ClockOutlinedTealIcon from "../../../src/assets/dist/icons/clockOutlinedTeal"

const options = [
  { label: "One", value: 1 },
  { label: "Two", value: 2 },
  { label: "Three", value: 3 },
]

const Wrapper = (props) => {
  const [selection, setSelection] = useState(props.selected || [])

  return (
    <CheckboxFilter
      {...props}
      selected={selection}
      apply={(filters) => {
        action("applyFilters")
        setSelection(filters[props.name])
      }}
    />
  )
}

export default {
  title: "Filters/Checkbox",
  component: CheckboxFilter,
  args: {
    storyName: "",
    options,
    name: "testFilter",
  },
  argTypes: {
    storyName: {
      table: {
        disable: true,
      },
    },
  },
}

const Template = (props) => {
  return (
    <StoryContainer
      title={props.storyName}
      component={<Wrapper {...props} />}
    />
  )
}

export const Simple = Template.bind({})
Simple.args = {
  storyName: "Simple",
}

export const WithInitialSelection = Template.bind({})
WithInitialSelection.args = {
  storyName: "With initial selection",
  selected: [1, 2],
}

export const WithFacet = Template.bind({})
WithFacet.args = {
  storyName: "With facet",
  facet: {
    "1": 5387,
    "2": 120,
    "3": 0,
  },
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  storyName: "With icon",
  options: [
    {
      label: "One",
      value: 1,
      renderIcon: () => (
        <ClockOutlinedTealIcon width="20" height="20" className="mr-10" />
      ),
    },
    {
      label: "Two",
      value: 2,
      renderIcon: () => (
        <ClockOutlinedTealIcon width="20" height="20" className="mr-10" />
      ),
    },
    {
      label: "Three",
      value: 3,
      renderIcon: () => (
        <ClockOutlinedTealIcon width="20" height="20" className="mr-10" />
      ),
    },
  ],
}

export const WithOnSelect = Template.bind({})
WithOnSelect.args = {
  storyName: "With onSelect",
  onSelect: action("on select"),
}
