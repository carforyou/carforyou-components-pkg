import React from "react"
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
  return (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">{args.storyName}</div>
      <Spinner />
    </div>
  )
}

export const Default = Template.bind({})
