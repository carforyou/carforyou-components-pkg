import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"

import GdbdBadge from "../gdbd"
import { DummyTooltip } from "../../../stories/badges/dummyTooltip"

describe("<GdbdBadge>", () => {
  describe("english", () => {
    it("renders the badge for a fair deal", () => {
      render(<GdbdBadge language="en" score="fair-deal" />)
      expect(screen.getByText("Market price"))
    })

    it("renders the badge for a good deal", () => {
      render(<GdbdBadge language="en" score="good-deal" />)
      expect(screen.getByText("Good value"))
    })

    it("renders the badge for a great deal", () => {
      render(<GdbdBadge language="en" score="great-deal" />)
      expect(screen.getByText("Very good value"))
    })

    it("renders the badge for a high deal", () => {
      render(<GdbdBadge language="en" score="high-deal" />)
      expect(screen.getByText("Above market price"))
    })

    it("renders the badge for not defined", () => {
      render(<GdbdBadge language="en" score="not-defined" />)
      expect(screen.getByText("No price check"))
    })

    it("renders the badge without a score", () => {
      render(<GdbdBadge language="en" score={null} />)
      expect(screen.getByText("No price check"))
    })
  })

  describe("german", () => {
    it("renders the badge for a fair deal", () => {
      render(<GdbdBadge language="de" score="fair-deal" />)
      expect(screen.getByText("Marktpreis"))
    })

    it("renders the badge for a good deal", () => {
      render(<GdbdBadge language="de" score="good-deal" />)
      expect(screen.getByText("Günstig"))
    })

    it("renders the badge for a great deal", () => {
      render(<GdbdBadge language="de" score="great-deal" />)
      expect(screen.getByText("Sehr günstig"))
    })

    it("renders the badge for a high deal", () => {
      render(<GdbdBadge language="de" score="high-deal" />)
      expect(screen.getByText("Über dem Marktpreis"))
    })

    it("renders the badge for not defined", () => {
      render(<GdbdBadge language="de" score="not-defined" />)
      expect(screen.getByText("Kein Preischeck"))
    })

    it("renders the badge without a score", () => {
      render(<GdbdBadge language="de" score={null} />)
      expect(screen.getByText("Kein Preischeck"))
    })
  })

  describe("french", () => {
    it("renders the badge for a fair deal", () => {
      render(<GdbdBadge language="fr" score="fair-deal" />)
      expect(screen.getByText("Prix du marché"))
    })

    it("renders the badge for a good deal", () => {
      render(<GdbdBadge language="fr" score="good-deal" />)
      expect(screen.getByText("Bon prix"))
    })

    it("renders the badge for a great deal", () => {
      render(<GdbdBadge language="fr" score="great-deal" />)
      expect(screen.getByText("Meilleur prix"))
    })

    it("renders the badge for a high deal", () => {
      render(<GdbdBadge language="fr" score="high-deal" />)
      expect(screen.getByText("Au-dessus du marché"))
    })

    it("renders the badge for not defined", () => {
      render(<GdbdBadge language="fr" score="not-defined" />)
      expect(screen.getByText("Prix non comparable"))
    })

    it("renders the badge without a score", () => {
      render(<GdbdBadge language="fr" score={null} />)
      expect(screen.getByText("Prix non comparable"))
    })
  })

  describe("italian", () => {
    it("renders the badge for a fair deal", () => {
      render(<GdbdBadge language="it" score="fair-deal" />)
      expect(screen.getByText("Prezzo di mercato"))
    })

    it("renders the badge for a good deal", () => {
      render(<GdbdBadge language="it" score="good-deal" />)
      expect(screen.getByText("Sotto valore di mercato"))
    })

    it("renders the badge for a great deal", () => {
      render(<GdbdBadge language="it" score="great-deal" />)
      expect(screen.getByText("Vantaggioso"))
    })

    it("renders the badge for a high deal", () => {
      render(<GdbdBadge language="it" score="high-deal" />)
      expect(screen.getByText("Sopra valore di mercato"))
    })

    it("renders the badge for not defined", () => {
      render(<GdbdBadge language="it" score="not-defined" />)
      expect(screen.getByText("Prezzo non comparabile"))
    })

    it("renders the badge without a score", () => {
      render(<GdbdBadge language="it" score={null} />)
      expect(screen.getByText("Prezzo non comparabile"))
    })
  })

  describe("variations", () => {
    it("renders the badge without text", () => {
      render(<GdbdBadge language="en" withText={false} />)
      expect(screen.queryAllByText("No price check")).toHaveLength(0)
    })

    it("renders a tooltip on hover", async () => {
      render(<GdbdBadge language="en" tooltipContent={<DummyTooltip />} />)

      fireEvent.mouseEnter(screen.getByText("No price check"))
      expect(await screen.findByText("Dummy tooltip"))
    })
  })
})
