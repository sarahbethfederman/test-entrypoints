# @lendi-ui/text-bubble

A TextBubble component.

## Installation

```
yarn add @lendi-ui/text-bubble
```

## Usage

```jsx
import TextBubble from '@lendi-ui/text-bubble';

<TextBubble />;

## Properties

<PropTable>
  <PropTable.Entry name="children" type="React.ReactNode" description="Content of the Text Bubble"/>
  <PropTable.Entry name="label" type="string" defaultValue={"Timestamp"} description="Label to appear above the text bubble, or else defaults to a current timestamp"/>
  <PropTable.Entry name="hasOverline" type="boolean" defaultValue={true} description="Flag for whether or not to include the overline text above. The label property will be ignored if this is disabled" />
  <PropTable.Entry name="isFullWidth" type="boolean" defaultValue={false} description="Flag for whether or not the element should use the full width of the parent container"/>
</PropTable>
```
