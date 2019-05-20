# CAR FOR YOU components

[![Storybook](https://img.shields.io/badge/Storybook-UI-3696B9.svg)](https://autoricardo.github.io/carforyou-components-pkg)

## Usage
```
npm install @carforyou/components
```

In your tailwind.js, merge your custom configs with the base configuration:
```
const { tailwind } = require("@carforyou/components").default
tailwind.withDefaultConfig({ colors: { "tuna": "#4E5154" } })
```

You can also access the base config directly if you need to:
```
import { tailwind } from "@carforyou/components"
tailwind.defaultConfig.colors.salmon
```

Then, you can start using the shared React components:
```
import Pagination from "@carforyou/components"
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
cd carforyou-components-pkg/pkg
npm link

cd carforyou-listings-web
npm link @carforyou/components

cd carforyou-components-pkg
npm run build
```

## Guidelines

### SVG files
* Minimize SVG files with `npx svgo`
* Generate React components from the SVGs with `npx @svgr/cli --template lib/svgrTypescriptTemplate.js --ext .ts` and use them inline as components unless you have good reasons not to do so
* Make sure your SVG has a `viewBox`, prefer cropped icons
* Prefer rotating an arrow over having multiple SVGs per direction
* Prefer setting the size over having multiple SVGs per size

## Release a new version
```
npm run release
```
