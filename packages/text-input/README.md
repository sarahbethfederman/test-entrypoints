# @lendi-ui/input-text

LUI input text component.

## Installation

```
yarn add @lendi-ui/input-text
```

## Usage

```jsx
import Input from '@lendi-ui/input-text';
<Input
  size="md"
  placeholder="input here ..."
  onChange={() => {}}
  isFullWidth={true}
  after={<span style={{ width: '24px', height: '24px' }}>x</span>}
/>;
```

## Properties

```
<PropTable>
  <PropTable.Entry name="value" type="string" description="The input content."/>
  <PropTable.Entry name="size" type="{ 'sm' | 'md' | 'lg' }" defaultValue="md" description="The input size."/>
  <PropTable.Entry name="placeholder" type='string' description="The input placeholder."/>
  <PropTable.Entry name="isInverse" type='boolean' defaultValue="false" description="Whether the input is inversed."/>
  <PropTable.Entry name="isError" type='boolean' defaultValue="false" description="Whether the input content is valid."/>
  <PropTable.Entry name="isDisabled" type='boolean' defaultValue="false" description="Whether the input is reaonly."/>
  <PropTable.Entry name="isFullWidth" type='boolean' defaultValue="false" description="Whether the input is full width."/>
  <PropTable.Entry name="before" type="React.ReactNode" description="Content before the input content."/>
  <PropTable.Entry name="after" type="React.ReactNode" description="Content after the input content."/>
  <PropTable.Entry name="onChange*" type='()=>{}' description="The input content"/>
</PropTable>
```
