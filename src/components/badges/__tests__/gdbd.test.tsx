import React from "react"
import { fireEvent, render } from "@testing-library/react"

import GdbdBadge from "../gdbd"
import { DummyTooltip } from "../../../stories/badges/dummyTooltip"

describe("<GdbdBadge>", () => {
  describe("english", () => {
    it("renders the badge for a fair deal", () => {
      const { getByText } = render(
        <GdbdBadge language="en" score="fair-deal" />
      )
      expect(getByText("Market price"))
    })

    it("renders the badge for a good deal", () => {
      const { getByText } = render(
        <GdbdBadge language="en" score="good-deal" />
      )
      expect(getByText("Good value"))
    })

    it("renders the badge for a great deal", () => {
      const { getByText } = render(
        <GdbdBadge language="en" score="great-deal" />
      )
      expect(getByText("Very good value"))
    })

    it("renders the badge for a high deal", () => {
      const { getByText } = render(
        <GdbdBadge language="en" score="high-deal" />
      )
      expect(getByText("Above market price"))
    })

    it("renders the badge for not defined", () => {
      const { getByText } = render(
        <GdbdBadge language="en" score="not-defined" />
      )
      expect(getByText("No price check"))
    })

    it("renders the badge without a score", () => {
      const { getByText } = render(<GdbdBadge language="en" score={null} />)
      expect(getByText("No price check"))
    })
  })

  describe("german", () => {
    it("renders the badge for a fair deal", () => {
      const { getByText } = render(
        <GdbdBadge language="de" score="fair-deal" />
      )
      expect(getByText("Marktpreis"))
    })

    it("renders the badge for a good deal", () => {
      const { getByText } = render(
        <GdbdBadge language="de" score="good-deal" />
      )
      expect(getByText("Günstig"))
    })

    it("renders the badge for a great deal", () => {
      const { getByText } = render(
        <GdbdBadge language="de" score="great-deal" />
      )
      expect(getByText("Sehr günstig"))
    })

    it("renders the badge for a high deal", () => {
      const { getByText } = render(
        <GdbdBadge language="de" score="high-deal" />
      )
      expect(getByText("Über dem Marktpreis"))
    })

    it("renders the badge for not defined", () => {
      const { getByText } = render(
        <GdbdBadge language="de" score="not-defined" />
      )
      expect(getByText("Kein Preischeck"))
    })

    it("renders the badge without a score", () => {
      const { getByText } = render(<GdbdBadge language="de" score={null} />)
      expect(getByText("Kein Preischeck"))
    })
  })

  describe("french", () => {
    it("renders the badge for a fair deal", () => {
      const { getByText } = render(
        <GdbdBadge language="fr" score="fair-deal" />
      )
      expect(getByText("Prix du marché"))
    })

    it("renders the badge for a good deal", () => {
      const { getByText } = render(
        <GdbdBadge language="fr" score="good-deal" />
      )
      expect(getByText("Bon prix"))
    })

    it("renders the badge for a great deal", () => {
      const { getByText } = render(
        <GdbdBadge language="fr" score="great-deal" />
      )
      expect(getByText("Meilleur prix"))
    })

    it("renders the badge for a high deal", () => {
      const { getByText } = render(
        <GdbdBadge language="fr" score="high-deal" />
      )
      expect(getByText("Au-dessus du marché"))
    })

    it("renders the badge for not defined", () => {
      const { getByText } = render(
        <GdbdBadge language="fr" score="not-defined" />
      )
      expect(getByText("Prix non comparable"))
    })

    it("renders the badge without a score", () => {
      const { getByText } = render(<GdbdBadge language="fr" score={null} />)
      expect(getByText("Prix non comparable"))
    })
  })

  describe("italian", () => {
    it("renders the badge for a fair deal", () => {
      const { getByText } = render(
        <GdbdBadge language="it" score="fair-deal" />
      )
      expect(getByText("Prezzo di mercato"))
    })

    it("renders the badge for a good deal", () => {
      const { getByText } = render(
        <GdbdBadge language="it" score="good-deal" />
      )
      expect(getByText("Sotto valore di mercato"))
    })

    it("renders the badge for a great deal", () => {
      const { getByText } = render(
        <GdbdBadge language="it" score="great-deal" />
      )
      expect(getByText("Vantaggioso"))
    })

    it("renders the badge for a high deal", () => {
      const { getByText } = render(
        <GdbdBadge language="it" score="high-deal" />
      )
      expect(getByText("Sopra valore di mercato"))
    })

    it("renders the badge for not defined", () => {
      const { getByText } = render(
        <GdbdBadge language="it" score="not-defined" />
      )
      expect(getByText("Prezzo non comparabile"))
    })

    it("renders the badge without a score", () => {
      const { getByText } = render(<GdbdBadge language="it" score={null} />)
      expect(getByText("Prezzo non comparabile"))
    })
  })

  describe("variations", () => {
    it("renders the badge without text", () => {
      const { queryAllByText } = render(
        <GdbdBadge language="en" size="small" />
      )
      expect(queryAllByText("No price check")).toHaveLength(0)
    })

    it("renders a tooltip on hover", async () => {
      const { findByText, getByText } = render(
        <GdbdBadge language="en" tooltipContent={<DummyTooltip />} />
      )

      fireEvent.mouseEnter(getByText("No price check"))
      expect(await findByText("Dummy tooltip"))
    })
  })
})
