import React from "react"
import { fireEvent, render } from "@testing-library/react"

import ElectricBadge from "../electric"
import { DummyTooltip } from "../../../stories/badges/dummyTooltip"

describe("<ElectricBadge>", () => {
  it("renders the badge in english", () => {
    const { getByText } = render(<ElectricBadge language="en" />)
    expect(getByText("Electric"))
  })

  it("renders the badge without text", () => {
    const { queryAllByText } = render(
      <ElectricBadge language="en" size="small" />
    )
    expect(queryAllByText("Electric")).toHaveLength(0)
  })

  it("renders the badge in german", () => {
    const { getByText } = render(<ElectricBadge language="de" />)
    expect(getByText("Elektro"))
  })

  it("renders the badge in french", () => {
    const { getByText } = render(<ElectricBadge language="fr" />)
    expect(getByText("Électrique"))
  })

  it("renders the badge in italian", () => {
    const { getByText } = render(<ElectricBadge language="it" />)
    expect(getByText("Elettrica"))
  })

  it("renders a tooltip on hover", async () => {
    const { findByText, getByText } = render(
      <ElectricBadge language="en" tooltipContent={<DummyTooltip />} />
    )

    fireEvent.mouseEnter(getByText("Electric"))
    expect(await findByText("Dummy tooltip"))
  })
})
