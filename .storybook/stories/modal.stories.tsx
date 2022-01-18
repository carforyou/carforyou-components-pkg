import React, { FC } from "react"

import classNames from "classnames"

import { action } from "@storybook/addon-actions"

import StoryContainer from "./storyContainer"
import useModal from "../../src/hooks/useModal"
import Button from "../../src/components/button"

export default {
  title: "Modal",
  component: useModal,
  args: {
    storyName: "Modal",
    alwaysRender: false,
    container: null,
  },
}

function ModalDemo(args) {
  const { size, alwaysRender, container, style, onClose, title } = args
  const { openModal, renderModal } = useModal(
    () => (
      <div className={classNames({ "p-40": args.size === "fullscreen" })}>
        <p className="mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br /> Vestibulum urna augue, consectetur at sapien eu, facilisis
          gravida justo. In euismod velit dui, at porta purus semper nec.
          Quisque lectus libero, pharetra sit amet suscipit placerat, auctor sed
          mauris. Integer imperdiet odio aliquam dolor scelerisque, quis ornare
          massa ultricies. Sed accumsan magna eget nisi laoreet cursus. Aenean
          ut egestas leo, id consectetur neque. Phasellus vel est orci. Nulla
          sed felis et tortor consequat gravida ut id ipsum. Quisque blandit
          sollicitudin ipsum, a condimentum eros varius a.
        </p>
        <p>
          Nam elementum sit amet velit ut euismod. Mauris imperdiet odio mauris,
          ac posuere augue malesuada id. Sed at lectus faucibus, vestibulum quam
          hendrerit, vulputate nibh. Maecenas ut leo id leo tincidunt egestas id
          eget sapien. Morbi quis pharetra mauris. Pellentesque pharetra ante at
          laoreet convallis. Aliquam pharetra at ipsum quis vulputate. In
          convallis eros tellus, ut rhoncus urna euismod ut.
        </p>
      </div>
    ),
    { size, alwaysRender, container, style, onClose, title }
  )

  return (
    <>
      <Button onClick={openModal}>Click to open modal</Button>
      {renderModal()}
    </>
  )
}

interface Props {
  storyName: string
  label: string
  size?: "small" | "medium" | "large" | "fullscreen"
  style?: "white" | "dark"
  onClose: () => void
  title?: string
}

const Template: FC<Props> = (args) => {
  return (
    <StoryContainer
      title={args.storyName}
      component={<ModalDemo {...args}>{args.label}</ModalDemo>}
    />
  )
}

export const Small = Template.bind({})
Small.args = {
  storyName: "Small",
  size: "small",
  style: "white",
  onClose: null,
}

export const SmallWithClose = Template.bind({})
SmallWithClose.args = {
  storyName: "Small with onClose event",
  size: "small",
  style: "white",
  onClose: action("onClose callback called"),
}

export const SmallWithTitle = Template.bind({})
SmallWithTitle.args = {
  storyName: "Small with title",
  size: "small",
  style: "white",
  onClose: null,
  title: "How does the price check work?",
}

export const Medium = Template.bind({})
Medium.args = {
  storyName: "Medium",
  size: "medium",
  style: "white",
  onClose: null,
}

export const Large = Template.bind({})
Large.args = {
  storyName: "Large",
  size: "large",
  style: "white",
  onClose: null,
}

export const Fullscreen = Template.bind({})
Fullscreen.args = {
  storyName: "Fullscreen",
  size: "fullscreen",
  style: "white",
  onClose: null,
}

export const DarkFullscreen = Template.bind({})
DarkFullscreen.args = {
  storyName: "Dark fullscreen",
  size: "fullscreen",
  style: "dark",
  onClose: null,
}
