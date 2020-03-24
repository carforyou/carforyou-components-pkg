import React from "react"
import { storiesOf } from "@storybook/react"
import { text, boolean } from "@storybook/addon-knobs"

import MailSent from "../.storybook/icons/mailSent"

import { wInfo } from "./utils"
import AlertMessage from "../src/components/alertMessage"

storiesOf("Alert Message", module)
  .add(
    "Default - Error",
    wInfo(`
    Description
    ~~~~
    <AlertMessage>Error Message</AlertMessage>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Example</div>
        <div className="w-12/12 md:w-3/12">
          <AlertMessage
            warning={boolean("warning", false)}
            information={boolean("information", false)}
            parallelBorder={boolean("Parallel Border", false)}
          >
            {text("Label", "Write here some text describing the message that you want to convey to the user, in case he takes the time to read it.")}
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
    <AlertMessage warning>Warning Message</AlertMessage>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Example</div>
        <div className="w-12/12 md:w-3/12">
          <AlertMessage warning>
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
    <AlertMessage information>Information Message</AlertMessage>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Example</div>
        <div className="w-12/12 md:w-3/12">
          <AlertMessage information>
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
    <AlertMessage icon={() => <MailSent fill="#F73B47"/>>
      Error Message
    </AlertMessage>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Example</div>
        <div className="w-12/12 md:w-6/12">
          <AlertMessage icon={() => <MailSent fill="#F73B47"/>}>
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
      warning
      icon={() => <MailSent fill="#E1CD79" />
    >
      Warning Message
    </AlertMessage>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Example</div>
        <div className="w-12/12 md:w-6/12">
          <AlertMessage warning icon={() => <MailSent fill="#fcb001" />}>
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
      information
      icon={() => <MailSent fill="#3696B9" />
    >
      Information Message
    </AlertMessage>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Example</div>
        <div className="w-12/12 md:w-6/12">
          <AlertMessage information icon={() => <MailSent fill="#3696B9" />}>
            Write here some text describing the message that you want to convey to the user, in case he takes the time to read it.
          </AlertMessage>
        </div>  
      </div>  
    ))
  )

