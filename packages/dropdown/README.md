# @lendi-ui/dropdown

A <Dropdown> component.

## Installation

```
yarn add @lendi-ui/dropdown
```

## Usage

```jsx
import { NativeSelect, Select } from '@lendi-ui/dropdown';
(items = [
  {
    value: '1',
    label: '5 years',
  },
  {
    value: '2',
    label: '10 years',
  },
  {
    value: '3',
    label: '15 years',
  },
  {
    value: '4',
    label: '20 years',
  },
  {
    value: '5',
    label: '25 years',
  },
]),
      <NativeSelect
        size={{mobile:'sm', tablet:'md', desktop:'lg'}}
        items={this.state.items}
        isFullWidth={true}
        value={this.state.value}
        onChange={(value) => {this.setState({value})
          }}
      />
      <Select
          size="sm"
          options={items}
          placeholder="Size SM"
          hideSelectedOptions={false}
          isAutoFocus
        />
```

\*\*\*Dropdown also support default select props like autoFocus, disabled, onFocus, onChange, name and all AriaAttributes.

## Properties

```
<PropTable>
  <PropTable.Entry name="className" defaultValue=""type="string" description="The custom style for Dropdown."/>
  <PropTable.Entry name="isDisabled" type={'"true | false"'} defaultValue="false" description="Whether the dropdown is disabled."/>
  <PropTable.Entry name="isError" type={'"true | false"'} defaultValue="false" description="Whether the dropdown is not selected."/>
  <PropTable.Entry name="isFullWidth" type={'"true | false"'} defaultValue="true" description="the dropdown is intended to use the full width of the container"/>
  <PropTable.Entry name="isLoading" type={'"true | false"'} defaultValue="false" description="Whether the dropdown icon is Spinner or ChevronDown."/>
  <PropTable.Entry name="items" required type="[{value: string, label: string}]" description="An object array with 'value' and 'label' that display in this component"/>
  <PropTable.Entry name="size" type={'"lg" | "md" | "sm"'} defaultValue="md" description="The inline-dropdown size"/>
</PropTable>
```
