import React, { useState } from "react"

import { action } from "@storybook/addon-actions"

import StoryContainer from "../storyContainer"
import { RangeFilterScale, RangeFilterWithFacets } from "../../index"

const exampleScale = RangeFilterScale.toRange({
  3000: 1000,
  8000: 2500,
  10000: 2000,
  30000: 10000,
})

const exampleFacets = {
  "*-1000": 481,
  "5500-8000": 167,
  "1000-2000": 854,
  "10000-20000": 318,
  "2000-3000": 650,
  "3000-5500": 786,
  "30000-*": 837,
  "8000-10000": 922,
  "20000-30000": 647,
}

const Wrapper = (props) => {
  const [value, setValue] = useState(props.value)

  return (
    <RangeFilterWithFacets
      {...props}
      addFilter={(changedFilterValue) => {
        action("addFilter called with " + JSON.stringify(changedFilterValue))
        setValue(changedFilterValue)
      }}
      tracking={(trackingEvent) => {
        action("tracking called with " + JSON.stringify(trackingEvent))
      }}
      value={value}
      numberOfResultsLabel="Autos"
    />
  )
}

export default {
  title: "Filters/Range filter with facets",
  component: RangeFilterWithFacets,
  args: {
    storyName: "",
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

export const Default = Template.bind({})
Default.args = {
  storyName: "Default",
  scale: exampleScale,
  facets: exampleFacets,
  inputName: {
    min: "priceFrom",
    max: "priceTo",
  },
  value: {
    min: 5000,
    max: 25000,
  },
  unit: "CHF",
  subtext: "(1450 Autos)",
}

export const WithoutFacets = Template.bind({})
WithoutFacets.args = {
  storyName: "Default",
  scale: exampleScale,
  inputName: {
    min: "priceFrom",
    max: "priceTo",
  },
  value: {
    min: 5000,
    max: 25000,
  },
  unit: "CHF",
  subtext: "(1450 Autos)",
}
