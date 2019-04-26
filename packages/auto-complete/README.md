# @lendi-ui/auto-complete

A auto-complete component.

## Installation

```
yarn add @lendi-ui/auto-complete
```

## Usage

```
import {auto-complete} from '@lendi-ui/auto-complete';

<AutoComplete dataSource={(input) => Promise.resolve(['abc', 'asd'])}/>
```

```
<PropTable>
  <PropTable.Entry name="beforeIcon" type="React.ReactElement" description="Before icon for AutoComplete"/>
  <PropTable.Entry name="dataSource" required type="(input: string) => Promise.resolve([string]) | [string]" description="Datasource - It could resolve to a promise of a string array or just a string array"/>
  <PropTable.Entry name="isDisabled" type="boolean" description="Disable AutoComplete"/>
  <PropTable.Entry name="onSelect" type="(selectedItem: string)=> void" description="Selected item from the datasource"/>
  <PropTable.Entry name="placeholder" type="string" description="Placeholder for AutoComplete"/>
  <PropTable.Entry name="size" type={`"lg" | "md" | "sm"`} defaultValue='md' description="Size to AutoComplete"/>
</PropTable>
```
