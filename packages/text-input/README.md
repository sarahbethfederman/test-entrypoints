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
  placeholder="input here .."
  onChange={() => {}}
  isFullWidth={true}
  after={<span style={{ width: '24px', height: '24px' }}>x</span>}
/>;
```

## Properties

```
<PropTable>
  <PropTable.Entry name="after" type="React.ReactNode" description="Content after the input content."/>
  <PropTable.Entry name="before" type="React.ReactNode" description="Content before the input content."/>
  <PropTable.Entry name="isAutoFocus" type="boolean" defaultValue={false} description="Whether the Input is automatically focused on when form loads."/>
  <PropTable.Entry name="isDisabled" type='boolean' defaultValue="false" description="Whether the input is disabled."/>
  <PropTable.Entry name="isFullWidth" type='boolean' defaultValue="false" description="Whether the input is full-width."/>
  <PropTable.Entry name="isError" type='boolean' defaultValue="false" description="Whether the input content is valid."/>
  <PropTable.Entry name="isInverse" type='boolean' defaultValue="false" description="Whether the input is inversed."/>
  <PropTable.Entry name="isReadOnly" type="boolean" defaultValue={false} description="Whether the Input is read-only."/>
  <PropTable.Entry name="isRequired" type="boolean" defaultValue={false} description="Whether the Input is required."/>
  <PropTable.Entry name="onBlur" type='() => void' description="Blur handler."/>
  <PropTable.Entry name="onChange" required={true} type='() => void' description="Change handler."/>
  <PropTable.Entry name="onFocus" type='() => void' description="Focus handler."/>
  <PropTable.Entry name="placeholder" type='string' description="The input placeholder."/>
  <PropTable.Entry name="size" type="{ 'sm' | 'md' | 'lg' }" defaultValue="md" description="The input size."/>
  <PropTable.Entry name="type" type="{ 'text' | 'email' | 'tel' | 'number' }" defaultValue="text" description="The input type."/>
  <PropTable.Entry name="value" type="string" description="The input content."/>
</PropTable>
```
