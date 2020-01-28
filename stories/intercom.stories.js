import React from "react"
import { storiesOf } from "@storybook/react"
import { text, boolean } from "@storybook/addon-knobs"

import { wInfo } from "./utils"

import Intercom from "../src/components/intercom"

storiesOf("Intercom", module)
  .add(
    "Default",
    wInfo(`
    Description
    ~~~
    <Intercom appId="123" stage="dev" autoload={false} userInfo={{ user_id: "123" }}/>
    `)(() => (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">Example</div>
      <div className="w-12/12 md:w-3/12">
        <Intercom
          appId={text("appId (you need am actual app id to be able to load intercom)", "123")}
          stage={text("stage", "dev")}
          autoload={boolean("autoload", false)} />
      </div>
    </div>
    ))
  )
