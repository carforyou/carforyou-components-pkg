import React from "react"
import { cleanup, fireEvent, render, within } from "@testing-library/react"

import Dropdown from "../index"

describe("<Dropdown>", () => {
  const mockedOnSelect = jest.fn()

  const options = [
    { value: 1, name: "One" },
    { value: 2, name: "Two" },
    { value: 3, name: "Three" },
  ]
  const title = "Select number"
  const selected = 1

  const mountWrapper = (data = {}) => {
    const { renderOption } = {
      renderOption: undefined,
      ...data,
    }

    return render(
      <Dropdown
        options={options}
        selected={selected}
        onSelect={mockedOnSelect}
        toggle={({ name }) => (
          <div>
            <span className="font-bold lg:font-regular">{title}</span>:{" "}
            <span className="font-bold">{name}</span>
          </div>
        )}
        renderOption={renderOption}
      />
    )
  }

  const openDropdown = (wrapper) => {
    const { getByText, getByTestId } = wrapper
    const titleNode = getByText(title)

    fireEvent.click(titleNode)
    getByTestId("dropdown-options")
  }

  beforeEach(() => {
    cleanup()
    mockedOnSelect.mockClear()
  })

  describe("correct markup", () => {
    describe("when closed", () => {
      it("renders title", () => {
        const { getByText } = mountWrapper()
        expect(getByText(title)).toMatchSnapshot()
      })

      it("renders selected option", () => {
        const { getByText } = mountWrapper()
        expect(getByText("One")).toMatchSnapshot()
      })
    })

    describe("when opened", () => {
      it("renders title", () => {
        const wrapper = mountWrapper()
        openDropdown(wrapper)

        const { getByText } = wrapper
        expect(getByText(title)).toMatchSnapshot()
      })

      it("renders selected option", () => {
        const wrapper = mountWrapper()
        openDropdown(wrapper)

        const { getByTestId } = wrapper
        const toggle = getByTestId("dropdown-toggle")
        expect(within(toggle).getByText("One")).toMatchSnapshot()
      })

      it("renders all options", () => {
        const wrapper = mountWrapper()
        openDropdown(wrapper)

        const { getByTestId } = mountWrapper()
        const list = getByTestId("dropdown-options")
        options.forEach(({ name }) => {
          expect(within(list).getByText(name)).toMatchSnapshot()
        })
      })
    })
  })

  it("passes selection to callback", () => {
    const wrapper = mountWrapper()
    openDropdown(wrapper)

    const { getByText } = wrapper
    const optionNode = getByText("Two")
    fireEvent.click(optionNode)

    expect(mockedOnSelect).toBeCalledWith(2)
  })

  it("closes after selecting option", async () => {
    const wrapper = mountWrapper()
    openDropdown(wrapper)

    const { getByText, queryAllByTestId } = wrapper
    const optionNode = getByText("Two")
    fireEvent.click(optionNode)

    expect(queryAllByTestId("dropdown-options")).toEqual([])
  })

  it("accepts custom render for options", () => {
    const wrapper = mountWrapper({
      renderOption: ({ name, value }) => (
        <div>
          {name} ({value})
        </div>
      ),
    })

    openDropdown(wrapper)
    const { getByText } = wrapper

    options.forEach(({ value, name }) =>
      expect(getByText(`${name} (${value})`))
    )
  })
})
