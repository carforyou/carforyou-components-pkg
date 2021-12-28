const tailwindConfig = require("./tailwind.config.cjs")

module.exports = {
  plugins: [
    require("postcss-easy-import"),
    require("tailwindcss")(tailwindConfig),
    require("autoprefixer"),
  ],
}
