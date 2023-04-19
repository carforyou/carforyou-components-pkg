import React from "react"
import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react"

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

  const openAutosuggest = () => {
    const input = screen.getByPlaceholderText(placeholder)

    fireEvent.focus(input)
    screen.getByTestId("dropdown-options")
  }

  afterEach(() => {
    mockedOnSelect.mockClear()
    cleanup()
  })

  describe("when closed", () => {
    it("renders the input", () => {
      mountWrapper()
      const input = screen.getByPlaceholderText(placeholder)

      expect(input).toMatchSnapshot()
    })
  })

  describe("when opened", () => {
    it("renders all suggestions", () => {
      mountWrapper()
      openAutosuggest()

      const list = screen.getByTestId("dropdown-options")
      options.forEach(({ name }) => {
        expect(within(list).getByText(name)).toMatchSnapshot()
      })
    })

    it("marks the partial match when typing", async () => {
      mountWrapper()
      openAutosuggest()

      const input = screen.getByPlaceholderText(placeholder)
      fireEvent.change(input, { target: { value: "On" } })

      const optionsList = screen.getByTestId("dropdown-options")
      const node = within(optionsList).getByTestId("One")
      expect(node).toMatchSnapshot()
    })

    it("highlights elements on exact match when typing", async () => {
      mountWrapper()
      openAutosuggest()

      const input = screen.getByPlaceholderText(placeholder)
      fireEvent.change(input, { target: { value: "One" } })

      const optionsList = screen.getByTestId("dropdown-options")
      const node = within(optionsList).getByTestId("One")
      expect(node).toMatchSnapshot()
    })

    it("escapes special regexp characters when entered in the input", () => {
      mountWrapper()
      openAutosuggest()

      const input = screen.getByPlaceholderText(placeholder)
      expect(() => {
        fireEvent.change(input, { target: { value: "-/^$*+?.()|[]{}\\" } })
      }).not.toThrow()
    })

    it("select highlited option on blur", async () => {
      mountWrapper()
      openAutosuggest()

      const input = screen.getByPlaceholderText(placeholder)
      fireEvent.change(input, { target: { value: "Two" } })
      fireEvent.blur(input)

      expect(mockedOnSelect).toHaveBeenCalledWith(2)
    })

    it("forwards selected value to callback", async () => {
      mountWrapper()
      openAutosuggest()

      const optionNode = screen.getByText("Two")
      fireEvent.click(optionNode)

      expect(mockedOnSelect).toHaveBeenCalledWith(2)
    })

    it("clears previous selection on empty input", async () => {
      mountWrapper()
      openAutosuggest()

      const input = screen.getByPlaceholderText(placeholder)

      fireEvent.change(input, { target: { value: "Two" } })
      fireEvent.blur(input)
      fireEvent.change(input, { target: { value: "" } })
      fireEvent.blur(input)

      expect(mockedOnSelect).toHaveBeenCalledWith(null)
    })

    it("selects on enter", async () => {
      mountWrapper()
      openAutosuggest()

      const input = screen.getByPlaceholderText(placeholder)

      fireEvent.change(input, { target: { value: "Two" } })
      fireEvent.keyDown(input, {
        keyCode: 13,
        target: { blur: () => fireEvent.blur(input) },
      })

      expect(mockedOnSelect).toHaveBeenCalledWith(2)
    })
  })

  describe("with custom values", () => {
    it("allows custom user input", async () => {
      mountWrapper({ allowCustomValues: true })
      const input = screen.getByPlaceholderText(placeholder)
      fireEvent.change(input, { target: { value: "Custom" } })
      fireEvent.blur(input)

      expect(mockedOnSelect).toHaveBeenCalledWith({ customValue: "Custom" })
    })

    it("allows option from dropdown", async () => {
      mountWrapper({ allowCustomValues: true })
      const input = screen.getByPlaceholderText(placeholder)
      fireEvent.change(input, { target: { value: "Two" } })
      fireEvent.blur(input)

      expect(mockedOnSelect).toHaveBeenCalledWith(2)
    })
  })
})
