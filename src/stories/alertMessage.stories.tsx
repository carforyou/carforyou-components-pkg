import React, { FC, ReactNode } from "react"

import StoryContainer from "./storyContainer"
import AlertMessage from "../components/alertMessage"
import MailSent from "../../.storybook/icons/mailSent"

export default {
  title: "AlertMessage",
  component: AlertMessage,
  args: {
    storyName: "",
    text:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    type: "information",
    fullWidth: false,
    alignCenter: false,
  },
  argTypes: {
    storyName: {
      table: {
        disable: true,
      },
    },
  },
}

interface Props {
  storyName: string
  text: string
  children: ReactNode
  icon?: () => ReactNode
  fullWidth?: boolean
  type: "error" | "warning" | "information" | "success"
  alignCenter?: boolean
}

const Template: FC<Props> = (args) => {
  return (
    <StoryContainer
      title={args.storyName}
      style={"w-12/12"}
      component={
        <AlertMessage {...args}>
          <span className="py-10">{args.text}</span>
        </AlertMessage>
      }
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  storyName: "Default",
  type: "error",
}

export const Warning = Template.bind({})
Warning.args = {
  storyName: "Warning",
  type: "warning",
}

export const Errors = Template.bind({})
Errors.args = {
  storyName: "Error",
  type: "error",
}

export const Information = Template.bind({})
Information.args = {
  storyName: "Information",
  type: "information",
}

export const Success = Template.bind({})
Success.args = {
  storyName: "Success",
  type: "success",
}

export const ErrorWithIcon = Template.bind({})
ErrorWithIcon.args = {
  storyName: "Error with Icon",
  type: "error",
  icon: () => <MailSent className="text-salmon fill-current" />,
}

export const WarningWithIcon = Template.bind({})
WarningWithIcon.args = {
  storyName: "Warning with Icon",
  type: "warnings",
  icon: () => <MailSent className="text-yellow fill-current" />,
}

export const InformationWithIcon = Template.bind({})
InformationWithIcon.args = {
  storyName: "Information with Icon",
  type: "information",
  icon: () => <MailSent className="text-teal fill-current" />,
}

export const SuccessWithIcon = Template.bind({})
SuccessWithIcon.args = {
  storyName: "Success with Icon",
  type: "success",
  icon: () => <MailSent fill="#74CC74" />,
}

export const SuccessWithIconCentered = Template.bind({})
SuccessWithIconCentered.args = {
  storyName: "Success with Icon centered",
  type: "success",
  icon: () => <MailSent fill="#74CC74" />,
  alignCenter: true,
}
