# @lendi-ui/fancy-icon

## Adding a new icon

Add the SVG into src/fancy-icons. Be thoughtful with naming, as this will determine the name of the component. For example, the file `computer-bank` will create a SVG component called `computerBank` (note that the kebab-case filename will become a camelCase component).

To add a new alias, navigate to the ./build/alias.json file and add the key as the original file name (in pascal case) and give it an array with all the alias' to add.

When this package is built, an equivalent react component will be created in src/fancy-icons-compiled.

## Installation

```
yarn add @lendi-ui/fancy-icon
```

## Usage example

```jsx
import { Relax } from '@lendi-ui/fancy-icon';

<Relax />;
```

or

```jsx
import Relax from '@lendi-ui/fancy-icon/Relax';

<Relax />;
```

## Properties

```
<PropTable>
  <PropTable.Entry name="className" type="string" description="External classname to override style of the component"/>
  <PropTable.Entry name="height" defaultValue="16px" type={`string`} description="The Icon height"/>
  <PropTable.Entry name="width" defaultValue="16px" type={`string`} description="The Icon width"/>
</PropTable>
```
