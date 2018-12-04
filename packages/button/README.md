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
  <PropTable.Entry name="variant" type={`"primary" | "secondary" | "emphasis" | "empty"`} description="The button type."/>
  <PropTable.Entry name="size" type={`"sm" | "md" | "lg"`} defaultValue="md" description="The button size."/>
  <PropTable.Entry name="isInverse" type="boolean" defaultValue={false} description="Whether the button is inversed."/>
  <PropTable.Entry name="isFullWidth" type="boolean" defaultValue={false} description="Whether the button takes up the full width of the container."/>
  <PropTable.Entry name="isDisabled" type="boolean" defaultValue={false} description="Whether the button responds to user input."/>
  <PropTable.Entry name="before" type="React.ReactNode" description="Content before the button label."/>
  <PropTable.Entry name="after" type="React.ReactNode" description="Content after the button label."/>
  <PropTable.Entry name="href" type="string" description="URL to link to."/>
  <PropTable.Entry name="onClick" type="() => void" description="Handle the click event."/>
  <PropTable.Entry name="children" type="React.ReactNode" description="The button content."/>
</PropTable>
```

## ButtonGroup Properties

```
<PropTable>
  <PropTable.Entry name="size" type={`"sm" | "md" | "lg"`} defaultValue="md" description="The buttons size."/>
  <PropTable.Entry name="isFullWidth" type="boolean" defaultValue={false} description="Whether the buttons take up the max width of parent"/>
  <PropTable.Entry name="isInverse" type="boolean" defaultValue={false} description="Whether the buttons are inversed."/>
  <PropTable.Entry name="children" type="React.ReactElement<ButtonGroupButtonProps>" description="The buttons."/>
</PropTable>
```

## ButtonGroup.Button Properties

```
<PropTable>
  <PropTable.Entry name="variant" type={`"primary" | "secondary" | "emphasis" | "empty"`} description="The button type."/>
  <PropTable.Entry name="isDisabled" type="boolean" defaultValue={false} description="Whether the button responds to user input."/>
  <PropTable.Entry name="before" type="React.ReactNode" description="Content before the button label."/>
  <PropTable.Entry name="after" type="React.ReactNode" description="Content after the button label."/>
  <PropTable.Entry name="href" type="string" description="URL to link to."/>
  <PropTable.Entry name="onClick" type="() => void" description="Handle the click event."/>
  <PropTable.Entry name="children" type="React.ReactNode" description="The button content."/>
</PropTable>
```
