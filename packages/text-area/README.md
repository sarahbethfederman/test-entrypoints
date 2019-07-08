# @lendi-ui/text-area

A TextArea component.

## Installation

```
yarn add @lendi-ui/text-area
```

## Usage

```jsx
import TextArea from '@lendi-ui/text-area';

<TextArea size="md" placeholder="I'm a placeholder" />;
```

```
## Properties

<PropTable>
  <PropTable.Entry name="className" defaultValue=""type='string' defaultValue="" description="Custom class for adding style"/>
  <PropTable.Entry name="isDisabled" type='boolean' defaultValue="false" description="Whether the input is disabled"/>
  <PropTable.Entry name="isError" type='boolean' defaultValue="false" description="Whether the input content is valid"/>
  <PropTable.Entry name="isFullWidth" type='boolean' defaultValue="false" description="Whether the input is full width"/>
  <PropTable.Entry name="isInverse" type='boolean' defaultValue="false" description="Whether the input is inversed"/>
  <PropTable.Entry name="onBlur" type='() => void' description="Blur handler"/>
  <PropTable.Entry name="onChange" required={true} type='() => void' description="Change handler"/>
  <PropTable.Entry name="onFocus" type='() => void' description="Focus handler"/>
  <PropTable.Entry name="placeholder" type='string' description="The input placeholder"/>
  <PropTable.Entry name="size" type="{ 'sm' | 'md' | 'lg' }" defaultValue="md" description="The input size"/>
  <PropTable.Entry name="value" type="string" description="The input content"/>
</PropTable>
```
