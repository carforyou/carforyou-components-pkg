import React, { useState } from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { text, boolean } from "@storybook/addon-knobs"

import { wInfo } from "../utils"
import Input from "../../src/components/input"

const initialValue = text("value", "")
const name = text("name", "testInput")
const onChange = action("onChange")
const onBlur = action("onBlur")

const Wrapper = ({ children }) => {
  const [value, setValue] = useState(initialValue)

  return children({ value, setValue })
}

const decorator = storyFn => <Wrapper>{storyFn}</Wrapper>

storiesOf("Input / Modes", module)
  .addDecorator(decorator)
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
