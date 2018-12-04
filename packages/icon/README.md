# @lendi-ui/icon

## Adding a new icon

Add the SVG into src/icons. Be thoughtful with naming, as this will determine the name of the component. For example, the file `computer-bank` will create a SVG component called `computerBank` (note that the kebab-case filename will become a camelCase component).

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

## Properties

```
<PropTable>
  <PropTable.Entry required name="color" type={`string`} description="The Icon color"/>
</PropTable>
```
