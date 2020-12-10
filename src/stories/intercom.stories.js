import React from "react"
import Generator from "./generator.js"
import Intercom from "../components/intercom/index"

export default {
  title: "Intercom",
  component: Intercom,
  args: {
    storyName: "Example",
    label: "Support",
    stage: "dev",
    autoload: false,
    appId:
      ("appId (you need am actual app id to be able to load intercom)", "123"),
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
  return <Generator title={args.storyName} component={<Intercom {...args} />} />
}

export const Default = Template.bind({})
Default.args = {
  storyName: "Example",
  userInfo: { user_id: "123" },
}
