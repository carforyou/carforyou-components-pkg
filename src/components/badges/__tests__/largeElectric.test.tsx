import React from "react"
import { fireEvent, render } from "@testing-library/react"

import LargeElectricBadge from "../largeElectric"
import { DummyTooltip } from "../../../stories/badges/dummyTooltip"

describe("<LargeElectricBadge>", () => {
  it("renders the badge in english", () => {
    const { getByText } = render(<LargeElectricBadge language="en" />)
    expect(getByText("Electric"))
  })

  it("renders the badge without text", () => {
    const { queryAllByText } = render(
      <LargeElectricBadge language="en" withText={false} />
    )
    expect(queryAllByText("Electric")).toHaveLength(0)
  })

  it("renders the badge in german", () => {
    const { getByText } = render(<LargeElectricBadge language="de" />)
    expect(getByText("Elektro"))
  })

  it("renders the badge in french", () => {
    const { getByText } = render(<LargeElectricBadge language="fr" />)
    expect(getByText("Électrique"))
  })

  it("renders the badge in italian", () => {
    const { getByText } = render(<LargeElectricBadge language="it" />)
    expect(getByText("Elettrica"))
  })

  it("renders a tooltip on hover", async () => {
    const { findByText, getByText } = render(
      <LargeElectricBadge language="en" tooltipContent={<DummyTooltip />} />
    )

    fireEvent.mouseEnter(getByText("Electric"))
    expect(await findByText("Dummy tooltip"))
  })
})
