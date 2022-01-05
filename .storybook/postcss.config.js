/* eslint-disable @typescript-eslint/no-var-requires */
const tailwindConfig = require("../.tailwind/defaultConfig").default

module.exports = {
  plugins: [require("postcss-import"), require("tailwindcss")(tailwindConfig), require("autoprefixer")],
}
