import React from "react"
import { render, screen } from "@testing-library/react"

import Image from "../image"

describe("<Image />", () => {
  describe("loading", () => {
    it("is eager by default", () => {
      render(<Image source="foo.jpg" alt="image" />)

      expect(screen.getByAltText("image").getAttribute("loading")).toEqual(
        "eager"
      )
    })

    it("is eager when requested", () => {
      render(<Image source="foo.jpg" alt="image" loading="eager" />)

      expect(screen.getByAltText("image").getAttribute("loading")).toEqual(
        "eager"
      )
    })

    it("is lazy when requested", () => {
      render(<Image source="foo.jpg" alt="image" loading="lazy" />)

      expect(screen.getByAltText("image").getAttribute("loading")).toEqual(
        "lazy"
      )
    })
  })
})
