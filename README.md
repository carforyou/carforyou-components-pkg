# CAR FOR YOU components

[![Storybook](https://img.shields.io/badge/Storybook-UI-3696B9.svg)](https://carforyou.github.io/carforyou-components-pkg) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Usage

```
npm install @carforyou/components
```

In your `tailwind.js`, merge your custom configs with the base configuration:

```
const { tailwind } = require("@carforyou/components").default
module.exports = tailwind.withDefaultConfig({ colors: { "tuna": "#4E5154" } })
```

In your `next.config.js`, add the components paths to the purgecss paths, so the component libraries classnames don't get stripped:

```
const components = require("@carforyou/components").default
purgeCssPaths.concat(components.getComponentPaths())
```

You can also access the base config directly if you need to:

Note: Be careful with loading the tailwind configuration, as tailwind uses [lodash](https://bundlephobia.com/result?p=lodash), which might significantly increase your bundle size.

```
import { tailwind } from "@carforyou/components"
tailwind.defaultConfig.colors.salmon
```

Then, you can start using the shared React components:

```
import  { Pagination } from "@carforyou/components"
```

You can also import styles and assets:

```
@import '@carforyou/components/assets/index.css';
```

## Setup tailwind in a next.js project

The following describes the very minimal setup required in a vanilla next.js project

```
npm install tailwindcss
npm install -D @fullhuman/postcss-purgecss postcss-easy-import
```

`tailwind.css`:

```
@import "tailwindcss/base";
@import "tailwindcss/utilities";
```

Import this CSS file in `_app`:

```
import "../tailwind.css";
```

Create a `postcss.config.js`:

```
const glob = require("glob")
const components = require("@carforyou/components").default

const purgeCssPaths = glob
  .sync("src/**/*", {
    ignore: "**/__*__/**",
    nodir: true,
  })
  .concat(components.getComponentPaths())

const tailwindExtractor = (content) => {
  return content.match(/[A-Za-z0-9-_:/]+(?<!:)/g) || []
}

module.exports = {
  plugins: {
    "postcss-easy-import": {},
    tailwindcss: {},
    "@fullhuman/postcss-purgecss": {
      content: purgeCssPaths,
      extractors: [
        {
          extensions: ["jsx", "tsx", "js", "ts"],
          extractor: tailwindExtractor,
        },
      ]
    },
    autoprefixer: {},
  },
}

```

Set up a `tailwind.config.js`:

````
const { tailwind } = require("@carforyou/components").default

const customTailwindConfig = {
  theme: {}
}

module.exports = tailwind.withDefaultConfig(customTailwindConfig)
```

## Development

To work on the components locally in Storybook:

```
npm run dev
```

To build the package and Storybook as static assets:

```
npm run build
```

You can link your local npm package to integrate it with any local project:

```
npm run link -- <relative_path_to_project>
```

This ensures that projects react is linked back to build package and prevents errors due to duplicate react instances.

## Guidelines

### SVG files

- Minimize SVG files with `npx svgo`
- Generate React components from the SVGs with `npx @svgr/cli --template lib/svgrTypescriptTemplate.js --ext .ts` and use them inline as components unless you have good reasons not to do so
- Make sure your SVG has a `viewBox`, prefer cropped icons
- Prefer rotating an arrow over having multiple SVGs per direction
- Prefer setting the size over having multiple SVGs per size

## Release a new version

New versions are released on the ci using semantic-release as soon as you merge into master. Please
make sure your merge commit message adheres to the corresponding conventions.
