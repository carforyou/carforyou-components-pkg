import React from "react"
import { render } from "@testing-library/react"

import AlertMessage from "../alertMessage"
import MailSent from "../../../.storybook/icons/mailSent"

describe("<AlertMessage>", () => {
  it("renders alert label", () => {
    const { getByText } = render(
      <AlertMessage state={"error"}>Label</AlertMessage>
    )
    getByText("Label")
  })

  describe("AlertMessage variations", () => {
    it("renders error alert message correctly", () => {
      const { container } = render(
        <AlertMessage state={"error"}>Label</AlertMessage>
      )
      expect(container).toMatchSnapshot()
    })

    it("renders warning alert message", () => {
      const { container } = render(
        <AlertMessage state={"warning"}>Label</AlertMessage>
      )
      expect(container).toMatchSnapshot()
    })

    it("renders information alert message", () => {
      const { container } = render(
        <AlertMessage state={"information"}>Label</AlertMessage>
      )
      expect(container).toMatchSnapshot()
    })

    it("renders error alert message with borders on the top and bottom", () => {
      const { container } = render(
        <AlertMessage state={"error"} parallelBorder>
          Label
        </AlertMessage>
      )
      expect(container).toMatchSnapshot()
    })

    it("renders warning alert message with borders on the top and bottom", () => {
      const { container } = render(
        <AlertMessage state={"warning"} parallelBorder>
          Label
        </AlertMessage>
      )
      expect(container).toMatchSnapshot()
    })

    it("renders information alert message with borders on the top and bottom", () => {
      const { container } = render(
        <AlertMessage state={"information"} parallelBorder>
          Label
        </AlertMessage>
      )
      expect(container).toMatchSnapshot()
    })

    it("renders error alert message with icon", () => {
      const { container } = render(
        <AlertMessage state={"error"} icon={() => <MailSent fill="#F73B47" />}>
          Label
        </AlertMessage>
      )
      expect(container).toMatchSnapshot()
    })

    it("renders warning alert message with icon", () => {
      const { container } = render(
        <AlertMessage
          state={"warning"}
          icon={() => <MailSent fill="#fcb001" />}
        >
          Label
        </AlertMessage>
      )
      expect(container).toMatchSnapshot()
    })

    it("renders information alert message with icon", () => {
      const { container } = render(
        <AlertMessage
          state={"information"}
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
          state={"error"}
          parallelBorder
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
          state={"warning"}
          parallelBorder
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
          state={"information"}
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
