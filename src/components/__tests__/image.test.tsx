import React from "react"
import { render } from "@testing-library/react"

import Image from "../image"

describe("<Image />", () => {
  describe("loading", () => {
    it("is eager by default", () => {
      const { getByAltText } = render(<Image source="foo.jpg" alt="image" />)

      expect(getByAltText("image").getAttribute("loading")).toEqual("eager")
    })

    it("is eager when requested", () => {
      const { getByAltText } = render(
        <Image source="foo.jpg" alt="image" loading="eager" />
      )

      expect(getByAltText("image").getAttribute("loading")).toEqual("eager")
    })

    it("is lazy when requested", () => {
      const { getByAltText } = render(
        <Image source="foo.jpg" alt="image" loading="lazy" />
      )

      expect(getByAltText("image").getAttribute("loading")).toEqual("lazy")
    })
  })
})
