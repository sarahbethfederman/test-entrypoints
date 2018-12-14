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

## Properties

```
<PropTable>
  <PropTable.Entry name="children*" type="React.ReactNode" description="The Field content."/>
  <PropTable.Entry name="size" type={`"lg" | "sm"`} defaultValue="sm" description="The Field Label size."/>
  <PropTable.Entry name="label" type="string" description="The Label content."/>
  <PropTable.Entry name="isOptioanl" type="boolean" defaultValue='false' description="The Label optioanl alert."/>
  <PropTable.Entry name="assistiveText" type="string" description="The Label assistive text content."/>
  <PropTable.Entry name="link" type="string" description="The Label link content."/>
  <PropTable.Entry name="toolTip" type="React.ReactNode" description="ToolTip"/>
  <PropTable.Entry name="isError" type="string" description="Error message and display when validation is not ''"/>
</PropTable>
```
