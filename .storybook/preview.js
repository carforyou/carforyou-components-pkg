require("./stories.css")

const tailwindConfig = require("../.tailwind/defaultConfig").default

const customViewports = Object.entries(tailwindConfig.theme.screens).reduce(
  (acc, [key, value]) => {
    acc[key] = {
      name: key,
      styles: {
        width: value,
        height: "100%",
      },
    }
    return acc
  },
  {}
)

export const parameters = {
  viewport: { viewports: customViewports },
}
