import React, { FC, useContext } from "react"

import { StoryProps } from "./storyProps"
import StoryContainer from "./storyContainer"
import FlashMessage from "../../src/components/flashMessage/message"
import {
  FlashMessagesContext,
  FlashMessagesProvider,
} from "../../src/components/flashMessage/context"
import FlashMessages from "../../src/components/flashMessage"
import Button from "../../src/components/button"
import UmbrellaIcon from "../../src/assets/dist/umbrella"

export default {
  title: "FlashMessage",
  component: FlashMessage,
  args: {
    storyName: "Flash Messages",
    autoCloseDelay: 0,
  },
  argTypes: {
    storyName: {
      table: {
        disable: true,
      },
    },
  },
}

interface Props extends StoryProps<number> {
  /**
   * If present the flash message is closed after the specified delay (ms) has passed
   */
  autoCloseDelay: number
}

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const dummyText =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "

const AddButton = ({
  type,
  autoCloseDelay,
  options = { short: false, icon: false },
}) => {
  const { short, icon } = options
  const { addMessage } = useContext(FlashMessagesContext)
  const renderIcon = icon
    ? () => (
        <div className="ml-20 mr-10">
          <UmbrellaIcon width="50" height="50" />
        </div>
      )
    : null

  const add = () =>
    addMessage({
      type,
      content: short ? "Yo!" : dummyText,
      autoCloseDelay,
      renderIcon,
    })
  return (
    <Button onClick={add}>
      {short ? "Short" : capitalize(type)} Message {icon ? "with Icon" : null}
    </Button>
  )
}

const Template: FC<Props> = (args) => {
  return (
    <StoryContainer
      title={args.storyName}
      style={"w-12/12"}
      component={
        <FlashMessagesProvider>
          <div className="md:flex w-12/12 mb-20">
            <div className="md:w-2/12 md:mr-20">
              <AddButton type="success" autoCloseDelay={args.autoCloseDelay} />
            </div>
            <br />
            <div className="md:w-2/12 md:mr-20">
              <AddButton
                type="information"
                autoCloseDelay={args.autoCloseDelay}
              />
            </div>
            <div className="md:w-2/12 md:mr-20">
              <AddButton
                type="information"
                autoCloseDelay={args.autoCloseDelay}
                options={{ short: true, icon: false }}
              />
            </div>
            <br />
            <div className="md:w-2/12 md:mr-20">
              <AddButton
                type="information"
                autoCloseDelay={args.autoCloseDelay}
                options={{ short: false, icon: true }}
              />
            </div>
            <br />
            <div className="md:w-2/12 md:mr-20">
              <AddButton type="warning" autoCloseDelay={args.autoCloseDelay} />
            </div>
            <br />
            <div className="md:w-2/12 md:mr-20">
              <AddButton type="error" autoCloseDelay={args.autoCloseDelay} />
            </div>
          </div>
          <FlashMessages />
          <p>{dummyText}</p>
          <br />
          <p>{dummyText}</p>
          <br />
          <p>{dummyText}</p>
          <br />
          <p>{dummyText}</p>
          <br />
          <p>{dummyText}</p>
          <br />
          <p>{dummyText}</p>
          <br />
        </FlashMessagesProvider>
      }
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  storyName: "Default",
  type: "error",
}
