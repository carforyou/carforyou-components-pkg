import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { boolean, number, object } from "@storybook/addon-knobs"

import { wInfo } from "./utils"
import SegmentedControl from "../src/components/segmentedControl"

const options = () => object("options", [
  { value: 1, name: "Button 1" },
  { value: 2, name: "Button 2" },
  { value: 3, name: "Button 3" }
])
const onSelect = () => action("onSelect")
const initialSelection = (initial = null) => number("Initial Selection", initial)
const small = (initial = false) => boolean("Small", initial)
const disabled = (initial = false) => boolean("Disabled", initial)


storiesOf("SegmentedControl", module)
  .add(
    "Default",
    wInfo(`
    Description
    ~~~
    <SegmentedControl
      options={[
        { value: 1, name: "Button 1" },
        { value: 2, name: "Button 2" },
        { value: 3, name: "Button 3" }
      ]
      onSelect={/* select handler */}
    />
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="w-12/12 md:w-4/12">
          <SegmentedControl
            options={options()}
            onSelect={onSelect()}
            initialSelection={initialSelection()}
            small={small()}
            disabled={disabled()}
          />
        </div>
      </div>
    ))
  )
  .add(
    "With two buttons",
    wInfo(`
    Description
    ~~~
    <SegmentedControl
      options={[
        { value: 1, name: "Button 1" },
        { value: 2, name: "Button 2" }
      ]
      onSelect={/* select handler */}
    />
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="w-12/12 md:w-4/12">
          <SegmentedControl
            options={object("options", [
              { value: 1, name: "Button 1" },
              { value: 2, name: "Button 2" }
            ])}
            onSelect={onSelect()}
            initialSelection={initialSelection()}
            small={small()}
            disabled={disabled()}
          />
        </div>
      </div>
    ))
  )
  .add(
    "With initial selection",
    wInfo(`
    Description
    ~~~
    <SegmentedControl
      options={[
        { value: 1, name: "Button 1" },
        { value: 2, name: "Button 2" },
        { value: 3, name: "Button 3" }
      ]
      onSelect={/* select handler */}
      initialSelection={2}
    />
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="w-12/12 md:w-4/12">
          <SegmentedControl
            options={options()}
            onSelect={onSelect()}
            initialSelection={initialSelection(2)}
            small={small()}
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
    <SegmentedControl
      options={[
        { value: 1, name: "Button 1" },
        { value: 2, name: "Button 2" },
        { value: 3, name: "Button 3" }
      ]
      onSelect={/* select handler */}
      renderOption={({ name, value }) => (
        <div className="w-12/12 flex justify-between">
          <span>{name}</span>
          <span>({value})</span>
        </div>
      )}
    />
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="w-12/12 md:w-4/12">
          <SegmentedControl
            options={options()}
            onSelect={onSelect()}
            initialSelection={initialSelection()}
            small={small()}
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
    "Small",
    wInfo(`
    Description
    ~~~
    <SegmentedControl
      options={[
        { value: 1, name: "Button 1" },
        { value: 2, name: "Button 2" },
        { value: 3, name: "Button 3" }
      ]
      onSelect={/* select handler */}
      small
    />
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="w-12/12 md:w-4/12">
          <SegmentedControl
            options={options()}
            onSelect={onSelect()}
            initialSelection={initialSelection()}
            small={small(true)}
            disabled={disabled()}
          />
        </div>
      </div>
    ))
  )
  .add(
    "Disabled",
    wInfo(`
    Description
    ~~~
    <SegmentedControl
      options={[
        { value: 1, name: "Button 1" },
        { value: 2, name: "Button 2" },
        { value: 3, name: "Button 3" }
      ]
      onSelect={/* select handler */}
      disabled
    />
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="w-12/12 md:w-4/12">
          <SegmentedControl
            options={options()}
            onSelect={onSelect()}
            initialSelection={initialSelection()}
            small={small()}
            disabled={disabled(true)}
          />
        </div>
      </div>
    ))
  )
  .add(
    "Disabled small",
    wInfo(`
    Description
    ~~~
    <SegmentedControl
      options={[
        { value: 1, name: "Button 1" },
        { value: 2, name: "Button 2" },
        { value: 3, name: "Button 3" }
      ]
      onSelect={/* select handler */}
      disabled
    />
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="w-12/12 md:w-4/12">
          <SegmentedControl
            options={options()}
            onSelect={onSelect()}
            initialSelection={initialSelection()}
            small={small(true)}
            disabled={disabled(true)}
          />
        </div>
      </div>
    ))
  )
