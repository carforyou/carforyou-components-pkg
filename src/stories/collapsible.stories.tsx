import React, { FC } from "react"

import { action } from "@storybook/addon-actions"

import StoryContainer from "./storyContainer"
import Collapsible, { CollapsibleProps } from "../components/collapsible"

export default {
  title: "Collapsible",
  component: Collapsible,
  args: {
    isInitiallyCollapsed: true,
    renderToggle: (isCollapsed) => isCollapsed,
    onChange: (isCollapsed) => isCollapsed,
    opacityOnHover: true,
  },
}

interface Props extends CollapsibleProps {
  storyName: string
}

const Template: FC<Props> = (args) => {
  return (
    <StoryContainer
      title={args.storyName}
      style={"w-12/12 md:w-6/12"}
      component={<Collapsible {...args}>{args.children}</Collapsible>}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  isInitiallyCollapsed: true,
  renderToggle: (isCollapsed) => (
    <div className="font-bold">{isCollapsed ? "Show more" : "Show less"}</div>
  ),
  onChange: action("Collapse state is now"),
  opacityOnHover: true,
  children: () => (
    <div>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua
    </div>
  ),
}
