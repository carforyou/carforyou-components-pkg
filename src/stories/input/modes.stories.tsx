import React, { FC } from "react"

import StoryContainer from "../storyContainer"
import Input from "../../components/input/index"

export default {
  title: "Input/Mode",
  component: Input,
  args: {
    storyName: "Input / Mode",
    value: "",
  },
}

interface Props {
  storyName: string
  label: string
  name: string
  value: string
  mode: "text" | "numeric" | "decimal" | "tel" | "email"
  onChange: <T extends { target: { name: string; value: string | number } }>(
    e: T
  ) => void
}

const Template: FC<Props> = ({ ...args} : Props) => {
  return (
    <StoryContainer
      title={args.storyName}
      component={<Input {...args}>{args.label}</Input>}
    />
  )
}

export const Text = Template.bind({})
Text.args = {
  storyName: "Text",
  mode: "text",
}

export const Numeric = Template.bind({})
Numeric.args = {
  storyName: "Numeric",
  mode: "numeric",
}

export const Decimal = Template.bind({})
Decimal.args = {
  storyName: "Decimal",
  mode: "decimal",
}
