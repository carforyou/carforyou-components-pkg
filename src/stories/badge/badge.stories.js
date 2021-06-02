import React from "react"
import { storiesOf } from "@storybook/react"
import { wInfo } from "../utils"

import BuyNowBadge from "../../src/components/badges/buyNow"
import GdbdBadge from "../../src/components/badges/gdbd"
import MbgBadge from "../../src/components/badges/mbg"

storiesOf("Badge", module)
  .add(
    "BuyNow Badge",
    wInfo(`
    Description
    ~~~~
    <BuyNowBadge hasText />
    ~~~
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Example</div>
        <div className="w-3/12">
          <BuyNowBadge language="en" hasText />
        </div>
      </div>
    ))
  )
  .add(
    "Gdbd Badge",
    wInfo(`
      Description
      ~~~~
      <GdbdBadge score="great-deal" />
      ~~~
      `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Example</div>
        <div className="w-3/12">
          <GdbdBadge language="en" score={"great-deal"} />
        </div>
      </div>
    ))
  )
  .add(
    "Mbg Badge",
    wInfo(`
      Description
      ~~~~
      <MbgBadge />
      ~~~
      `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Example</div>
        <div className="w-3/12">
          <MbgBadge language="en" />
        </div>
      </div>
    ))
  )
