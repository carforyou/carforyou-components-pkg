# CAR FOR YOU components

## Usage
```
npm install @carforyou/components
```

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

## Release a new version
```
npm run release
```
