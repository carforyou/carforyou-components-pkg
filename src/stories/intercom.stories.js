import React from "react"
import Intercom from "../components/intercom/index"

export default {
  title: "Intercom",
  component: Intercom,
  args: {
    storyName: "Example",
  },
  argTypes: {
    buttonName: {
      table: {
        disable: true,
      },
    },
  },
}

const Template = (args) => {
  return (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">{args.storyName}</div>
      <div className="w-12/12 md:w-3/12">
        <Intercom
          {...args}
          label={("label", "Support")}
          appId={
            ("appId (you need am actual app id to be able to load intercom)",
            "123")
          }
          stage={("stage", "dev")}
          autoload={("autoload", false)}
        />
      </div>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  storyName: "Example",
  userInfo: { user_id: "123" },
}
