import React from "react"
import { act, fireEvent, render, screen } from "@testing-library/react"

jest.mock("../helper", () => ({
  bootIntercom: jest.fn((settings, { onOpen, onClose }) => {
    const i = jest.fn((event) => {
      if (event === "show") {
        return onOpen()
      }

      if (event === "hide") {
        return onClose()
      }
    })
    window.Intercom = i
    window.intercomSettings = settings
  }),
}))

import Intercom from "../index"
import { bootIntercom } from "../helper"

describe("<Intercom />", () => {
  const renderWrapper = (options = {}) => {
    return render(
      <Intercom appId="123" stage="test" label="Support" {...options} />
    )
  }

  it("does not load intercom by default", () => {
    renderWrapper()
    expect(bootIntercom).not.toHaveBeenCalled()
  })

  it("supports autoloading of intercom", () => {
    renderWrapper({ autoload: true })
    expect(bootIntercom).toHaveBeenCalled()
  })

  describe("launcher state", () => {
    it("renders label and icon by default", () => {
      renderWrapper()

      expect(screen.getByText("Support"))
    })

    it("boots intercom on demand", () => {
      renderWrapper()

      const button = screen.getByText("Support")
      act(() => {
        fireEvent.click(button)
      })

      expect(bootIntercom).toHaveBeenCalled()
    })

    it("shows close icon when chat is opened", () => {
      renderWrapper()

      const button = screen.getByText("Support")
      act(() => {
        fireEvent.click(button)
      })

      expect(screen.getByTestId("intercom-close"))
    })

    it("shows the label when the chat closes", () => {
      renderWrapper()

      const button = screen.getByText("Support")
      act(() => {
        fireEvent.click(button)
        window.Intercom("hide")
      })

      expect(screen.getByText("Support"))
    })
  })
})
