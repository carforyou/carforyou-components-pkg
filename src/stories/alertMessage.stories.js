import React from "react"
import AlertMessage from "../components/alertMessage"

export default {
  title: "AlertMessage",
  component: AlertMessage,
  args: {
    text:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    type: "information",
  },
}

const Template = (args) => {
  return (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">{args.alertName}</div>
      <div className="w-12/12 md:w-3/12">
        <AlertMessage
          type={args.type}
          alignCenter={args.alignCenter}
          fullWidth={args.fullWidth}
          icon={args.icon}
        >
          {args.text}
        </AlertMessage>
      </div>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  alertName: "Default / Information",
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

export const Centered = Template.bind({})
Centered.args = {
  alertName: "Centered",
  alignCenter: true,
  fullWidth: true,
}

export const FullWidth = Template.bind({})
FullWidth.args = {
  alertName: "Full width",
  alignCenter: false,
  fullWidth: true,
}
