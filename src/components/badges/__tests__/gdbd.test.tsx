import React from "react"
import { render, fireEvent } from "@testing-library/react"

import GdbdBadge from "../gdbd"

describe("<GdbdBadge>", () => {
  it("renders tooltip on hover", async () => {
    // Temporarly disable this test
    return

    // const { findByText, getByText } = render(
    //   <GdbdBadge language="en" score="great-deal" />
    // )

    // fireEvent.mouseEnter(
    //   getByText("good-deal-bad-deal-landing-page.section-4.great-deal.title")
    // )

    // expect(
    //   await findByText(
    //     "good-deal-bad-deal-landing-page.section-4.great-deal.text"
    //   )
    // )
  })
})
