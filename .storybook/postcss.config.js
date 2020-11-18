const tailwindConfig = require("./tailwind/defaultConfig").default

module.exports = {
  plugins: [
    require("postcss-easy-import"),
    require("tailwindcss")(tailwindConfig),
    require("autoprefixer")
  ]
}