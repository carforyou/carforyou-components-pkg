import * as React from "react"
import { render, fireEvent, cleanup } from "react-testing-library"

import Button from "../button"

describe("<Button>", () => {
  beforeEach(cleanup)

  it("renders button label", () => {
    const { getByText } = render(<Button>Label</Button>)
    getByText("Label")
  })

  it("triggers onClick", () => {
    const onClick = jest.fn()
    const { getByText } = render(<Button onClick={onClick}>Label</Button>)

    fireEvent.click(getByText("Label"))
    expect(onClick).toHaveBeenCalled()
  })

  describe("variations", () => {
    it("renders a disabled button", () => {
      const { container } = render(<Button disabled>Label</Button>)
      expect(container).toMatchSnapshot()
    })
  })
})
