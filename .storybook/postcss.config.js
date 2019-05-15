const tailwindConfig = require("../src/tailwind.config.js")

module.exports = {
  plugins: [
    require("tailwindcss")(tailwindConfig),
    require("autoprefixer")
  ]
}
