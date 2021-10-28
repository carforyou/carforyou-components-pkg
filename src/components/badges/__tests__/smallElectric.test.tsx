import React from "react"
import { fireEvent, render } from "@testing-library/react"

import SmallElectricBadge from "../smallElectric"
import { DummyTooltip } from "../../../stories/badges/dummyTooltip"

describe("<SmallElectricBadge>", () => {
  it("renders the badge in english", () => {
    const { getByText } = render(<SmallElectricBadge language="en" />)
    expect(getByText("Electric"))
  })

  it("renders the badge without text", () => {
    const { queryAllByText } = render(
      <SmallElectricBadge language="en" size="small" />
    )
    expect(queryAllByText("Electric")).toHaveLength(0)
  })

  it("renders the badge in german", () => {
    const { getByText } = render(<SmallElectricBadge language="de" />)
    expect(getByText("Elektro"))
  })

  it("renders the badge in french", () => {
    const { getByText } = render(<SmallElectricBadge language="fr" />)
    expect(getByText("Électrique"))
  })

  it("renders the badge in italian", () => {
    const { getByText } = render(<SmallElectricBadge language="it" />)
    expect(getByText("Elettrica"))
  })

  it("renders a tooltip on hover", async () => {
    const { findByText, getByText } = render(
      <SmallElectricBadge language="en" tooltipContent={<DummyTooltip />} />
    )

    fireEvent.mouseEnter(getByText("Electric"))
    expect(await findByText("Dummy tooltip"))
  })
})
