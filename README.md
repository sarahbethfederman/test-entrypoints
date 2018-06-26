# LUI (Lendi UI)

![King Louie](https://vignette.wikia.nocookie.net/ryans-funny-parts/images/7/71/King-louie.jpg/revision/latest?cb=20160613001549)

## Getting started 
1. `npx lerna bootstrap --hoist`
2. `yarn install`
3. `yarn storybook`

## Creating a component (TODO)

## Versioning a component
1. Login to our private registry under the auscred scope - `npm login --scope=@auscred` 
2. If this is a new component, expose it to Lerna - `npx lerna bootstrap`
3. Publish the component. Lerna will ask you if it's a major/minor/patch change. Choose the appropriate option `npx lerna publish`