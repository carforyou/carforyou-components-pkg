import React, { FC } from "react"

import StoryContainer from "./storyContainer"
import Intercom, { IntercomProps } from "../components/intercom/index"

export default {
  title: "Intercom",
  component: Intercom,
  args: {
    storyName: "Example",
    label: "Support",
    stage: "dev",
    autoload: false,
    appId: "123",
  },
  argTypes: {
    buttonName: {
      table: {
        disable: true,
      },
    },
  },
}

interface Props extends IntercomProps {
  storyName: string
}

const Template: FC<Props> = (args) => {
  return (
    <StoryContainer title={args.storyName} component={<Intercom {...args} />} />
  )
}

export const Default = Template.bind({})
Default.args = {
  storyName: "Example",
  userInfo: { user_id: "123" },
}
