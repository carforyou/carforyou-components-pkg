import React from "react"
import { render } from "@testing-library/react"

import Chart from "../chart"

const mockFacets = {
  "*-1000": 500,
  "1000-2000": 200,
  "2000-22500": 130,
  "22500-25000": 50,
  "1000000-*": 300,
}

describe("<Chart/>", () => {
  it("renders nothing when facets is not defined (backend failure)", () => {
    const screen = render(<Chart facets={undefined} range={[2, 4]} />)
    expect(screen.container.firstChild).toBeNull()
  })

  it("renders a bar for each facet", () => {
    const screen = render(<Chart facets={mockFacets} range={[2, 4]} />)
    expect(screen.getAllByTestId("facet")).toHaveLength(5)
  })

  it("shows the bars outside of the range as grey", () => {
    const screen = render(<Chart facets={mockFacets} range={[1, 3]} />)
    expect(screen.getAllByTestId("facet")[0]).toHaveClass("bg-grey-1")
    expect(screen.getAllByTestId("facet")[1]).toHaveClass("bg-teal")
    expect(screen.getAllByTestId("facet")[2]).toHaveClass("bg-teal")
    expect(screen.getAllByTestId("facet")[3]).toHaveClass("bg-grey-1")
    expect(screen.getAllByTestId("facet")[4]).toHaveClass("bg-grey-1")
  })

  it("scales the bar depending on the facet", () => {
    const screen = render(<Chart facets={mockFacets} range={[1, 3]} />)
    // max value has 1
    expect(screen.getAllByTestId("facet")[0]).toHaveStyle({
      transform: "scaleY(1)",
    })
    expect(screen.getAllByTestId("facet")[1]).toHaveStyle({
      transform: "scaleY(0.4)",
    })
  })
})
