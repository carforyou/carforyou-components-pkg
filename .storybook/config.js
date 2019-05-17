import { configure } from "@storybook/react"

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /\.stories\.js$/)
function loadStories() {
  console.log("load stories")
  console.log(req.keys())
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
console.log("loaded stories")
