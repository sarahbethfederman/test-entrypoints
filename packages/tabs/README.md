# @lendi-ui/tabs

A tabs component.

## Installation

```
yarn add @lendi-ui/tabs
```

## Usage

```
import Tabs from '@lendi-ui/tabs';

<Tabs />

## Tabs Properties

<PropTable>
  <PropTable.Entry name="activeTab" type="number" description="Index of the active tab."/>
  <PropTable.Entry name="isInverse" type="boolean" defaultValue="false" description="Whether the background is primary.500 (false) or transparent (true)."/>
  <PropTable.Entry name="onChangeTab" type="(key: number) => void" description="Handle the change event."/>
</PropTable>

<br/><br/>

## Tabs.Tab Properties

<PropTable>
  <PropTable.Entry name="href" type="string" description="URL to link to."/>
  <PropTable.Entry name="icon" type="React.ReactNode" description="Icon on top of text."/>
</PropTable>
```
