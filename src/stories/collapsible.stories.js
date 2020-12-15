import React from "react"
import StoryContainer from "./storyContainer"
import Collapsible from "../components/collapsible"
import { action } from "@storybook/addon-actions"

export default {
  title: "Collapsible",
  component: Collapsible,
  args: {
    isInitiallyCollapsed: true,
    renderToggle: (options) => options,
    onCollapseStateChange: (isCollapsed) => isCollapsed,
    collapseIconSize: 32,
    opacityOnHover: true,
  },
}

const Template = (args) => {
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
  renderToggle: (options) => (
    <div className="font-bold">
      {options.isCollapsed ? "Show more" : "Show less"}
    </div>
  ),
  onCollapseStateChange: action("Collapse state is now"),
  collapseIconSize: 24,
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
