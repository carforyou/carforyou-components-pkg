import React, { useState } from "react"

import { action } from "@storybook/addon-actions"

import StoryContainer from "../storyContainer"
import { RangeFilterWithFacets } from "../../index"

const exampleScale = [
  "*-1000",
  "1000-2000",
  "2000-3000",
  "3000-4000",
  "4000-5000",
  "5000-6000",
  "6000-7000",
  "7000-8000",
  "8000-9000",
  "9000-10000",
  "10000-12500",
  "12500-15000",
  "15000-17500",
  "17500-20000",
  "20000-22500",
  "22500-25000",
  "25000-27500",
  "27500-30000",
  "30000-35000",
  "35000-40000",
  "40000-45000",
  "45000-50000",
  "50000-60000",
  "60000-70000",
  "70000-80000",
  "80000-90000",
  "90000-100000",
  "100000-125000",
  "125000-150000",
  "150000-175000",
  "175000-200000",
  "200000-225000",
  "225000-250000",
  "250000-275000",
  "275000-300000",
  "300000-350000",
  "350000-400000",
  "400000-450000",
  "450000-500000",
  "500000-600000",
  "600000-700000",
  "700000-800000",
  "800000-900000",
  "900000-1000000",
  "1000000-*",
]

const createDummyFacets = () => {
  const facets = {}
  exampleScale.forEach((scale) => {
    facets[scale] = Math.floor(Math.random() * (1000 - 100 + 1) + 100)
  })
  return facets
}

const exampleFacets = createDummyFacets()

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
    min: "From",
    max: "To",
  },
  value: {
    min: 5000,
    max: 25000,
  },
  placeholder: {
    min: "From",
    max: "To",
  },
}

export const WithoutFacets = Template.bind({})
WithoutFacets.args = {
  storyName: "Default",
  scale: exampleScale,
  inputName: {
    min: "From",
    max: "To",
  },
  value: {
    min: 5000,
    max: 25000,
  },
  placeholder: {
    min: "From",
    max: "To",
  },
}
