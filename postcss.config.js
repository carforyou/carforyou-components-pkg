const tailwindConfig = require("./.tailwind/defaultConfig").default

module.exports = {
  plugins: [require("tailwindcss")(tailwindConfig)],
}
