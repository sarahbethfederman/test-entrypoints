# @lendi-ui/radio

This module contains two components: Radio and RadioGroup. When using `RadioGroup`, users should use `RadioGroup.Radio` as children.

## Installation

`yarn add @lendi-ui/radio`

## Usage

### Radio

```jsx
import { Radio } from '@lendi-ui/radio';
<Radio value="value" label="Radio Label" isChecked="true" onChange="() => {}" />;
```

### RadioGroup

````jsx
import { RadioGroup } from '@lendi-ui/radio';
<RadioGroup selectedValue="1" onChange="() => {}"> <RadioGroup.Radio value="value 1" label="Radio 1" isChecked="true" onChange="() => {}" /> <RadioGroup.Radio value="value 2" label="Radio 2" isChecked="true" onChange="() => {}" /> </RadioGroup>; ```
```

## Properties

### Radio Properties

<PropTable>
  <PropTable.Entry name="className" defaultValue=""type="boolean" description="Whether the Radio is checked or not."/>
  <PropTable.Entry name="label" type="string" description="Radio display value."/>
  <PropTable.Entry name="isBoxed" type="boolean" description="Whether the Radio is checked or not."/>
  <PropTable.Entry name="isChecked" type="boolean" description="Whether the Radio is checked or not."/>
  <PropTable.Entry name="isDisabled" type="boolean" description="Whether the Radio is checked or not."/>
  <PropTable.Entry name="onChange" type="boolean" description="Whether the Radio is checked or not."/>
  <PropTable.Entry name="value" type="string" description="Radio value."/>
</PropTable>

### RadioGroup Properties

<PropTable>
  <PropTable.Entry name="className" defaultValue=""type="boolean" description="Whether the Radio is checked or not."/>
  <PropTable.Entry name="label" type="string" description="Radio display value."/>
  <PropTable.Entry name="legend" type="string" description="It is used to bind the group label information - Good for Screen readers"/>
  <PropTable.Entry name="isBoxed" type="boolean" description="Whether the Radio is checked or not."/>
  <PropTable.Entry name="isChecked" type="boolean" description="Whether the Radio is checked or not."/>
  <PropTable.Entry name="isDisabled" type="boolean" description="Whether the Radio is checked or not."/>
  <PropTable.Entry name="onChange" type="boolean" description="Whether the Radio is checked or not."/>
  <PropTable.Entry name="value" type="string" description="Radio value."/>
</PropTable>
````
