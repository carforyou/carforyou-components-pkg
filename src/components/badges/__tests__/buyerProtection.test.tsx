import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"

import { DummyTooltip } from "./dummyTooltip"
import BuyerProtectionBadge from "../buyerProtection"

describe("<BuyerProtectionBadge>", () => {
  it("renders the badge in english", () => {
    render(<BuyerProtectionBadge language="en" />)
    expect(screen.getByText("Buyer Protection"))
  })

  it("renders the badge without text", () => {
    render(<BuyerProtectionBadge language="en" withText={false} />)
    expect(screen.queryAllByText("Buyer Protection")).toHaveLength(0)
  })

  it("renders the badge in german", () => {
    render(<BuyerProtectionBadge language="de" />)
    expect(screen.getByText("Käuferschutz"))
  })

  it("renders the badge in french", () => {
    render(<BuyerProtectionBadge language="fr" />)
    expect(screen.getByText("Protection des acheteurs"))
  })

  it("renders the badge in italian", () => {
    render(<BuyerProtectionBadge language="it" />)
    expect(screen.getByText("Protezione dell’acquirente"))
  })

  it("renders a tooltip on hover", async () => {
    render(
      <BuyerProtectionBadge language="en" tooltipContent={<DummyTooltip />} />
    )

    fireEvent.mouseEnter(screen.getByText("Buyer Protection"))
    expect(await screen.findByText("Dummy tooltip"))
  })
})
