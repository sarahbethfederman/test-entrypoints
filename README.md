# LUI (Lendi UI)

![King Louie](https://vignette.wikia.nocookie.net/ryans-funny-parts/images/7/71/King-louie.jpg/revision/latest?cb=20160613001549)

## Before start with LUI

If it's first time to work on LUI, please make sure that your npm account has been added to @lendi, @lendi-ui, @auscred. And log in your npm config user_name and user_email.

```
npm login
```

## Getting started

```
yarn
yarn build
yarn test
yarn start
```

## Creating a component

- If don't have @auscred/create-lui-component installed globally, run this cli at first:

```
yarn add global @auscred/create-lui-component@latest --ignore-workspace-root-check
```

- If already have @auscred/create-lui-component module and install it globally, then run:

```
yarn create-component nameOfComponent
```

After complete new LUI component, don't forget to add new component to LUI website. In dir `website/src/utils/DocumentViewer/components.tsx` , import new component from build modules and export it in `scope`. After that, run these cli before commit them:

```
yarn
yarn build
yarn test
```

## Prettier

- In LUI, prettier function has been combined with `git commit -m 'comments'`. It's encouraged to commit WITHOUT `--no-verify`.

## Publishing

Bump the `version` in the package's `package.json` then create a Pull Request and Merge it to the `master` branch. After CI checks, tests and builds your changes, it will publish any packages with an unpublished `version`.

### Versioning

Please use [`semver`](https://semver.org/) and avoid breaking changes where possible in order to prevent churn on consumers of `lendi-ui`.
