require("../assets/index.css")
require("./stories.css")

import { addParameters } from '@storybook/react';

const screens = {
  xxs: '375px',
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1920px'
}

const customViewports = Object.entries(screens).reduce((acc, [key, value]) => {
  acc[key] = {
    name: key,
    styles: {
      width: value,
      height: "100%"
    }
  }
  return acc
}, {})

addParameters({
  viewport: { viewports: customViewports },
})
