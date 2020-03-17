import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { text } from "@storybook/addon-knobs"

import { wInfo } from "../utils"
import InputDecorator from "./decorator"
import Input from "../../src/components/input"

const initialValue = text("value", "")
const name = text("name", "testInput")
const onChange = action("onChange")
const onBlur = action("onBlur")

storiesOf("Input / Modes", module)
  .addDecorator(InputDecorator(initialValue))
  .add(
    "Text",
    wInfo(`
    Description
    ~~~
    <Input
      name="${name}"
      value="${initialValue}"
      mode="text"
      onChange={/* event handler */}
      onBlur={/* event handler */}
    />
    ~~~
    `)(({ value, setValue }) => {
      return (
        <div className="mx-30 mb-40">
          <div className="text-2xl mb-20">Example</div>
          <div className="w-12/12 md:w-3/12">
            <Input
              name={name}
              mode="text"
              value={value}
              onChange={e => {
                setValue(e.target.value)
                onChange(e)
              }}
              onBlur={onBlur}
            />
          </div>
        </div>
      )
    })
  )
  .add(
    "Numeric",
    wInfo(`
    Description
    ~~~
    <Input
      name="${name}"
      value="${initialValue}"
      mode="numeric"
      onChange={/* event handler */}
      onBlur={/* event handler */}
    />
    ~~~
    `)(({ value, setValue }) => {
      return (
        <div className="mx-30 mb-40">
          <div className="text-2xl mb-20">Example</div>
          <div className="w-12/12 md:w-3/12">
            <Input
              name={name}
              mode="numeric"
              value={value}
              onChange={e => {
                setValue(e.target.value)
                onChange(e)
              }}
              onBlur={onBlur}
            />
          </div>
        </div>
      )
    })
  )
  .add(
    "Decimal",
    wInfo(`
    Description
    ~~~
    <Input
      name="${name}"
      value="${initialValue}"
      mode="decimal"
      onChange={/* event handler */}
      onBlur={/* event handler */}
    />
    ~~~
    `)(({ value, setValue }) => {
      return (
        <div className="mx-30 mb-40">
          <div className="text-2xl mb-20">Example</div>
          <div className="w-12/12 md:w-3/12">
            <Input
              name={name}
              mode="decimal"
              value={value}
              onChange={e => {
                setValue(e.target.value)
                onChange(e)
              }}
              onBlur={onBlur}
            />
          </div>
        </div>
      )
    })
  )
