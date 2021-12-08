import React from "react"
import { render, screen } from "@testing-library/react"

import AlertMessage from "../alertMessage"
import MailSent from "../../../.storybook/icons/mailSent"

describe("<AlertMessage>", () => {
  it("renders alert label", () => {
    render(<AlertMessage type="error">Label</AlertMessage>)
    screen.getByText("Label")
  })

  describe("AlertMessage variations", () => {
    it("renders error alert message correctly", () => {
      const { container } = render(
        <AlertMessage type="error">Label</AlertMessage>
      )
      expect(container).toMatchSnapshot()
    })

    it("renders warning alert message", () => {
      const { container } = render(
        <AlertMessage type="warning">Label</AlertMessage>
      )
      expect(container).toMatchSnapshot()
    })

    it("renders information alert message", () => {
      const { container } = render(
        <AlertMessage type="information">Label</AlertMessage>
      )
      expect(container).toMatchSnapshot()
    })

    it("renders success alert message", () => {
      const { container } = render(
        <AlertMessage type="success">Label</AlertMessage>
      )
      expect(container).toMatchSnapshot()
    })

    it("renders error alert message centered", () => {
      const { container } = render(
        <AlertMessage type="error" alignCenter>
          Label
        </AlertMessage>
      )
      expect(container).toMatchSnapshot()
    })

    it("renders error alert message with borders on the top and bottom", () => {
      const { container } = render(
        <AlertMessage type="error" fullWidth>
          Label
        </AlertMessage>
      )
      expect(container).toMatchSnapshot()
    })

    it("renders error alert message centered with icon and borders on the top and bottom", () => {
      const { container } = render(
        <AlertMessage
          type="error"
          alignCenter
          fullWidth
          icon={() => <MailSent fill="#F73B47" />}
        >
          Label
        </AlertMessage>
      )
      expect(container).toMatchSnapshot()
    })
  })
})
