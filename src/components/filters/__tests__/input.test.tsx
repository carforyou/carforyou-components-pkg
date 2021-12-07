import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"

import InputFilter from "../input"

describe("<InputFilter>", () => {
  describe("renders correctly", () => {
    it("with no values", () => {
      const { container } = render(
        <InputFilter
          mode="numeric"
          name="test"
          placeholder="test"
          apply={jest.fn()}
        />
      )

      expect(container).toMatchSnapshot()
    })

    it("with autofocus after focusing", () => {
      const { container } = render(
        <InputFilter
          mode="numeric"
          name="test"
          placeholder="test"
          apply={jest.fn()}
        />
      )

      fireEvent.focus(screen.getByPlaceholderText("test"))

      expect(container).toMatchSnapshot()
    })
  })
})
