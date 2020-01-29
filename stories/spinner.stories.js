import React from "react"
import { storiesOf } from "@storybook/react"
import { text } from "@storybook/addon-knobs"

import { wInfo } from "./utils"

import Spinner from "../src/components/spinner"

storiesOf("Spinner", module)
  .add(
    "Default",
    wInfo(`
    Description
    ~~~
    <Spinner />
    `)(() => (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">Example</div>
      <div className="w-12/12 md:w-3/12">
        <Spinner className={text("className", "")} />
      </div>
    </div>
    ))
  )
