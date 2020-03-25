import React from "react"
import { render } from "@testing-library/react"

import AlertMessage from "../alertMessage"
import MailSent from "../../../.storybook/icons/mailSent"

describe("<AlertMessage>", () => {
  it("renders alert label", () => {
    const { getByText } = render(
      <AlertMessage type="error">Label</AlertMessage>
    )
    getByText("Label")
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

    it("renders error alert message with borders on the top and bottom", () => {
      const { container } = render(
        <AlertMessage type="error" fullWidth>
          Label
        </AlertMessage>
      )
      expect(container).toMatchSnapshot()
    })

    it("renders warning alert message with borders on the top and bottom", () => {
      const { container } = render(
        <AlertMessage type="warning" fullWidth>
          Label
        </AlertMessage>
      )
      expect(container).toMatchSnapshot()
    })

    it("renders information alert message with borders on the top and bottom", () => {
      const { container } = render(
        <AlertMessage type="information" fullWidth>
          Label
        </AlertMessage>
      )
      expect(container).toMatchSnapshot()
    })

    it("renders error alert message with icon", () => {
      const { container } = render(
        <AlertMessage type="error" icon={() => <MailSent fill="#F73B47" />}>
          Label
        </AlertMessage>
      )
      expect(container).toMatchSnapshot()
    })

    it("renders warning alert message with icon", () => {
      const { container } = render(
        <AlertMessage type="warning" icon={() => <MailSent fill="#fcb001" />}>
          Label
        </AlertMessage>
      )
      expect(container).toMatchSnapshot()
    })

    it("renders information alert message with icon", () => {
      const { container } = render(
        <AlertMessage
          type="information"
          icon={() => <MailSent fill="#3696B9" />}
        >
          Label
        </AlertMessage>
      )
      expect(container).toMatchSnapshot()
    })

    it("renders error alert message with icon and borders on the top and bottom", () => {
      const { container } = render(
        <AlertMessage
          type="error"
          fullWidth
          icon={() => <MailSent fill="#F73B47" />}
        >
          Label
        </AlertMessage>
      )
      expect(container).toMatchSnapshot()
    })

    it("renders warning alert message with icon and borders on the top and bottom", () => {
      const { container } = render(
        <AlertMessage
          type="warning"
          fullWidth
          icon={() => <MailSent fill="#fcb001" />}
        >
          Label
        </AlertMessage>
      )
      expect(container).toMatchSnapshot()
    })

    it("renders information alert message with icon and borders on the top and bottom", () => {
      const { container } = render(
        <AlertMessage
          type="information"
          fullWidth
          icon={() => <MailSent fill="#3696B9" />}
        >
          Label
        </AlertMessage>
      )
      expect(container).toMatchSnapshot()
    })
  })
})
