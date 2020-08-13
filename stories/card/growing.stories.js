import React from "react"
import { storiesOf } from "@storybook/react"
import { wInfo } from "../utils"

import GrowingCard from "../../src/components/card/growing"

storiesOf("Card", module).add(
  "Growing Card",
  wInfo(`
    Description
    ~~~~
    <GrowingCard />
    ~~~
    `)(() => (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">Example</div>
      <div className="w-6/12">
        <GrowingCard
          renderImage={() => (
            <div className="w-12/12 md:w-5/12 relative flex flex-col ">
              <div className="w-12/12 bg-grey-1 md:rounded-l-10 overflow-hidden z-0 h-full w-auto block flex-none">
                <img src="/dummyImage.jpeg" />{" "}
              </div>
            </div>
          )}
        >
          <div className="pl-16 py-15 w-12/12 md:w-7/12 px-16 opacity-100 hover:opacity-100 mt-5 flex-col flex justify-between">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </GrowingCard>
      </div>
    </div>
  ))
)
