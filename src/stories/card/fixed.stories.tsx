import React, { FC } from "react"

import { StoryProps } from "../storyProps"
import StoryContainer from "../storyContainer"
import FixedCard, { FixedCardProps } from "../../components/card/fixed"

export default {
  title: "Card",
  component: FixedCard,
  args: {
    storyName: "Fixed Card",
  },
}

interface Props extends StoryProps<unknown>, FixedCardProps {}

const Template: FC<Props> = (args) => {
  return (
    <StoryContainer
      title={args.storyName}
      component={<FixedCard {...args}>{args.children}</FixedCard>}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  renderImage: () => <img src="/dummyImage.jpeg" />,
  storyName: "Fixed Card",
  children: (
    <span className="pl-16 py-15">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry s standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged.
    </span>
  ),
}
