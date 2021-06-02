import React from "react"
import { fireEvent, render } from "@testing-library/react"

import MbgBadge from "../mbg"
import { DummyTooltip } from "../../../stories/badges/dummyTooltip"

describe("<MbgBadge>", () => {
  it("renders the badge in english", () => {
    const { getByText } = render(<MbgBadge language="en" />)
    expect(getByText("Money-Back-Guarantee"))
  })

  it("renders the badge without text", () => {
    const { queryAllByText } = render(<MbgBadge language="en" size="small" />)
    expect(queryAllByText("Money-Back-Guarantee")).toHaveLength(0)
  })

  it("renders the badge in german", () => {
    const { getByText } = render(<MbgBadge language="de" />)
    expect(getByText("Geld-Zurück-Garantie"))
  })

  it("renders the badge in french", () => {
    const { getByText } = render(<MbgBadge language="fr" />)
    expect(getByText("Garantie de remboursement"))
  })

  it("renders the badge in italian", () => {
    const { getByText } = render(<MbgBadge language="it" />)
    expect(getByText("Garanzia di rimborso"))
  })

  it("renders a tooltip on hover", async () => {
    const { findByText, getByText } = render(
      <MbgBadge language="en" tooltipContent={<DummyTooltip />} />
    )

    fireEvent.mouseEnter(getByText("Money-Back-Guarantee"))
    expect(await findByText("Dummy tooltip"))
  })
})
