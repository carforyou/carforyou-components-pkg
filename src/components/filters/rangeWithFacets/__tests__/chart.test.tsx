import React from "react"
import { render, screen } from "@testing-library/react"

import Chart from "../chart"

const mockFacets = {
  "*-1000": 500,
  "22500-25000": 50,
  "1000-2000": 200,
  "1000000-*": 300,
  "2000-22500": 130,
}

const mockScale = [
  {
    from: null,
    to: 1000,
    key: "*-1000",
  },
  {
    from: 1000,
    to: 2000,
    key: "1000-2000",
  },
  {
    from: 2000,
    to: 22500,
    key: "2000-22500",
  },
  {
    from: 22500,
    to: 25000,
    key: "22500-25000",
  },
  {
    from: 1000000,
    to: null,
    key: "1000000-*",
  },
]

describe("<Chart/>", () => {
  it("renders nothing when facets is not defined (backend failure)", () => {
    const view = render(
      <Chart facets={undefined} scale={mockScale} range={[2, 4]} />
    )
    expect(view.container).toBeEmptyDOMElement()
  })

  it("renders a bar for each facet", () => {
    render(<Chart facets={mockFacets} scale={mockScale} range={[2, 4]} />)
    expect(screen.getAllByTestId("facet")).toHaveLength(5)
  })

  it("shows the bars outside of the range as grey", () => {
    render(<Chart facets={mockFacets} scale={mockScale} range={[1, 3]} />)
    expect(screen.getAllByTestId("facet")[0]).toHaveClass("bg-grey-1")
    expect(screen.getAllByTestId("facet")[1]).toHaveClass("bg-teal")
    expect(screen.getAllByTestId("facet")[2]).toHaveClass("bg-teal")
    expect(screen.getAllByTestId("facet")[3]).toHaveClass("bg-grey-1")
    expect(screen.getAllByTestId("facet")[4]).toHaveClass("bg-grey-1")
  })

  it("scales the bar depending on the facet", () => {
    render(<Chart facets={mockFacets} scale={mockScale} range={[1, 3]} />)
    // max value has 1
    expect(screen.getAllByTestId("facet")[0]).toHaveStyle({
      transform: "scaleY(1)",
    })
    expect(screen.getAllByTestId("facet")[1]).toHaveStyle({
      transform: "scaleY(0.4)",
    })
    expect(screen.getAllByTestId("facet")[2]).toHaveStyle({
      transform: "scaleY(0.26)",
    })
    expect(screen.getAllByTestId("facet")[3]).toHaveStyle({
      transform: "scaleY(0.1)",
    })
    expect(screen.getAllByTestId("facet")[4]).toHaveStyle({
      transform: "scaleY(0.6)",
    })
  })

  it("if all facets are 0, scale should be 0", () => {
    render(
      <Chart
        facets={{
          "*-1000": 0,
          "22500-25000": 0,
          "1000-2000": 0,
          "1000000-*": 0,
          "2000-22500": 0,
        }}
        scale={mockScale}
        range={[1, 3]}
      />
    )

    screen.getAllByTestId("facet").forEach((facet) =>
      expect(facet).toHaveStyle({
        transform: "scaleY(0)",
      })
    )
  })
})
