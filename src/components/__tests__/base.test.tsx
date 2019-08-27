import * as React from "react"
import { render } from "react-testing-library"

import BaseButton from "../base"

describe("<BaseButton>", () => {
  const props = {
    children: "Anmelden",
    className: "py-16 button appearance-none leading-none h-56 w-12/12 md:w-167"
  }

  it("renders button", () => {
    const { container } = render(<BaseButton {...props} loading={false} />)
    expect(container)
  })
  it("renders button with the spinner", () => {
    const { container } = render(<BaseButton {...props} loading={true} />)
    expect(container)
  })
})
