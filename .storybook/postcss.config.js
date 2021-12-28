const glob = require("glob")

const purgeCssPaths = glob
.sync("../src/components/**/*", {
  ignore: ["../src/**/__*__/**/*"],
  nodir: true,
  absolute: true,
  cwd: __dirname
})

const tailwindExtractor = (content) => {
  return content.match(/[A-Za-z0-9-_:/]+(?<!:)/g) || []
}

module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("@fullhuman/postcss-purgecss")({
      content: purgeCssPaths,
      extractors: [
        {
          extensions: ["jsx", "tsx", "js", "ts"],
          extractor: tailwindExtractor,
        },
      ],
    }),
    require("autoprefixer")
  ]
}
