# LUI (Lendi UI)

![King Louie](https://vignette.wikia.nocookie.net/ryans-funny-parts/images/7/71/King-louie.jpg/revision/latest?cb=20160613001549)

## Getting started 

```
yarn
yarn build
yarn test
yarn start
```

## Creating a component

```
npx create-lui-component (atom|molecule) PackageName
```

## Publishing

Bump the `version` in the package's `package.json` then create a Pull Request and Merge it to the `master` branch. After CI checks, tests and builds your changes, it will publish any packages with an unpublished `version`.

### Versioning

Please use [`semver`](https://semver.org/) and avoid breaking changes where possible in order to prevent churn on consumers of `lendi-ui`.