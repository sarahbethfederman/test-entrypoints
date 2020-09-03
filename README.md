# LUI (Lendi UI)

https://lendi.design [![Build status](https://badge.buildkite.com/e0b109f38e66234d41546957bd37139b78445efab56659266d.svg)](https://buildkite.com/lendi-pty-ltd/lui)

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

## Publishing

Changes must include a changeset. Run `yarn changeset` after your changes. This will ask you what kind of change you made (major/minor/patch) and then ask for a description of your changes. Commit the resulting file before making a PR.

If your changes won't result in any changes to packages (ex, repo config) then add an empty changeset with `yarn changeset --empty`

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

### Versioning

Please use [`semver`](https://semver.org/) and avoid breaking changes where possible in order to prevent churn on consumers of `lendi-ui`.
