import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import Button from "../.storybook/components/button"

const containerButtons = "flex justify-center items-center rounded border border-grey-2 w-7/12 bg-grey-bright p-10"

function Description(props) {
  return(
    <div className="w-5/12 pr-10">
       <span className="text-lg font-bold">{props.title}</span>
       <div className="font-regular text-base">{props.description}</div>
     </div>
  )
}

storiesOf("Buttons", module)
  .add("Button Variations", () => (
    <div className="m-40">
      <div className="text-2xl mb-40">Examples</div>
      <div className="flex mb-40">
        <Description 
          title="Size"
          description="Button supports 2 sizes – large with h-52 and small with h-36."
        />
        <div className={containerButtons}>
          <div className="w-4/12 pr-10">
            <Button>large</Button>
          </div>
          <div className="w-4/12">
            <Button small>small</Button>
          </div>
        </div>
      </div>
      <div className="flex">
        <Description
          title="Color"
          description="Button supports 2 colors – salmon and teal."
        />
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
        <Description
          title="State"
          description="Button can be disabled when there are not results in the searching."
        />
        <div className={containerButtons}>
          <div className="w-6/12">
            <Button disabled>disabled</Button>
          </div>
        </div> 
      </div>
      <div className="flex mt-40">
        <Description
          title="On Click"
          description="Action Button"
        />
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
