const path = require("path")

module.exports = ({ config }) => {
  // Exclude modules from storybooks default CSS loader and inject our own
  // https://github.com/storybookjs/storybook/issues/6055#issuecomment-521046352
  config.module.rules.find(
    rule => rule.test.toString() === '/\\.css$/',
  ).exclude = /\.module\.css$/;

  config.module.rules.push({
    test: /\.module\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
        },
      },
    ],
  });

  // Storybook does not yet allow customizing the postcss config, so we push our own
  // https://github.com/storybooks/storybook/blob/a52efc786172527b51b455f82cc5a7ed73246385/lib/core/src/server/preview/base-webpack.config.js
  config.module.rules.push({
    include: path.resolve(__dirname, "../"),
    test: /\.css$/,
    use: [
      {
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            config: path.resolve(__dirname),
          },
        },
      },
    ],
  })

  return config
}
