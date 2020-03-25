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
    <AlertMessage type="error">Error Message</AlertMessage>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Example</div>
        <div className="w-12/12">
          <AlertMessage type={select("State alert", options, deafultValue)} fullWidth={boolean("Full width", false)}>
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
    <AlertMessage type="error">Error Message</AlertMessage>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Example</div>
        <div className="w-12/12">
          <AlertMessage type="error">
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
    <AlertMessage type="warning">Warning Message</AlertMessage>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Example</div>
        <div className="w-12/12">
          <AlertMessage type="warning">
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
    <AlertMessage type="information">Information Message</AlertMessage>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Example</div>
        <div className="w-12/12">
          <AlertMessage type="information">
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
    <AlertMessage type="error" icon={() => <MailSent fill="#F73B47"/>>
      Error Message
    </AlertMessage>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Example</div>
        <div className="w-12/12">
          <AlertMessage type="error" icon={() => <MailSent fill="#F73B47"/>}>
            <span className="pl-16">
              Write here some text describing the message that you want to convey to the user, in case he takes the time to read it.
            </span>
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
      type="warning"
      icon={() => <MailSent fill="#E1CD79" />
    >
      Warning Message
    </AlertMessage>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Example</div>
        <div className="w-12/12">
          <AlertMessage type="warning" icon={() => <MailSent fill="#fcb001" />}>
            <span className="pl-16">
              Write here some text describing the message that you want to convey to the user, in case he takes the time to read it.
            </span>  
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
      type="information"
      icon={() => <MailSent fill="#3696B9" />
    >
      Information Message
    </AlertMessage>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Example</div>
        <div className="w-12/12">
          <AlertMessage type="information" icon={() => <MailSent fill="#3696B9" />}>
            <span className="pl-16">
              Write here some text describing the message that you want to convey to the user, in case he takes the time to read it.
            </span>  
          </AlertMessage>
        </div>  
      </div>  
    ))
  )

