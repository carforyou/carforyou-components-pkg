import * as React from "react"
import { render } from "react-testing-library"

import { ImageAsset } from "../../"

describe("ImageAsset", () => {
  it("renders image", () => {
    const { container } = render(<ImageAsset path="kitten.jpg" />)
    expect(container).toMatchSnapshot()
  })
})
