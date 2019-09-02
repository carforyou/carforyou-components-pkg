import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import Button from "../src/components/button"

const containerButtons = "flex justify-center items-center rounded border border-grey-2 w-7/12 bg-grey-bright p-10"

const description = (title, description) => {
  return(
    <div className="w-5/12 pr-10">
      <span className="text-lg font-bold">{title}</span>
      <div className="font-regular text-base">{description}</div>
    </div>
  )
}

storiesOf("Buttons", module)
  .add("Button Variations", () => (
    <div className="m-40">
      <div className="text-2xl mb-40">Examples</div>
      <div className="flex mb-40">
        {description("Size", "Button supports 3 sizes – large with w-12/12 h-56, medium with w-200 h-50 and small with w-145 h-50.")}
        <div className={containerButtons}>
          <div className="w-4/12 pr-10">
            <Button large>large</Button>
          </div>
          <div className="w-3/12 pr-10">
            <Button>medium</Button>
          </div>
          <div className="w-2/12">
            <Button>small</Button>
          </div>
        </div>
      </div>
      <div className="flex">
        {description("Color", "Button supports 2 colors – salmon and teal.")}
        <div className={containerButtons}>
          <div className="w-4/12 pr-40">
            <Button>salmon</Button>
          </div>
          <div className="w-4/12">
            <Button teal>teal</Button>
          </div>
        </div> 
      </div>
      <div className="flex mt-40">
        {description("State", "Button can be disabled when there are not results in the searching.")}
        <div className={containerButtons}>
          <div className="w-6/12">
            <Button disabled>disabled</Button>
          </div>
        </div> 
      </div>
      <div className="flex mt-40">
        {description("On Click", "Action Button")}
        <div className={containerButtons}>
          <div className="w-4/12 pr-40">
            <Button onClick={action("on Click")}>click</Button>
          </div>
          <div className="w-4/12">
            <Button>
              <a href="#">click</a>
            </Button>
          </div>
        </div> 
      </div>
    </div>
  ))

  .add("Text Variations", () => (
    <div className="m-40">
      <div className="text-2xl mb-40">Examples</div>
      <div className="flex mb-40">
        {description("Size", "TextButton supports 2 sizes - small and base.")}
        <div className={containerButtons}>
            <div className="pr-40 w-4/12">
              <Button smallText>small</Button>
            </div>
            <div className="w-4/12">
              <Button>base</Button>
            </div>
        </div>
      </div>
      <div className="flex mb-40">
        {description("Weight", "TextButton supports 2 text weights - bold and regular.")}
        <div className={containerButtons}>
          <div className="flex">
            <div className="pr-40">
              <Button>bold</Button>
            </div>  
            <Button fontRegular>regular</Button>
          </div>
        </div>
      </div>
    </div>
  ))
