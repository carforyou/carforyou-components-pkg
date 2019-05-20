const path = require("path")

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("awesome-typescript-loader")
      },
      {
        loader: require.resolve("react-docgen-typescript-loader")
      }
    ]
  })
  config.resolve.extensions.push(".ts", ".tsx")

  // Storybook does not yet allow customizing the postcss config, so we push our own
  // https://github.com/storybooks/storybook/blob/a52efc786172527b51b455f82cc5a7ed73246385/lib/core/src/server/preview/base-webpack.config.js
  config.module.rules.push({
    include: path.resolve(__dirname, "../"),
    test: /\.css$/,
    use: [
      {
        loader: "postcss-loader",
        options: {
          config: {
            path: ".storybook/"
          }
        }
      }
    ]
  })

  return config
}
