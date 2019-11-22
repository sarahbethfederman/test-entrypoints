# @lendi-ui/icon

## Adding a new icon

Add the SVG into src/icons. Be thoughtful with naming, as this will determine the name of the component. For example, the file `computer-bank` will create a SVG component called `computerBank` (note that the kebab-case filename will become a camelCase component).

To add a new alias, navigate to the ./build/alias.json file and add the key as the original file name (in pascal case) and give it an array with all the alias' to add.

When this package is built, an equivalent react component will be created in src/icons-compiled.

## Installation

```
yarn add @lendi-ui/icon
```

## Usage

```jsx
import { Lock } from '@lendi-ui/icon';

<Lock color="secondary.500" />;
```

## Fill colours not working?

In this case, you will need to add a `fillPath` class to the element in the SVG that needs to be recoloured, this can be determined by inspecting the svg in the browser and changing the fill colour until you find the correct element.

## Properties

```
<PropTable>
  <PropTable.Entry required name="color" type={`string`} description="The Icon color"/>
</PropTable>
```
