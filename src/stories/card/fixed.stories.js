import React from "react"
import FixedCard from "../../components/card/fixed"

export default {
  title: "Card",
  component: FixedCard,
  args: {
    storyName: "Fixed Card",
  },
}

const Template = (args) => {
  return (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">{args.storyName}</div>
      <div className="w-12/12 md:w-3/12">
        <FixedCard {...args}>{args.children}</FixedCard>
      </div>
    </div>
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
