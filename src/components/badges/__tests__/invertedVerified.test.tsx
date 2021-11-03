import React from "react"
import { fireEvent, render } from "@testing-library/react"

import InvertedVerifiedBadge from "../invertedVerified"
import { DummyTooltip } from "../../../stories/badges/dummyTooltip"

describe("<InvertedVerifiedBadge>", () => {
  it("renders the badge in english", () => {
    const { getByText } = render(<InvertedVerifiedBadge language="en" />)
    expect(getByText("Verified"))
  })

  it("renders the badge without text", () => {
    const { queryAllByText } = render(
      <InvertedVerifiedBadge language="en" size="small" />
    )
    expect(queryAllByText("Verified")).toHaveLength(0)
  })

  it("renders the badge in german", () => {
    const { getByText } = render(<InvertedVerifiedBadge language="de" />)
    expect(getByText("Verifiziert"))
  })

  it("renders the badge in french", () => {
    const { getByText } = render(<InvertedVerifiedBadge language="fr" />)
    expect(getByText("Vérifié"))
  })

  it("renders the badge in italian", () => {
    const { getByText } = render(<InvertedVerifiedBadge language="it" />)
    expect(getByText("Verificato"))
  })

  it("renders a tooltip on hover", async () => {
    const { findByText, getByText } = render(
      <InvertedVerifiedBadge language="en" tooltipContent={<DummyTooltip />} />
    )

    fireEvent.mouseEnter(getByText("Verified"))
    expect(await findByText("Dummy tooltip"))
  })
})
