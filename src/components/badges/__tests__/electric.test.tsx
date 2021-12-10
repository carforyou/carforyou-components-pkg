import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"

import ElectricBadge from "../electric"
import { DummyTooltip } from "./dummyTooltip"

describe("<ElectricBadge>", () => {
  it("renders the badge in english", () => {
    render(<ElectricBadge language="en" />)
    expect(screen.getByText("Electric"))
  })

  it("renders the badge without text", () => {
    render(<ElectricBadge language="en" withText={false} />)
    expect(screen.queryAllByText("Electric")).toHaveLength(0)
  })

  it("renders the badge in german", () => {
    render(<ElectricBadge language="de" />)
    expect(screen.getByText("Elektro"))
  })

  it("renders the badge in french", () => {
    render(<ElectricBadge language="fr" />)
    expect(screen.getByText("Électrique"))
  })

  it("renders the badge in italian", () => {
    render(<ElectricBadge language="it" />)
    expect(screen.getByText("Elettrica"))
  })

  it("renders a tooltip on hover", async () => {
    render(<ElectricBadge language="en" tooltipContent={<DummyTooltip />} />)

    fireEvent.mouseEnter(screen.getByText("Electric"))
    expect(await screen.findByText("Dummy tooltip"))
  })
})
