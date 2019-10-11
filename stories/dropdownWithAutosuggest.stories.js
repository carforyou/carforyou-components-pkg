import React, { useState } from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { object, number, boolean, text } from "@storybook/addon-knobs"

import { wInfo } from "./utils"

import DropdownWithAutosuggest from "../src/components/dropdown/withAutosuggest"

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
const allowCustomValues = (initial = false) => boolean("allowCustomValues", initial)
const trimInput = () => boolean("trimInput", false)

const TypeAheadWrapper = () => {
  const [suggestions, setSuggestions] = useState([])

  return (
    <div className="mx-30 mb-40 w-12/12 md:w-3/12">
      <div className="relative">
        <DropdownWithAutosuggest
          options={suggestions}
          onSelect={onSelect()}
          input={({ getInputProps }) => (
            <input
              {...getInputProps({
                placeholder: "Select number",
                className: "text-grey-dark outline-none px-10 py-15 border-grey-2 rounded border focus:border-grey-4 focus:outline-none hover:border-grey-3 hover:transition-2"
              })}
            />
          )}
          onTypeAhead={(value) =>
            setSuggestions(
              [1,2,3,4,5].map(i => ({
                name: `${value}: suggestion ${i}`,
                value: `${value}.${i}`
              }))
            )
          }
        />
      </div>
    </div>
  )
}

storiesOf("DropdownWithAutosuggest", module)
  .add(
    "Default",
    wInfo(`
    Description
    ~~~
    <div className="relative">
      <DropdownWithAutosuggest
        options={[
          { value: 1, name: "One" },
          { value: 2, name: "Two" },
          { value: 3, name: "Three" }
        ]}
        onSelect={/* select handler */}
        input={({ getInputProps }) => (
          <input
            {...getInputProps({
              placeholder: "Select number",
              className: "text-grey-dark outline-none px-10 py-15 border-grey-2 rounded border focus:border-grey-4 focus:outline-none hover:border-grey-3 hover:transition-2"
            })}
          />
        )}
      />
    </div>
    `)(() => (
      <div className="mx-30 mb-40 w-12/12 md:w-3/12">
        <div className="relative">
          <DropdownWithAutosuggest
            options={options()}
            onSelect={onSelect()}
            input={({ getInputProps }) => (
              <input
                {...getInputProps({
                  placeholder: "Select number",
                  className: "text-grey-dark outline-none px-10 py-15 border-grey-2 rounded border focus:border-grey-4 focus:outline-none hover:border-grey-3 hover:transition-2"
                })}
              />
            )}
            selected={selected()}
            allowCustomValues={allowCustomValues()}
            trimInput={trimInput()}
          />
        </div>
      </div>
    ))
  )
  .add(
    "With custom values",
    wInfo(`
    Description
    ~~~
    <div className="relative">
      <DropdownWithAutosuggest
        options={[
          { value: 1, name: "One" },
          { value: 2, name: "Two" },
          { value: 3, name: "Three" }
        ]}
        onSelect={/* select handler */}
        input={({ getInputProps }) => (
          <input
            {...getInputProps({
              placeholder: "Select number",
              className: "text-grey-dark outline-none px-10 py-15 border-grey-2 rounded border focus:border-grey-4 focus:outline-none hover:border-grey-3 hover:transition-2"
            })}
          />
        )}
        allowCustomValues
      />
    </div>
    `)(() => (
      <div className="mx-30 mb-40 w-12/12 md:w-3/12">
        <div className="relative">
          <DropdownWithAutosuggest
            options={options()}
            onSelect={onSelect()}
            input={({ getInputProps }) => (
              <input
                {...getInputProps({
                  placeholder: "Select number",
                  className: "text-grey-dark outline-none px-10 py-15 border-grey-2 rounded border focus:border-grey-4 focus:outline-none hover:border-grey-3 hover:transition-2"
                })}
              />
            )}
            selected={selected()}
            allowCustomValues={allowCustomValues(true)}
            trimInput={trimInput()}
          />
        </div>
      </div>
    ))
  )
  .add(
    "With type ahead",
    wInfo(`
    Description
    ~~~
    const TypeAheadWrapper = () => {
      const [suggestions, setSuggestions] = useState([])

      return (
        <div className="mx-30 mb-40 w-12/12 md:w-3/12">
          <div className="relative">
            <DropdownWithAutosuggest
              options={suggestions}
              onSelect={onSelect()}
              input={({ getInputProps }) => (
                <input
                  {...getInputProps({
                    placeholder: "Select number",
                    className: "text-grey-dark outline-none px-10 py-15 border-grey-2 rounded border focus:border-grey-4 focus:outline-none hover:border-grey-3 hover:transition-2"
                  })}
                />
              )}
              onTypeAhead={(value) =>
                const newSuggestions = apiCallToGetSuggestions(value)
                setSuggestions(newSuggestions)
              }
            />
          </div>
        </div>
      )
    }
    `)(() => (
      <TypeAheadWrapper />
    ))
  )
