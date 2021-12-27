/* eslint-disable @typescript-eslint/no-var-requires */
const glob = require("glob")

const purgeCssPaths = glob
.sync("./src/components/**/*", {
  ignore: "**/__*__/**",
  nodir: true,
})

const tailwindExtractor = (content) => {
  return content.match(/[A-Za-z0-9-_:/]+(?<!:)/g) || []
}

module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    // "@fullhuman/postcss-purgecss": {
    //   content: purgeCssPaths,
    //   extractors: [
    //     {
    //       extensions: ["jsx", "tsx", "js", "ts"],
    //       extractor: tailwindExtractor,
    //     },
    //   ],
    // },
    // autoprefixer: {},
  },
}
