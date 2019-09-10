import * as React from "react"
import { render, fireEvent, cleanup } from "@testing-library/react"

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

  it("renders default button correctly", () => {
    const { container } = render(<Button>Label</Button>)
    expect(container).toMatchSnapshot()
  })

  describe("button variations", () => {
    it("renders small button", () => {
      const { container } = render(<Button small>Label</Button>)
      expect(container).toMatchSnapshot()
    })

    it("renders teal button", () => {
      const { container } = render(<Button teal>Label</Button>)
      expect(container).toMatchSnapshot()
    })

    it("renders disabled button", () => {
      const { container } = render(<Button disabled>Label</Button>)
      expect(container).toMatchSnapshot()
    })

    it("renders small disabled button", () => {
      const { container } = render(
        <Button disabled small>
          Label
        </Button>
      )
      expect(container).toMatchSnapshot()
    })

    it("renders small teal button", () => {
      const { container } = render(
        <Button small teal>
          Label
        </Button>
      )
      expect(container).toMatchSnapshot()
    })
  })
})
