import React from "react"
import { fireEvent, render } from "@testing-library/react"

import VerifiedBadge from "../verified"
import { DummyTooltip } from "../../../stories/badges/dummyTooltip"

describe("<VerifiedBadge>", () => {
  it("renders the badge in english", () => {
    const { getByText } = render(<VerifiedBadge language="en" />)
    expect(getByText("Verified"))
  })

  it("renders the badge without text", () => {
    const { queryAllByText } = render(
      <VerifiedBadge language="en" withText={false} />
    )
    expect(queryAllByText("Verified")).toHaveLength(0)
  })

  it("renders the badge in german", () => {
    const { getByText } = render(<VerifiedBadge language="de" />)
    expect(getByText("Verifiziert"))
  })

  it("renders the badge in french", () => {
    const { getByText } = render(<VerifiedBadge language="fr" />)
    expect(getByText("Vérifié"))
  })

  it("renders the badge in italian", () => {
    const { getByText } = render(<VerifiedBadge language="it" />)
    expect(getByText("Verificato"))
  })

  it("renders a tooltip on hover", async () => {
    const { findByText, getByText } = render(
      <VerifiedBadge language="en" tooltipContent={<DummyTooltip />} />
    )

    fireEvent.mouseEnter(getByText("Verified"))
    expect(await findByText("Dummy tooltip"))
  })
})
