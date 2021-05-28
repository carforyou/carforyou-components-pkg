import React from "react"
import { render, fireEvent } from "@testing-library/react"

import BuyNowBadge from "../buyNow"

describe("<BuyNowBadge>", () => {
  it("renders tooltip on hover", async () => {
    // Temporarly disable this test
    return

    // const { findByText, getByText } = render(
    //   <BuyNowBadge language="en" hasText />
    // )

    // fireEvent.mouseEnter(getByText("buyNow.badge.title"))

    // expect(await findByText("buyNow.badge.tooltip"))
  })
})
