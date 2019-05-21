# @lendi-ui/auto-complete

A auto-complete component.

## Installation

```
yarn add @lendi-ui/auto-complete
```

## Usage

```
import {auto-complete} from '@lendi-ui/auto-complete';

<AutoComplete dataSource={(input) => Promise.resolve([{
    label: 'AMP Bank',
    value: 'AMP',
  },
  {
    label: 'ANZ',
    value: 'anz',
  }])}/>
```

```
<PropTable>
    <PropTable.Entry name="before" type="React.ReactElement" description="Before icon for AutoComplete"/>
  <PropTable.Entry name="className" type="string" description="External classname to override style of the component"/>
  <PropTable.Entry name="dataSource" required type="(input) => Promise.resolve([{label, value}]) | [{label, value}]"
   description="Datasource - It could resolve to a promise of an array of {label, value} or just an array of {label, value}, where label is searchable"/>
  <PropTable.Entry name="isAutoFocus" type="boolean" defaultValue={false} description="Whether the Input is automatically focused on when form loads."/>
  <PropTable.Entry name="isDisabled" type="boolean" description="Disable AutoComplete"/>
  <PropTable.Entry name="isError" type="boolean" description="Errored AutoComplete"/>
  <PropTable.Entry name="isFullWidth" type="boolean" description="Fullwidth for AutoComplete"/>
  <PropTable.Entry name="isInverse" type="boolean" defaultValue={false} description="Whether the InputButton is inversed"/>
  <PropTable.Entry name="isReadOnly" type="boolean" defaultValue={false} description="Whether the Input is read-only."/>
  <PropTable.Entry name="isRequired" type="boolean" defaultValue={false} description="Whether the Input is required."/>
  <PropTable.Entry name="onSelect" type="(selectedItem: string)=> void" description="Selected item from the datasource"/>
  <PropTable.Entry name="placeholder" type="string" description="Placeholder for AutoComplete"/>
  <PropTable.Entry name="size" type={`"lg" | "md" | "sm"`} defaultValue='md' description="Size to AutoComplete"/>
  <PropTable.Entry name="value" type="string" description="AutoComplete value"/>
</PropTable>
```
