# @lendi-ui/popover

A popover component.

## Installation

```
yarn add @lendi-ui/popover
```

## Usage

```
import {Popover} from '@lendi-ui/popover';

<Popover
    content={<Body size='sm' mb='xxs'>I pop out from the left</Body>}
    position='left'
    target={<ChevronLeft color="secondary.600" />}
  />

## Properties

<PropTable>
  <PropTable.Entry name="content" type="React.ReactNode" description="Popover content"/>
  <PropTable.Entry name="className" defaultValue=""type="string" description="Custom class name"/>
  <PropTable.Entry name="position" type="{'top' | 'bottom' | 'left' | 'right'}" defaultValue="top" description="Popover content display position comparing with target component"/>
  <PropTable.Entry name="target" type="React.ReactNode" description="Target component that trigger Popover by clicking it"/>
</PropTable>
```
