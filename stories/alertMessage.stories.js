import React from "react"
import { storiesOf } from "@storybook/react"
import { text, boolean, select } from "@storybook/addon-knobs"

import MailSent from "../.storybook/icons/mailSent"

import { wInfo } from "./utils"
import AlertMessage from "../src/components/alertMessage"

const options = ["error", "warning", "information", "success"]
const deafultValue = "error"

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
          <AlertMessage
            type={select("State alert", options, deafultValue)}
            fullWidth={boolean("Full width", false)}
            alignCenter={boolean("Align Center", false)}
          >
            {text(
              "Label",
              <div className="py-10">
                Write here some text describing the message that you want to
                convey to the user, in case he takes the time to read it.
              </div>
            )}
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
            <span className="py-10">
              Write here some text describing the message that you want to
              convey to the user, in case he takes the time to read it.
            </span>
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
            <span className="py-10">
              Write here some text describing the message that you want to
              convey to the user, in case he takes the time to read it.
            </span>
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
            <span className="py-10">
              Write here some text describing the message that you want to
              convey to the user, in case he takes the time to read it.
            </span>
          </AlertMessage>
        </div>
      </div>
    ))
  )
  .add(
    "Success",
    wInfo(`
    Description
    ~~~~
    <AlertMessage type="success">Success Message</AlertMessage>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Example</div>
        <div className="w-12/12">
          <AlertMessage type="success">
            <span className="py-10">
              Write here some text describing the message that you want to
              convey to the user, in case he takes the time to read it.
            </span>
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
          <AlertMessage type="error" icon={() => <MailSent fill="#F73B47" />}>
            <span className="pl-16 py-15">
              Write here some text describing the message that you want to
              convey to the user, in case he takes the time to read it.
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
            <span className="pl-16 py-15">
              Write here some text describing the message that you want to
              convey to the user, in case he takes the time to read it.
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
          <AlertMessage
            type="information"
            icon={() => <MailSent fill="#3696B9" />}
          >
            <span className="pl-16 py-15">
              Write here some text describing the message that you want to
              convey to the user, in case he takes the time to read it.
            </span>
          </AlertMessage>
        </div>
      </div>
    ))
  )
  .add(
    "Success with Icon",
    wInfo(`
    Description
    ~~~~
    <AlertMessage
      type="success"
      icon={() => <MailSent fill="#3696B9" />
    >
      Success Message
    </AlertMessage>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Example</div>
        <div className="w-12/12">
          <AlertMessage type="success" icon={() => <MailSent fill="#74CC74" />}>
            <span className="pl-16 py-15">
              Write here some text describing the message.
            </span>
          </AlertMessage>
        </div>
      </div>
    ))
  )
  .add(
    "Success with Icon centered",
    wInfo(`
    Description
    ~~~~
    <AlertMessage
      type="success"
      alignCenter
      icon={() => <MailSent fill="#3696B9" />
    >
      Success Message
    </AlertMessage>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Example</div>
        <div className="w-12/12">
          <AlertMessage
            type="success"
            icon={() => <MailSent fill="#74CC74" />}
            alignCenter
          >
            <span className="pl-16 py-15">
              Write here some text describing the message.
            </span>
          </AlertMessage>
        </div>
      </div>
    ))
  )
