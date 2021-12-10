import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"

import { DummyTooltip } from "./dummyTooltip"
import BuyNowBadge from "../buyNow"

describe("<BuyNowBadge>", () => {
  it("renders the badge in english", () => {
    render(<BuyNowBadge language="en" />)
    expect(screen.getByText("Buy online"))
  })

  it("renders the badge without text", () => {
    render(<BuyNowBadge language="en" withText={false} />)
    expect(screen.queryAllByText("Buy online")).toHaveLength(0)
  })

  it("renders the badge in german", () => {
    render(<BuyNowBadge language="de" />)
    expect(screen.getByText("Online kaufen"))
  })

  it("renders the badge in french", () => {
    render(<BuyNowBadge language="fr" />)
    expect(screen.getByText("Acheter en ligne"))
  })

  it("renders the badge in italian", () => {
    render(<BuyNowBadge language="it" />)
    expect(screen.getByText("Acquistare l'auto online"))
  })

  it("renders a tooltip on hover", async () => {
    render(<BuyNowBadge language="en" tooltipContent={<DummyTooltip />} />)

    fireEvent.mouseEnter(screen.getByText("Buy online"))
    expect(await screen.findByText("Dummy tooltip"))
  })
})
