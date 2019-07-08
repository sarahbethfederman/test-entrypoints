# @lendi-ui/toggle-switch

A toggle switch component.

## Installation

```
yarn add @lendi-ui/toggle-switch
```

## Usage

```jsx
import ToggleSwitch from '@lendi-ui/toggle-switch';

<ToggleSwitch />;

## Properties

<PropTable>
  <PropTable.Entry name="className" defaultValue="" type="string" description="Class to give to the ToggleSwitch"/>
  <PropTable.Entry name="label" type="string" description="ToggleSwitch display label"/>
  <PropTable.Entry name="isBoxed" type="boolean" defaultValue={false} description="Whether ToggleSwitch is wrapped by box"/>
  <PropTable.Entry name="isChecked" type="boolean" defaultValue={false} description="Whether ToggleSwitch is off or on"/>
  <PropTable.Entry name="isDisabled" type="boolean" defaultValue={false} description="Whether ToggleSwitch is unclickable"/>
  <PropTable.Entry name="isError" type="boolean" defaultValue={false} description="Whether ToggleSwitch is showing an error state"/>
  <PropTable.Entry name="isLoading" type="boolean" defaultValue={false} description="Whether ToggleSwitch is showing a loading state"/>
  <PropTable.Entry name="name" type="string" description="ToggleSwitch name"/>
  <PropTable.Entry name="onChange" type="(event: React.ChangeEvent<HTMLInputElement>) => void" description="Checkbox ToggleSwitch function"/>
  <PropTable.Entry name="size" type={`"sm" | "md"`} description="ToggleSwitch size variants"/>
  <PropTable.Entry name="value" type="string" description="ToggleSwitch value"/>
</PropTable>
```
