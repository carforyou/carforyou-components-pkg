import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { object, number, boolean, text } from "@storybook/addon-knobs"

import { wInfo } from "./utils"

import Dropdown from "../src/components/dropdown"

const options = () => object("options", [
  { value: 1, name: "One" },
  { value: 2, name: "Two" },
  { value: 3, name: "Three" },
  { value: 4, name: "Four" },
  { value: 5, name: "Five" },
  { value: 6, name: "Six" }
])
const onSelect = () => action("onSelect")
const selected = () => number("selected", null)
const disabled = () => boolean("disabled", false)
const placeholder = () => text("placeholder", "Select number")

storiesOf("Dropdown", module)
  .add(
    "With placeholder",
    wInfo(`
    Description
    ~~~
    <div className="relative">
      <Dropdown
        options={[
          { value: 1, name: "One" },
          { value: 2, name: "Two" },
          { value: 3, name: "Three" }
        ]}
        onSelect={/* select handler */}
        toggle={({ name, placeholder }) => (
          <div className="text-left">
            <span className={placeholder ? "font-regular" : "font-bold"}>{name}</span>
          </div>
        )}
        placeholder={"Select number"}
      />
    </div>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40 w-12/12 md:w-3/12">
        <div className="relative">
          <Dropdown
            options={options()}
            onSelect={onSelect()}
            toggle={({ name, placeholder }) => (
              <div className="text-left">
                <span className={placeholder ? "font-regular" : "font-bold"}>{name}</span>
              </div>
            )}
            selected={selected()}
            disabled={disabled()}
            placeholder={placeholder()}
          />
        </div>
      </div>
    ))
  )
  .add(
    "Without placeholder",
    wInfo(`
    Description
    ~~~
    <div className="relative">
      <Dropdown
        options={[
          { value: 1, name: "One" },
          { value: 2, name: "Two" },
          { value: 3, name: "Three" }
        ]}
        onSelect={/* select handler */}
        toggle={({ name, placeholder }) => (
          <div className="text-left">
            <span className="font-regular">Select number: </span>
            <span className={placeholder ? "font-regular" : "font-bold"}>{name || "-"}</span>
          </div>
        )}
      />
    </div>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40 w-12/12 md:w-3/12">
        <div className="relative">
          <Dropdown
            options={options()}
            onSelect={onSelect()}
            toggle={({ name, placeholder }) => (
              <div className="text-left">
                <span className="font-regular">Select number: </span>
                <span className={placeholder ? "font-regular" : "font-bold"}>{name || "-"}</span>
              </div>
            )}
            selected={selected()}
            disabled={disabled()}
          />
        </div>
      </div>
    ))
  )
  .add(
    "With custom option render",
    wInfo(`
    Description
    ~~~
    <div className="relative">
      <Dropdown
        options={[
          { value: 1, name: "One" },
          { value: 2, name: "Two" },
          { value: 3, name: "Three" }
        ]}
        onSelect={/* select handler */}
        toggle={({ name, placeholder }) => (
          <div className="text-left">
            <span className="font-regular">Select number: </span>
            <span className={placeholder ? "font-regular" : "font-bold"}>{name || "-"}</span>
          </div>
        )}
        renderOption={({ name, value }) => (
          <div className="w-12/12 flex justify-between">
            <span>{name}</span>
            <span>({value})</span>
          </div>
        )}
      />
    </div>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40 w-12/12 md:w-3/12">
        <div className="relative">
          <Dropdown
            options={options()}
            onSelect={onSelect()}
            toggle={({ name, placeholder }) => (
              <div className="text-left">
                <span className="font-regular">Select number: </span>
                <span className={placeholder ? "font-regular" : "font-bold"}>{name || "-"}</span>
              </div>
            )}
            selected={selected()}
            disabled={disabled()}
            renderOption={({ name, value }) => (
              <div className="w-12/12 flex justify-between">
                <span>{name}</span>
                <span>({value})</span>
              </div>
            )}
          />
        </div>
      </div>
    ))
)
  .add(
    "Without selection handler",
    wInfo(`
    Description
    ~~~
    <div className="relative">
      <Dropdown
        options={[
          { value: 1, name: "One" },
          { value: 2, name: "Two" },
          { value: 3, name: "Three" }
        ]}
        toggle={({ name, placeholder }) => (
          <div className="text-left">
            <span className="font-regular">Select number: </span>
            <span className={placeholder ? "font-regular" : "font-bold"}>{name || "-"}</span>
          </div>
        )}
      />
    </div>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40 w-12/12 md:w-3/12">
        <div className="relative">
          <Dropdown
            options={options()}
            toggle={({ name, placeholder }) => (
              <div className="text-left">
                <span className="font-regular">Select number: </span>
                <span className={placeholder ? "font-regular" : "font-bold"}>{name || "-"}</span>
              </div>
            )}
            selected={selected()}
            disabled={disabled()}
          />
        </div>
      </div>
    ))
  )
