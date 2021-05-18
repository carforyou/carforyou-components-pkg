import React, { FC } from "react"

import { StoryProps } from "./storyProps"
import StoryContainer from "./storyContainer"
import Tabs, { TabsProps } from "../components/tabs"
import MailSent from "../../.storybook/icons/mailSent"

export default {
  title: "Tabs",
  component: Tabs,
  args: {
    storyName: "",
    tabs: [
      { name: "Tab 1", renderContent: () => <>Tab 1 Content</> },
      { name: "Tab 2", renderContent: () => <>Tab 2 Content</> },
    ],
  },
  argTypes: {
    storyName: {
      table: {
        disable: true,
      },
    },
  },
}

interface Props extends StoryProps<unknown>, TabsProps {}

const Template: FC<Props> = (args) => {
  return (
    <StoryContainer title={args.storyName} component={<Tabs {...args} />} />
  )
}

export const Default = Template.bind({})

export const Single = Template.bind({})
Single.args = {
  storyName: "Single",
  tabs: [
    {
      title: "Tab 1",
      renderContent: () => <>Tab 1 Content</>,
    },
  ],
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  storytitle: "With Icon",
  tabs: [
    {
      title: "Tab 1",
      renderContent: () => <>Tab 1 Content</>,
      renderIcon: () => <MailSent width="20px" height="20px" />,
    },
    {
      title: "Tab 2",
      renderContent: () => <>Tab 2 Content</>,
      renderIcon: () => <MailSent width="20px" height="20px" />,
    },
  ],
}

export const More = Template.bind({})
More.args = {
  storytitle: "More tabs",
  tabs: [
    {
      title: "Tab 1",
      renderContent: () => <>Tab 1 Content</>,
    },
    {
      title: "Tab 2",
      renderContent: () => <>Tab 2 Content</>,
    },
    {
      title: "Tab 3",
      renderContent: () => <>Tab 3 Content</>,
    },
    {
      title: "Tab 4",
      renderContent: () => <>Tab 4 Content</>,
    },
  ],
}
