# @lendi-ui/button

Including `Button` and `ButtonGroup` two component.

## Installation

```
yarn add @lendi-ui/button
```

## Usage

- Button

```jsx
import { Button } from '@lendi-ui/button';
<Button variant="primary">Continue</Button>;
```

- Button

```jsx
import { ButtonGroup } from '@lendi-ui/button';
<ButtonGroup size="sm">
  <ButtonGroup.Button variant="secondary">&lt;</ButtonGroup.Button>
  <ButtonGroup.Button variant="primary">Continue</ButtonGroup.Button>
</ButtonGroup>;
```

## Properties

- Button

```
<PropTable>
  <PropTable.Entry name="after" type="React.ReactNode" description="Content after the button label"/>
  <PropTable.Entry name="ariaLabel" type="string" description="Ensure you add a label for buttons that do not contain text. If not provided (and the children of button is text) this is automatically added"/>
  <PropTable.Entry name="before" type="React.ReactNode" description="Content before the button label"/>
  <PropTable.Entry name="children" type="React.ReactNode" description="The button content"/>
  <PropTable.Entry name="className"  defaultValue="" type="string" description="External classname to override style of the component"/>
  <PropTable.Entry name="href" type="string" description="URL to link to"/>
  <PropTable.Entry name="isDisabled" type="boolean" defaultValue={false} description="Whether the button responds to user input"/>
  <PropTable.Entry name="isFullWidth" type="boolean" defaultValue={false} description="Whether the button takes up the full width of the container"/>
  <PropTable.Entry name="isInverse" type="boolean" defaultValue={false} description="Whether the button is inversed"/>
  <PropTable.Entry name="onClick" type="() => void" description="Handle the click event"/>
  <PropTable.Entry name="size" type={`"xs" | "sm" | "md" | "lg"`} defaultValue="md" description="The button size"/>
  <PropTable.Entry name="variant" type={`"primary" | "secondary" | "emphasis" | "empty"`} description="The button type"/>
</PropTable>

```

## ButtonGroup Properties

```
<PropTable>
  <PropTable.Entry name="children" type="React.ReactElement<ButtonGroupButtonProps>" description="The buttons"/>
  <PropTable.Entry name="className" defaultValue="" type="string" description="External classname to override style of the component"/>
  <PropTable.Entry name="isDisabled" type="boolean" defaultValue={false} description="Disabling the ButtonGroup"/>
  <PropTable.Entry name="isFullWidth" type="boolean" defaultValue={false} description="Buttons take up the max width of parent"/>
  <PropTable.Entry name="isInverse" type="boolean" defaultValue={false} description="Switches the foreground and background colours"/>
  <PropTable.Entry name="size" type={`"xs" | "sm" | "md" | "lg"`} defaultValue="md" description="The buttons size"/>
</PropTable>
```

## ButtonGroup.Button Properties

```
<PropTable>
  <PropTable.Entry name="after" type="React.ReactNode" description="Content after the button label"/>
  <PropTable.Entry name="before" type="React.ReactNode" description="Content before the button label"/>
  <PropTable.Entry name="children" type="React.ReactNode" description="The button content"/>
  <PropTable.Entry name="href" type="string" description="URL to link to"/>
  <PropTable.Entry name="isDisabled" type="boolean" defaultValue={false} description="Whether the button responds to user input"/>
  <PropTable.Entry name="onClick" type="() => void" description="Handle the click event"/>
  <PropTable.Entry name="variant" type={`"primary" | "secondary" | "emphasis" | "empty"`} description="The button type"/>
</PropTable>

```
