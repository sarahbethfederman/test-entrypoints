# @lendi-ui/logo

Lendi logo. User can change the logo with theme.

## Installation

```
yarn add @lendi-ui/logo
```

## Usage

```
import Logo from '@lendi-ui/logo';
```

```jsx
<Logo />

## Properties

<PropTable>
  <PropTable.Entry name="className" defaultValue=""type={'string'} defaultValue="" description="A className for the logo"/>
  <PropTable.Entry name="height" type={'string'} defaultValue="100px" description="The width of our logo"/>
  <PropTable.Entry name="variant" type={ '"light" | "dark"' } defaultValue="dark" description=""/>
  <PropTable.Entry name="width" type={'string'} defaultValue="160px" description="The width of our logo"/>
  <PropTable.Entry name="isExpanded" type={'boolean'} defaultValue="true" description="The size of our logo"/>
  <PropTable.Entry name="isTeamView" type={'boolean'} defaultValue="false" description="The flag for customer or teamview"/>
</PropTable>
```
