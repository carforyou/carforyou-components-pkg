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

  describe("button variations", () => {
    it("renders button size", () => {
      const { container } = render(<Button small>Label</Button>)
      expect(container).toMatchSnapshot()
    })

    it("renders button color", () => {
      const { container } = render(<Button teal>Label</Button>)
      expect(container).toMatchSnapshot()
    })

    it("renders disabled button", () => {
      const { container } = render(<Button disabled>Label</Button>)
      expect(container).toMatchSnapshot()
    })
  })
})
