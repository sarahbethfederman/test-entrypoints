# @lendi-ui/alert

Alert banners communicate a state that affects the entire system, not just a feature or page. It persists over a session and appears without the user initiating the action. LUI `Alert` contains four type: 'error', 'info', 'success' and 'warn'.

## Installation

```
yarn add @lendi-ui/alert
```

## Usage

```jsx
import Alert from '@lendi-ui/alert';
```

## Properties

```
<PropTable>
  <PropTable.Entry name='children' type='string' description='Alert content'/>
  <PropTable.Entry name='heading' type='string' description='Alert with heading'/>
  <PropTable.Entry name='variant' required type="{ 'error' | 'info' | 'success' | 'warn' }" description='Alert type'/>
</PropTable>

```
