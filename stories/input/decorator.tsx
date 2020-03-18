import React, { useState } from "react"

const Wrapper = ({ initialValue, children }) => {
  const [value, setValue] = useState(initialValue)

  return children({ value, setValue })
}

const decorator = initialValue => storyFn => (
  <Wrapper initialValue={initialValue}>{storyFn}</Wrapper>
)

export default decorator
