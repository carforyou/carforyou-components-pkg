# CAR FOR YOU components

[![Deployment](https://img.shields.io/badge/master-Deployment-blue)](https://master.carforyou-components-pkg.branch.carforyou.ch)

## Usage

```
npm install @carforyou/components
```

In your `tailwind.config.js`, merge your custom configs with the base configuration:

```
const { tailwind } = require("@carforyou/components").default
module.exports = tailwind.withDefaultConfig({ colors: { "tuna": "#4E5154" } })
```

In your `next.config.js`, add the components paths to the purgecss paths, so the component libraries classnames don't get stripped:

```
const glob = require("glob")
glob.sync("node_modules/@carforyou/components/pkg/**/*.js")
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

In order for the components being styled correctly, *your project will need to be able to process CSS modules*. Additionally, you'll have to import global styles like follows:

```
@import '@carforyou/components/assets/index.css';
```

## Setup tailwind in a next.js project

The following describes the very minimal setup required in a vanilla next.js project

```
npm install tailwindcss postcss-import --save-dev
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

`next.config.js`:

```
const withCSS = require("@zeit/next-css");
module.exports = withCSS();
```

`postcss.config.js`

```
const tailwindConfig = require("./tailwind")
module.exports = {
  plugins: [require("postcss-easy-import"), require("tailwindcss")(tailwindConfig), require("autoprefixer")]
};
```

Set up a `tailwind.config.js` as described above.

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
cd carforyou-components-pkg
npm run build

cd carforyou-listings-web
npm link ../carforyou-components-pkg
```

If this throws an [`Invalid hook call`](https://github.com/vercel/next.js/issues/9022) error when integrating with a next.js project, add the following to the webpack config:

```
config.resolve.alias["react"] = path.resolve(__dirname, "node_modules", "react")
config.resolve.alias["react-dom"] = path.resolve(__dirname, "node_modules", "react-dom")
```

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
