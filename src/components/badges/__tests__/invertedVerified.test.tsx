import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"

import InvertedVerifiedBadge from "../invertedVerified"
import { DummyTooltip } from "../../../stories/badges/dummyTooltip"

describe("<InvertedVerifiedBadge>", () => {
  it("renders the badge in english", () => {
    render(<InvertedVerifiedBadge language="en" />)
    expect(screen.getByText("Verified"))
  })

  it("renders the badge without text", () => {
    render(<InvertedVerifiedBadge language="en" withText={false} />)
    expect(screen.queryAllByText("Verified")).toHaveLength(0)
  })

  it("renders the badge in german", () => {
    render(<InvertedVerifiedBadge language="de" />)
    expect(screen.getByText("Verifiziert"))
  })

  it("renders the badge in french", () => {
    render(<InvertedVerifiedBadge language="fr" />)
    expect(screen.getByText("Vérifié"))
  })

  it("renders the badge in italian", () => {
    render(<InvertedVerifiedBadge language="it" />)
    expect(screen.getByText("Verificato"))
  })

  it("renders a tooltip on hover", async () => {
    render(
      <InvertedVerifiedBadge language="en" tooltipContent={<DummyTooltip />} />
    )

    fireEvent.mouseEnter(screen.getByText("Verified"))
    expect(await screen.findByText("Dummy tooltip"))
  })
})
