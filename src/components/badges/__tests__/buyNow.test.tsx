import React from "react"
import { fireEvent, render } from "@testing-library/react"

import BuyNowBadge from "../buyNow"
import { DummyTooltip } from "../../../stories/badges/dummyTooltip"

describe("<BuyNowBadge>", () => {
  it("renders the badge in english", () => {
    const { getByText } = render(<BuyNowBadge language="en" />)
    expect(getByText("Buy online"))
  })

  it("renders the badge without text", () => {
    const { queryAllByText } = render(
      <BuyNowBadge language="en" size="small" />
    )
    expect(queryAllByText("Buy online")).toHaveLength(0)
  })

  it("renders the badge in german", () => {
    const { getByText } = render(<BuyNowBadge language="de" />)
    expect(getByText("Online kaufen"))
  })

  it("renders the badge in french", () => {
    const { getByText } = render(<BuyNowBadge language="fr" />)
    expect(getByText("Acheter en ligne"))
  })

  it("renders the badge in italian", () => {
    const { getByText } = render(<BuyNowBadge language="it" />)
    expect(getByText("Acquistare l'auto online"))
  })

  it("renders a tooltip on hover", async () => {
    const { findByText, getByText } = render(
      <BuyNowBadge language="en" tooltipContent={<DummyTooltip />} />
    )

    fireEvent.mouseEnter(getByText("Buy online"))
    expect(await findByText("Dummy tooltip"))
  })
})
