import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"

import VerifiedBadge from "../verified"
import { DummyTooltip } from "../../../stories/badges/dummyTooltip"

describe("<VerifiedBadge>", () => {
  it("renders the badge in english", () => {
    render(<VerifiedBadge language="en" />)
    expect(screen.getByText("Verified"))
  })

  it("renders the badge without text", () => {
    render(<VerifiedBadge language="en" withText={false} />)
    expect(screen.queryAllByText("Verified")).toHaveLength(0)
  })

  it("renders the badge in german", () => {
    render(<VerifiedBadge language="de" />)
    expect(screen.getByText("Verifiziert"))
  })

  it("renders the badge in french", () => {
    render(<VerifiedBadge language="fr" />)
    expect(screen.getByText("Vérifié"))
  })

  it("renders the badge in italian", () => {
    render(<VerifiedBadge language="it" />)
    expect(screen.getByText("Verificato"))
  })

  it("renders a tooltip on hover", async () => {
    render(<VerifiedBadge language="en" tooltipContent={<DummyTooltip />} />)

    fireEvent.mouseEnter(screen.getByText("Verified"))
    expect(await screen.findByText("Dummy tooltip"))
  })
})
