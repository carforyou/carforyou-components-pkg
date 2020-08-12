import React from "react"
import { storiesOf } from "@storybook/react"
import { wInfo } from "../utils"

import FixedCard from "../../src/components/card/fixed"

storiesOf("Card", module).add(
  "Fixed Card",
  wInfo(`
    Description
    ~~~~
    <FixedCard />
    ~~~
    `)(() => (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">Example</div>
      <div className="w-3/12">
        <FixedCard renderImage={() => <img src="/dummyImage.jpeg" />}>
          <span className="pl-16 py-15">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </span>
        </FixedCard>
      </div>
    </div>
  ))
)
