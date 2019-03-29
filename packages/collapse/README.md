# @lendi-ui/collapse

A Collapse component.

## Installation

```
yarn add @lendi-ui/collapse
```

## Usage

```jsx
import Collapse from '@lendi-ui/collapse';
<Collapse title="Collapse Title" />;
```

## Properties

```
<PropTable>
  <PropTable.Entry name="title" required type="string" description="Title of collapse"/>
  <PropTable.Entry name="subTitle" type="string" description="SubTitle of collapse"/>
  <PropTable.Entry name="isExpanded" type="boolean" defaultValue=false description="expanded/collapsed"/>
  <PropTable.Entry name="footer" type="React.ReactElement" description="Footer of the collapse"/>
  <PropTable.Entry name="onClick" type="(isExpanded) => void" description="Handle the click event. Consumer can get the current state of collapse - expanded/collapsed"/>
  <PropTable.Entry name="children" type="React.ReactNode" description="Content of the collapse."/>
  <PropTable.Entry name="headerSize" type={`"xs" | "sm" | "md"`} defaultValue='sm' description="header size to collapse header"/>
  <PropTable.Entry name="className" type="string" description="external classname to override style of the component"/>
</PropTable>
```
