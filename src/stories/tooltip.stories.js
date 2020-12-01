import React from "react"
import Tooltip from "../components/tooltip/index"
import { TooltipPosition, TooltipAlignment } from "../components/tooltip/index"

export default {
  title: "Tooltip",
  component: Tooltip,
  args: {
    storyName: "Default",
  },
  argTypes: {
    buttonName: {
      table: {
        disable: true,
      },
    },
  },
}

const Template = ({ args }) => {
  return (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">Example</div>
      <div className="w-12/12 flex justify-center">
        <Tooltip
          {...args}
          renderContent={() => (
            <p className="w-modalSmall">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum urna augue, consectetur at sapien eu, facilisis
              gravida.
            </p>
          )}
        >
          <span>I have a tooltip</span>
        </Tooltip>
      </div>
    </div>
  )
}

Object.values(TooltipPosition).reduce(
  (accPosition, position) =>
    Object.values(TooltipAlignment).reduce(
      (accAlignment, alignment) =>
        accAlignment.add(
          `On the ${position} aligned to ${alignment}`,
          Template.bind({})
        ),
      accPosition
    ),
  stories(position, alignment)
)
