import React from "react"
import Button from "../components/button"
import { action } from "@storybook/addon-actions"
import { text, boolean } from "@storybook/addon-knobs"

export default {
  title: "Button",
  component: Button,
}

export const Primary = () => (
  <div className="mx-30 mb-40">
    <div className="text-2xl mb-20">Example</div>
    <div className="w-12/12 md:w-3/12">
      <Button
        teal={boolean("Teal", false)}
        disabled={boolean("Disabled", false)}
        tealBorder={boolean("Teal Border", false)}
        onClick={action("on Click")}
      >
        {text("Label", "Storybook")}
      </Button>
    </div>
  </div>
)
