import React, { FC } from "react"

import Tooltip, { TooltipProps } from "../../src/components/tooltip/index"

export default {
  title: "Tooltip",
  component: Tooltip,
  args: {
    renderContent: () => (
      <p className="w-modalSmall">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum urna
        augue, consectetur at sapien eu, facilisis gravida.
      </p>
    ),
  },
  argTypes: {
    preferredPosition: {
      control: { type: "select", options: ["up", "down", "left", "right"] },
    },
    alignment: {
      control: { type: "select", options: ["start", "middle", "end"] },
    },
  },
}

const Template: FC<TooltipProps> = (args) => {
  return (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">Example</div>
      <div className="text-l">
        You can play around with the position and alignment of the tooltip
        within the Control pannel below.
      </div>
      <div className="w-12/12 flex justify-center pt-40">
        <Tooltip {...args}>
          <span>I have a tooltip</span>
        </Tooltip>
      </div>
    </div>
  )
}

export const OnTheUpAlignedToStart = Template.bind({})
OnTheUpAlignedToStart.args = {
  preferredPosition: "up",
  alignment: "start",
}
