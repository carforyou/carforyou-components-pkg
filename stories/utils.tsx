import React, { useState } from "react"
import { withInfo } from "@storybook/addon-info"

const ValueWrapper = ({ initialValue, children }) => {
  const [value, setValue] = useState(initialValue)

  return children({ value, setValue })
}

export const ControlledInputDecorator = initialValue => storyFn => (
  <ValueWrapper initialValue={initialValue}>{storyFn}</ValueWrapper>
)

const withInfoStyle = {
  header: {
    h1: {
      fontsize: "24px",
      color: "salmon",
      fontWeight: "400"
    }
  }
}

export const wInfo = text =>
  withInfo({ inline: true, source: false, styles: withInfoStyle, text })
