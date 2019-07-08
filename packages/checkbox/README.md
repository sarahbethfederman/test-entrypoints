# @lendi-ui/checkbox

This module contains two components: Checkbox and CheckboxGroup. When using `CheckboxGroup`, users should use `CheckboxGroup.Checkbox` as children.

## Installation

```
yarn add @lendi-ui/checkbox
```

## Usage

```jsx
import { Checkbox, CheckboxGroup } from '@lendi-ui/checkbox';
```

```
## Properties

<PropTable>
  <PropTable.Entry name="className" defaultValue=""type="string" description="External classname to override style of the component"/>
  <PropTable.Entry name="isBoxed" type="boolean" defaultValue={false} description="Whether Checkbox is wrapped by box"/>
  <PropTable.Entry name="isChecked" type="boolean" defaultValue={false} description="Whether Checkbox is selected"/>
  <PropTable.Entry name="isDisabled" type="boolean" defaultValue={false} description="Whether Checkbox is unclickable"/>
  <PropTable.Entry name="label" type="string" description="Checkbox display label"/>
  <PropTable.Entry name="onChange" type="(event: React.ChangeEvent<HTMLInputElement>) => void" description="Checkbox onChange function"/>
  <PropTable.Entry name="value" type="string" description="Checkbox value"/>
</PropTable>
```
