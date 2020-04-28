# @lendi-ui/status-badge

A status-badge component.

## Installation

```
yarn add @lendi-ui/status-badge
```

## Usage

```jsx
import StatusBadge from '@lendi-ui/status-badge';

<StatusBadge variant="error">Error</StatusBadge>;

## Properties

<PropTable>
  <PropTable.Entry name='hasIcon' type='boolean' defaultValue={true} description='Badge icon. This is the corresponding icon to the variant used'/>
  <PropTable.Entry name='size' type="'sm' | 'lg'" defaultValue='sm' description='Size of the badge'/>
  <PropTable.Entry name='statusText' type='string' description='The text inside the badge'/>
  <PropTable.Entry name='variant' required type="'error' | 'info' | 'success' | 'warn'" description='Badge type'/>
</PropTable>
```