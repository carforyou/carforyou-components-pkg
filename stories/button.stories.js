import React from "react"
import { storiesOf } from "@storybook/react"
import {wInfo} from "./utils"
import { action } from "@storybook/addon-actions"

import Button from "../src/components/button"
import Description from "../.storybook/components/description"

storiesOf("Buttons", module)
  .add("Button Variations",
  wInfo(`
    description
    ~~~
    <Button></Button>
    `,
    )(() => (
    <div className="m-40">
      <div className="text-2xl mb-40">Examples</div>
      <div className="flex mb-40">
        <Description 
          title="Size"
          description="Button supports 2 sizes – large with h-52 and small with h-36."
          children={
            <>
              <div className="w-4/12 pr-40">
                <Button>large</Button>
              </div>
              <div className="w-4/12">
                <Button small>small</Button>
              </div>
            </>
          }
        />
      </div>
      <div className="flex">
        <Description
          title="Color"
          description="Button supports 2 colors – salmon and teal."
          children={
            <>
              <div className="w-4/12 pr-40">
                <Button>salmon</Button>
              </div>
              <div className="w-4/12">
                <Button teal>teal</Button>
              </div>
            </>
          }
        />
      </div>
      <div className="flex mt-40">
        <Description
          title="State"
          description="Button can be disabled when there are not results in the searching."
          children={
            <div className="w-6/12">
              <Button disabled>disabled</Button>
            </div>
          }
        />
      </div>
      <div className="flex mt-40">
        <Description
          title="On Click"
          description="Action Button"
          children={
            <>
              <div className="w-4/12 pr-40">
                <Button onClick={action("on Click")}>click</Button>
              </div>
              <div className="w-4/12">
                <Button>
                  <a href="#">click</a>
                </Button>
              </div>
            </>
          }
        />
      </div>
    </div>
)))
