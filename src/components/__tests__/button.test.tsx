import React from "react"
import { cleanup, fireEvent, render } from "@testing-library/react"

import Button from "../button"
import CtaCall from "../../../.storybook/icons/ctaCall"

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
      const { container } = render(<Button size="small">Label</Button>)
      expect(container).toMatchSnapshot()
    })

    it("renders teal button", () => {
      const { container } = render(<Button style="teal">Label</Button>)
      expect(container).toMatchSnapshot()
    })

    it("renders disabled button", () => {
      const { container } = render(<Button disabled>Label</Button>)
      expect(container).toMatchSnapshot()
    })

    it("renders small disabled button", () => {
      const { container } = render(
        <Button disabled size="small">
          Label
        </Button>
      )
      expect(container).toMatchSnapshot()
    })

    it("renders small teal button", () => {
      const { container } = render(
        <Button size="small" style="teal">
          Label
        </Button>
      )
      expect(container).toMatchSnapshot()
    })

    it("renders white Teal button", () => {
      const { container } = render(<Button style="teal-border">Label</Button>)
      expect(container).toMatchSnapshot()
    })

    it("renders white Teal small button", () => {
      const { container } = render(
        <Button style="teal-border" size="small">
          Label
        </Button>
      )
      expect(container).toMatchSnapshot()
    })
  })

  it("has correct padding without the custom renderer", () => {
    const { getByText } = render(<Button>Label</Button>)
    const button = getByText("Label")

    expect(button.classList).toContain("px-10")
  })

  it("sets correct padding within the link", () => {
    const { getByText } = render(
      <Button>
        <a>Label</a>
      </Button>
    )

    const link = getByText("Label")
    expect(link.classList).toContain("px-10")
  })

  it("renders a div with link as a child", () => {
    const { getByText } = render(
      <Button>
        <a>Label</a>
      </Button>
    )

    const option = getByText("Label")
    expect(option.parentElement.parentElement).toMatchSnapshot()
  })

  it("renders icon, size, paddings and text", () => {
    const { container } = render(
      <Button icon={() => <CtaCall />}>Label</Button>
    )
    expect(container).toMatchSnapshot()
  })

  it("renders an icon inside a button with link as a child", () => {
    const { getByText } = render(
      <Button icon={() => <CtaCall />}>
        <a>Label</a>
      </Button>
    )

    const option = getByText("Label")
    expect(option.parentElement).toMatchSnapshot()
  })

  it("only renders the icon once with multiple children", async () => {
    const { findAllByTestId } = render(
      <Button
        icon={() => (
          <span data-testid="icon">
            <CtaCall />
          </span>
        )}
      >
        <div>
          <div>List for free</div>
          <div>new</div>
        </div>
      </Button>
    )

    expect((await findAllByTestId("icon")).length).toEqual(1)
  })
})
