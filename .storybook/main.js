module.exports = {
  stories: ['./stories/**/*.stories.@(js|tsx)'],
  addons: ['@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ]
}
