import React, { FC } from "react"
import { action } from "@storybook/addon-actions"

import { StoryProps } from "../storyProps"
import StoryContainer from "../storyContainer"
import MenuItem, { MenuItemProps } from "../../components/menu/item"
import ProfileIcon from "../../components/icons/profile"

export default {
  title: "Menu/Item",
  component: MenuItem,
  args: {
    title: "Menu item",
    IconComponent: ProfileIcon,
    onClick: action("on click menu item"),
    url: "https://example.com",
    active: false,
  },
  argTypes: {
    storyName: {
      table: {
        disable: true,
      },
    },
  },
}

interface Props extends StoryProps<unknown>, MenuItemProps {
  text: string
}

const Template: FC<Props> = (args) => {
  return (
    <StoryContainer
      title={args.storyName}
      style={"w-12/12"}
      component={<MenuItem {...args} />}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  storyName: "Default",
}

export const Active = Template.bind({})
Active.args = {
  storyName: "Active",
  active: true,
}
