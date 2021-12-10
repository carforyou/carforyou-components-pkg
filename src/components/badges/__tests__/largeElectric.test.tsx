import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"

import { DummyTooltip } from "./dummyTooltip"
import LargeElectricBadge from "../largeElectric"

describe("<LargeElectricBadge>", () => {
  it("renders the badge in english", () => {
    render(<LargeElectricBadge language="en" />)
    expect(screen.getByText("Electric"))
  })

  it("renders the badge without text", () => {
    render(<LargeElectricBadge language="en" withText={false} />)
    expect(screen.queryAllByText("Electric")).toHaveLength(0)
  })

  it("renders the badge in german", () => {
    render(<LargeElectricBadge language="de" />)
    expect(screen.getByText("Elektro"))
  })

  it("renders the badge in french", () => {
    render(<LargeElectricBadge language="fr" />)
    expect(screen.getByText("Électrique"))
  })

  it("renders the badge in italian", () => {
    render(<LargeElectricBadge language="it" />)
    expect(screen.getByText("Elettrica"))
  })

  it("renders a tooltip on hover", async () => {
    render(
      <LargeElectricBadge language="en" tooltipContent={<DummyTooltip />} />
    )

    fireEvent.mouseEnter(screen.getByText("Electric"))
    expect(await screen.findByText("Dummy tooltip"))
  })
})
