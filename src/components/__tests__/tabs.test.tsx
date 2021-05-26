import React from "react"
import { act, fireEvent, render, waitFor } from "@testing-library/react"

import Tabs from "../tabs"

const renderWrapper = () =>
  render(
    <Tabs
      tabs={[
        {
          title: "Tab 1",
          renderContent: () => <>Tab 1 Content</>,
        },
        {
          title: "Tab 2",
          renderContent: () => <>Tab 2 Content</>,
        },
        {
          title: "Tab 3",
          renderContent: () => <>Tab 3 Content</>,
        },
        {
          title: "Tab 4",
          renderContent: () => <>Tab 4 Content</>,
        },
      ]}
    />
  )

describe("<Tabs />", () => {
  it("opens first tab by default", () => {
    const { getByText } = renderWrapper()

    expect(getByText("Tab 1 Content"))
  })

  it("allows switching tabs", () => {
    const { getByText } = renderWrapper()

    act(() => {
      fireEvent.click(getByText("Tab 2"))
    })

    return waitFor(() => {
      getByText("Tab 2 Content")
    })
  })
})
