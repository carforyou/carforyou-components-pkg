import React from "react"
import { cleanup, fireEvent, render, within } from "@testing-library/react"

import DropdownWithAutosuggest from "../withAutosuggest"

describe("<DropdownWithAutosuggest>", () => {
  const mockedOnSelect = jest.fn()

  const placeholder = "Select number"
  const options = [
    { value: 1, name: "One" },
    { value: 2, name: "Two" },
    { value: 3, name: "Three" },
  ]

  const mountWrapper = (dropdownOptions = {}) => {
    const { allowCustomValues } = {
      allowCustomValues: false,
      ...dropdownOptions,
    }

    return render(
      <DropdownWithAutosuggest
        options={options}
        onSelect={mockedOnSelect}
        input={({ getInputProps }) => (
          <input
            {...getInputProps({
              name: `${name}From`,
              placeholder,
            })}
          />
        )}
        allowCustomValues={allowCustomValues}
        noResults="no results"
      />
    )
  }

  const openAutosuggest = (wrapper) => {
    const { getByPlaceholderText, getByTestId } = wrapper
    const input = getByPlaceholderText(placeholder)

    fireEvent.focus(input)
    getByTestId("dropdown-options")
  }

  afterEach(() => {
    mockedOnSelect.mockClear()
    cleanup()
  })

  describe("when closed", () => {
    it("renders the input", () => {
      const { getByPlaceholderText } = mountWrapper()
      const input = getByPlaceholderText(placeholder)

      expect(input).toMatchSnapshot()
    })
  })

  describe("when opened", () => {
    it("renders all suggestions", () => {
      const wrapper = mountWrapper()
      openAutosuggest(wrapper)

      const { getByTestId } = wrapper
      const list = getByTestId("dropdown-options")
      options.forEach(({ name }) => {
        expect(within(list).getByText(name)).toMatchSnapshot()
      })
    })

    it("marks the partial match when typing", async () => {
      const wrapper = mountWrapper()
      openAutosuggest(wrapper)

      const { getByPlaceholderText, getByTestId } = wrapper
      const input = getByPlaceholderText(placeholder)
      fireEvent.change(input, { target: { value: "On" } })

      const optionsList = getByTestId("dropdown-options")
      const node = within(optionsList).getByTestId("One")
      expect(node).toMatchSnapshot()
    })

    it("highlights elements on exact match when typing", async () => {
      const wrapper = mountWrapper()
      openAutosuggest(wrapper)

      const { getByPlaceholderText, getByTestId } = wrapper
      const input = getByPlaceholderText(placeholder)
      fireEvent.change(input, { target: { value: "One" } })

      const optionsList = getByTestId("dropdown-options")
      const node = within(optionsList).getByTestId("One")
      expect(node).toMatchSnapshot()
    })

    it("escapes special regexp characters when entered in the input", () => {
      const wrapper = mountWrapper()
      openAutosuggest(wrapper)

      const { getByPlaceholderText } = wrapper
      const input = getByPlaceholderText(placeholder)
      expect(() => {
        fireEvent.change(input, { target: { value: "-/^$*+?.()|[]{}\\" } })
      }).not.toThrow()
    })

    it("select highlited option on blur", async () => {
      const wrapper = mountWrapper()
      openAutosuggest(wrapper)

      const { getByPlaceholderText } = wrapper
      const input = getByPlaceholderText(placeholder)
      fireEvent.change(input, { target: { value: "Two" } })
      fireEvent.blur(input)

      expect(mockedOnSelect).toBeCalledWith(2)
    })

    it("forwards selected value to callback", async () => {
      const wrapper = mountWrapper()
      openAutosuggest(wrapper)

      const { getByText } = wrapper
      const optionNode = getByText("Two")
      fireEvent.click(optionNode)

      expect(mockedOnSelect).toBeCalledWith(2)
    })

    it("clears previous selection on empty input", async () => {
      const wrapper = mountWrapper()
      openAutosuggest(wrapper)

      const { getByPlaceholderText } = wrapper
      const input = getByPlaceholderText(placeholder)

      fireEvent.change(input, { target: { value: "Two" } })
      fireEvent.blur(input)
      fireEvent.change(input, { target: { value: "" } })
      fireEvent.blur(input)

      expect(mockedOnSelect).toBeCalledWith(null)
    })

    it("selects on enter", async () => {
      const wrapper = mountWrapper()
      openAutosuggest(wrapper)

      const { getByPlaceholderText } = wrapper
      const input = getByPlaceholderText(placeholder)

      fireEvent.change(input, { target: { value: "Two" } })
      fireEvent.keyDown(input, {
        keyCode: 13,
        target: { blur: () => fireEvent.blur(input) },
      })

      expect(mockedOnSelect).toBeCalledWith(2)
    })
  })

  describe("with custom values", () => {
    it("allows custom user input", async () => {
      const { getByPlaceholderText } = mountWrapper({ allowCustomValues: true })
      const input = getByPlaceholderText(placeholder)
      fireEvent.change(input, { target: { value: "Custom" } })
      fireEvent.blur(input)

      expect(mockedOnSelect).toBeCalledWith({ customValue: "Custom" })
    })

    it("allows option from dropdown", async () => {
      const { getByPlaceholderText } = mountWrapper({ allowCustomValues: true })
      const input = getByPlaceholderText(placeholder)
      fireEvent.change(input, { target: { value: "Two" } })
      fireEvent.blur(input)

      expect(mockedOnSelect).toBeCalledWith(2)
    })
  })
})
