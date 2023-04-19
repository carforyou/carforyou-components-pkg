import React from "react"
import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react"

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

  const openDropdown = () => {
    const titleNode = screen.getByText(title)

    fireEvent.click(titleNode)
    screen.getByTestId("dropdown-options")
  }

  beforeEach(() => {
    cleanup()
    mockedOnSelect.mockClear()
  })

  describe("correct markup", () => {
    describe("when closed", () => {
      it("renders title", () => {
        mountWrapper()
        expect(screen.getByText(title)).toMatchSnapshot()
      })

      it("renders selected option", () => {
        mountWrapper()
        expect(screen.getByText("One")).toMatchSnapshot()
      })
    })

    describe("when opened", () => {
      it("renders title", () => {
        mountWrapper()
        openDropdown()

        expect(screen.getByText(title)).toMatchSnapshot()
      })

      it("renders selected option", () => {
        mountWrapper()
        openDropdown()

        const toggle = screen.getByTestId("dropdown-toggle")
        expect(within(toggle).getByText("One")).toMatchSnapshot()
      })

      it("renders all options", () => {
        mountWrapper()
        openDropdown()

        mountWrapper()
        const list = screen.getByTestId("dropdown-options")
        options.forEach(({ name }) => {
          expect(within(list).getByText(name)).toMatchSnapshot()
        })
      })
    })
  })

  it("passes selection to callback", () => {
    mountWrapper()
    openDropdown()

    const optionNode = screen.getByText("Two")
    fireEvent.click(optionNode)

    expect(mockedOnSelect).toHaveBeenCalledWith(2)
  })

  it("closes after selecting option", async () => {
    mountWrapper()
    openDropdown()

    const optionNode = screen.getByText("Two")
    fireEvent.click(optionNode)

    expect(screen.queryAllByTestId("dropdown-options")).toEqual([])
  })

  it("accepts custom render for options", () => {
    mountWrapper({
      renderOption: ({ name, value }) => (
        <div>
          {name} ({value})
        </div>
      ),
    })

    openDropdown()

    options.forEach(({ value, name }) =>
      expect(screen.getByText(`${name} (${value})`))
    )
  })
})
