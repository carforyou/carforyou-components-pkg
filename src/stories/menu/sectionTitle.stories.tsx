import React, { FC } from "react"

import { StoryProps } from "../storyProps"
import StoryContainer from "../storyContainer"
import MenuSectionTitle, {
  MenuSectionTitleProps,
} from "../../components/menu/sectionTitle"

export default {
  title: "Menu/SectionTitle",
  component: MenuSectionTitle,
  args: {
    title: "Menu section title",
  },
  argTypes: {
    storyName: {
      table: {
        disable: true,
      },
    },
  },
}

interface Props extends StoryProps<unknown>, MenuSectionTitleProps {
  text: string
}

const Template: FC<Props> = (args) => {
  return (
    <StoryContainer
      title={args.storyName}
      style={"w-12/12"}
      component={<MenuSectionTitle {...args} />}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  storyName: "Default",
}
