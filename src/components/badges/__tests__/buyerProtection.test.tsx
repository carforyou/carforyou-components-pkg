import React from "react"
import { fireEvent, render } from "@testing-library/react"

import BuyerProtectionBadge from "../buyerProtection"
import { DummyTooltip } from "../../../stories/badges/dummyTooltip"

describe("<BuyerProtectionBadge>", () => {
  it("renders the badge in english", () => {
    const { getByText } = render(<BuyerProtectionBadge language="en" />)
    expect(getByText("Buyer Protection"))
  })

  it("renders the badge without text", () => {
    const { queryAllByText } = render(
      <BuyerProtectionBadge language="en" size="small" />
    )
    expect(queryAllByText("Buyer Protection")).toHaveLength(0)
  })

  it("renders the badge in german", () => {
    const { getByText } = render(<BuyerProtectionBadge language="de" />)
    expect(getByText("Käuferschutz"))
  })

  it("renders the badge in french", () => {
    const { getByText } = render(<BuyerProtectionBadge language="fr" />)
    expect(getByText("Protection des acheteurs"))
  })

  it("renders the badge in italian", () => {
    const { getByText } = render(<BuyerProtectionBadge language="it" />)
    expect(getByText("Protezione dell’acquirente"))
  })

  it("renders a tooltip on hover", async () => {
    const { findByText, getByText } = render(
      <BuyerProtectionBadge language="en" tooltipContent={<DummyTooltip />} />
    )

    fireEvent.mouseEnter(getByText("Buyer Protection"))
    expect(await findByText("Dummy tooltip"))
  })
})
