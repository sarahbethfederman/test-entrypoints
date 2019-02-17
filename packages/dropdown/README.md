# @lendi-ui/inline-dropdown

A <Dropdown> component.

## Installation

```
yarn add @lendi-ui/inline-dropdown
```

## Usage

```jsx
import Dropdown from '@lendi-ui/inline-dropdown';
(items = [
  {
    value: '1',
    label: '5 years',
  },
  {
    value: '2',
    label: '10 years',
  },
  {
    value: '3',
    label: '15 years',
  },
  {
    value: '4',
    label: '20 years',
  },
  {
    value: '5',
    label: '25 years',
  },
]),
  <Dropdown size={{ mobile: 'sm', tablet: 'md', desktop: 'lg' }} items={items} isFullWidth={true} />;
```

## Properties

```
<PropTable>
  <PropTable.Entry name="size" type={'"lg" | "md" | "sm"'} defaultValue="md" description="the inline-dropdown size"/>
  <PropTable.Entry name="items" required type="[{value: string, label: string}]" description="an object array with 'value' and 'label' that display in this component"/>
  <PropTable.Entry name="isFullWidth" type={'"true | false"'} defaultValue="true" description="the dropdown is intended to use the full width of the container"/>
</PropTable>
```
