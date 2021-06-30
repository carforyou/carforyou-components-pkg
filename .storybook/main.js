module.exports = {
  stories: ['../src/**/*.stories.@(js|tsx)'],
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
