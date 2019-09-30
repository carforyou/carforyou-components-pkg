import { configure, addDecorator } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"

const req = require.context("../stories", true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
addDecorator(withKnobs)
