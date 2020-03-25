import React from "react"
import { storiesOf } from "@storybook/react"
import { text, boolean, select } from "@storybook/addon-knobs"

import MailSent from "../.storybook/icons/mailSent"

import { wInfo } from "./utils"
import AlertMessage from "../src/components/alertMessage"

const options = ["error", "warning", "information"]
const deafultValue= "error"

storiesOf("Alert Message", module)
  .add(
    "Default",
    wInfo(`
    Description
    ~~~~
    <AlertMessage state={"error"}>Error Message</AlertMessage>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Example</div>
        <div className="w-12/12 md:w-3/12">
          <AlertMessage state={select("State alert", options, deafultValue)} parallelBorder={boolean("Parallel Border", false)}>
            {text("Label", "Write here some text describing the message that you want to convey to the user, in case he takes the time to read it.")}
          </AlertMessage>
        </div>  
      </div>  
    ))
  )
  .add(
    "Error",
    wInfo(`
    Description
    ~~~~
    <AlertMessage state={"error"}>Error Message</AlertMessage>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Example</div>
        <div className="w-12/12 md:w-3/12">
          <AlertMessage state={"error"}>
            Write here some text describing the message that you want to convey to the user, in case he takes the time to read it.
          </AlertMessage>
        </div>  
      </div>  
    ))
  )
  .add(
    "Warning",
    wInfo(`
    Description
    ~~~~
    <AlertMessage state={"warning"}>Warning Message</AlertMessage>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Example</div>
        <div className="w-12/12 md:w-3/12">
          <AlertMessage state={"warning"}>
            Write here some text describing the message that you want to convey to the user, in case he takes the time to read it.
          </AlertMessage>
        </div>  
      </div>  
    ))
  )
  .add(
    "Information",
    wInfo(`
    Description
    ~~~~
    <AlertMessage state={"information"}>Information Message</AlertMessage>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Example</div>
        <div className="w-12/12 md:w-3/12">
          <AlertMessage state={"information"}>
            Write here some text describing the message that you want to convey to the user, in case he takes the time to read it.
          </AlertMessage>
        </div>  
      </div>  
    ))
  )
  .add(
    "Error with Icon",
    wInfo(`
    Description
    ~~~~
    <AlertMessage state={"error"} icon={() => <MailSent fill="#F73B47"/>>
      Error Message
    </AlertMessage>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Example</div>
        <div className="w-12/12 md:w-6/12">
          <AlertMessage state={"error"} icon={() => <MailSent fill="#F73B47"/>}>
            Write here some text describing the message that you want to convey to the user, in case he takes the time to read it.
          </AlertMessage>
        </div>  
      </div>  
    ))
  )
  .add(
    "Warning with Icon",
    wInfo(`
    Description
    ~~~~
    <AlertMessage
      state={"warning"}
      icon={() => <MailSent fill="#E1CD79" />
    >
      Warning Message
    </AlertMessage>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Example</div>
        <div className="w-12/12 md:w-6/12">
          <AlertMessage state={"warning"} icon={() => <MailSent fill="#fcb001" />}>
            Write here some text describing the message that you want to convey to the user, in case he takes the time to read it.
          </AlertMessage>
        </div>  
      </div>  
    ))
  )
  .add(
    "Information with Icon",
    wInfo(`
    Description
    ~~~~
    <AlertMessage
      state={"information"}
      icon={() => <MailSent fill="#3696B9" />
    >
      Information Message
    </AlertMessage>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Example</div>
        <div className="w-12/12 md:w-6/12">
          <AlertMessage state={"information"} icon={() => <MailSent fill="#3696B9" />}>
            Write here some text describing the message that you want to convey to the user, in case he takes the time to read it.
          </AlertMessage>
        </div>  
      </div>  
    ))
  )

