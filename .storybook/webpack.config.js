const path = require("path")

module.exports = ({ config }) => {
  config.resolve.extensions.push(".ts", ".tsx")
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("ts-loader"),
      },
      {
        loader: require.resolve("react-docgen-typescript-loader"),
      },
    ],
  })

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
        },
      },
    ],
  });

  return config
}
