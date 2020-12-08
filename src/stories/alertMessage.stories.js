import React from "react"
import AlertMessage from "../components/alertMessage"
import MailSent from "../../.storybook/icons/mailSent"

export default {
  title: "AlertMessage",
  component: AlertMessage,
  args: {
    text:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    type: "information",
    fullWidth: false,
    alignCenter: false,
  },
}

const Template = (args) => {
  return (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">{args.alertName}</div>
      <div className="w-12/12">
        <AlertMessage {...args}>
          <span className="py-10">{args.text}</span>
        </AlertMessage>
      </div>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  alertName: "Default",
  type: "error",
}

export const Warning = Template.bind({})
Warning.args = {
  alertName: "Warning",
  type: "warning",
}

export const Errors = Template.bind({})
Errors.args = {
  alertName: "Error",
  type: "error",
}

export const Information = Template.bind({})
Information.args = {
  alertName: "Information",
  type: "information",
}

export const Success = Template.bind({})
Success.args = {
  alertName: "Success",
  type: "success",
}

export const ErrorWithIcon = Template.bind({})
ErrorWithIcon.args = {
  alertName: "Error with Icon",
  type: "error",
  icon: () => <MailSent fill="#F73B47" />,
}

export const WarningWithIcon = Template.bind({})
WarningWithIcon.args = {
  alertName: "Warning with Icon",
  type: "warnings",
  icon: () => <MailSent fill="#fcb001" />,
}

export const InformationWithIcon = Template.bind({})
InformationWithIcon.args = {
  alertName: "Information with Icon",
  type: "information",
  icon: () => <MailSent fill="#3696B9" />,
}

export const SuccessWithIcon = Template.bind({})
SuccessWithIcon.args = {
  alertName: "Success with Icon",
  type: "success",
  icon: () => <MailSent fill="#74CC74" />,
}

export const SuccessWithIconCentered = Template.bind({})
SuccessWithIconCentered.args = {
  alertName: "Success with Icon centered",
  type: "success",
  icon: () => <MailSent fill="#74CC74" />,
  alignCenter: true,
}
