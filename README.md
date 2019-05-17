# LUI (Lendi UI)

![King Louie](https://vignette.wikia.nocookie.net/ryans-funny-parts/images/7/71/King-louie.jpg/revision/latest?cb=20160613001549)

## Before start with LUI

If it's first time to work on LUI, please make sure that your npm account has been added to `@lendi`, `@lendi-ui`. And log in your npm config user_name and user_email.

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

- If don't have @lendi/generator-create-lui-component installed globally, run this cli at first:

```
yarn global add yo @lendi/generator-create-lui-component@latest
```

- If already have @lendi/generator-create-lui-component module and install it globally, then run:

```
yarn create-component
```

💬 Answer the questions:

```
     _-----_     ╭──────────────────────────╮
    |       |    │      Welcome to the      │
    |--(o)--|    │   create-lui-component   │
   `---------´   │        generator!        │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

? Package name: (e.g. text-input) text-input
```

⏲ Wait for the files to be created and the dependencies to be installed.

🎉 DONE!

After complete a new LUI component, don't forget to add the new component to LUI website. In dir `website/src/utils/DocumentViewer/components.tsx` , import new component from build modules and export it in `scope`. After that, run these cli before commit them:

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
