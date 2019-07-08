# @lendi-ui/date-picker

A DatePicker component for form inputs. In it's current iteration (1.0.0), additional validation should be handled by the consumer (e.g. allowing the correct maximum days/months/years).

## Installation

```
yarn add @lendi-ui/date-picker
```

## Usage

```jsx
import DatePicker from '@lendi-ui/date-picker';

<DatePicker />;
```

<PropTable>
  <PropTable.Entry name="dayOnChange" type="() => void" description="Day input change handler"/>
  <PropTable.Entry name="dayValue" type="number" description="Value of the day input field"/>
  <PropTable.Entry name="hasDayField" type="boolean" defaultValue={false} description="Flag to indicate whether or not the DD field should be included"/>
  <PropTable.Entry name="isDisabled" type="boolean" defaultValue={false} description="Flag to indicate whether or not the component should show in readonly"/>
  <PropTable.Entry name="isError" type="boolean" defaultValue={false} description="Flag to indicate whether or not a red outline should show around the component" /> 
  <PropTable.Entry name="monthOnChange" type="() => void" description="Month input change handler"/>
  <PropTable.Entry name="monthValue" type="number" description="Value of the month input field"/>
  <PropTable.Entry name="size" type={`"sm" | "md" | "lg"`} defaultValue="md" description="The date-picker size"/>
  <PropTable.Entry name="yearOnChange" type="() => void" description="Year input change handler" />
  <PropTable.Entry name="yearValue" type="number" description="Value of the year input field"/>
</PropTable>
