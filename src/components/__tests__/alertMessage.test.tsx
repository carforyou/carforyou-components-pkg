import React from "react"
import { render } from "@testing-library/react"

import AlertMessage from "../alertMessage"
import MailSent from "../../../.storybook/icons/mailSent"

describe("<AlertMessage>", () => {
  it("renders alert label", () => {
    const { getByText } = render(<AlertMessage>Label</AlertMessage>)
    getByText("Label")
  })

  it("renders default alert message correctly", () => {
    const { container } = render(<AlertMessage>Label</AlertMessage>)
    expect(container).toMatchSnapshot()
  })

  describe("AlertMessage variations", () => {
    it("renders warning alert message", () => {
      const { container } = render(<AlertMessage warning>Label</AlertMessage>)
      expect(container).toMatchSnapshot()
    })

    it("renders information alert message", () => {
      const { container } = render(
        <AlertMessage information>Label</AlertMessage>
      )
      expect(container).toMatchSnapshot()
    })

    it("renders default alert message with borders on the top and bottom", () => {
      const { container } = render(
        <AlertMessage parallelBorder>Label</AlertMessage>
      )
      expect(container).toMatchSnapshot()
    })

    it("renders warning alert message with borders on the top and bottom", () => {
      const { container } = render(
        <AlertMessage warning parallelBorder>
          Label
        </AlertMessage>
      )
      expect(container).toMatchSnapshot()
    })

    it("renders information alert message with borders on the top and bottom", () => {
      const { container } = render(
        <AlertMessage information parallelBorder>
          Label
        </AlertMessage>
      )
      expect(container).toMatchSnapshot()
    })

    it("renders default alert message with icon", () => {
      const { container } = render(
        <AlertMessage icon={() => <MailSent fill="#F73B47" />}>
          Label
        </AlertMessage>
      )
      expect(container).toMatchSnapshot()
    })

    it("renders warning alert message with icon", () => {
      const { container } = render(
        <AlertMessage warning icon={() => <MailSent fill="#E1CD79" />}>
          Label
        </AlertMessage>
      )
      expect(container).toMatchSnapshot()
    })

    it("renders information alert message with icon", () => {
      const { container } = render(
        <AlertMessage information icon={() => <MailSent fill="#3696B9" />}>
          Label
        </AlertMessage>
      )
      expect(container).toMatchSnapshot()
    })

    it("renders default alert message with icon and borders on the top and bottom", () => {
      const { container } = render(
        <AlertMessage parallelBorder icon={() => <MailSent fill="#F73B47" />}>
          Label
        </AlertMessage>
      )
      expect(container).toMatchSnapshot()
    })

    it("renders warning alert message with icon and borders on the top and bottom", () => {
      const { container } = render(
        <AlertMessage
          warning
          parallelBorder
          icon={() => <MailSent fill="#E1CD79" />}
        >
          Label
        </AlertMessage>
      )
      expect(container).toMatchSnapshot()
    })

    it("renders information alert message with icon and borders on the top and bottom", () => {
      const { container } = render(
        <AlertMessage
          information
          parallelBorder
          icon={() => <MailSent fill="#3696B9" />}
        >
          Label
        </AlertMessage>
      )
      expect(container).toMatchSnapshot()
    })
  })
})
