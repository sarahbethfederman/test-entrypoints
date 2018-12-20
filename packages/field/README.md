# @lendi-ui/field

A Field component with Label, Tooltip, Input and ErrorMessage component.

## Installation

```
yarn add @lendi-ui/field
```

## Usage

```jsx
import Field from '@lendi-ui/field';
<Field
  labelSize="sm"
  label="This is a label"
  assistiveText="Assistive text"
  link={<Link>forgot</Link>}
  toolTip={<></>}
  error="error message"
>
  <Input
    size="md"
    placeholder="input here ..."
    onChange={() => {}}
    isFullWidth={true}
    after={<span style={{ width: '24px', height: '24px' }}>x</span>}
  />
</Field>;
```
