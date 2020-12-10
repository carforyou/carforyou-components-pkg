import React from "react"
import Generator from "./generator.js"
import Spinner from "../components/spinner"

export default {
  title: "Spinner",
  component: Spinner,
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
  return <Generator title={args.storyName} style={""} component={<Spinner />} />
}

export const Default = Template.bind({})
