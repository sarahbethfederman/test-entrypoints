# @lendi-ui/card

A card component.

## Installation

```
yarn add @lendi-ui/card
```

## Usage

```jsx
import Card from '@lendi-ui/card';
<Card title="Card title" subTitle="Here we go">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
  type specimen book.
  <Card title="Inner Card with Subtitle" subTitle="Here we go">
    Child card
  </Card>
</Card>;
```

## Properties

### Card

```
<PropTable>
  <PropTable.Entry name="bg" type="string" description="Background colour"/>
  <PropTable.Entry name="children" type="React.ReactNode" description="Content of the card"/>
  <PropTable.Entry name="depth" type="number" description="Depth of the card"/>
  <PropTable.Entry name="fg" type="string" description="Foreground colour"/>
  <PropTable.Entry name="size" type="string" description="Size of card"/>
</PropTable>

### Card.Heading
<PropTable>
  <PropTable.Entry name="children" type="React.ReactNode" description="Content of the card"/>
</PropTable>

### Card.Content
<PropTable>
  <PropTable.Entry name="children" type="React.ReactNode" description="Content of the card"/>
</PropTable>

### Card.Footer
<PropTable>
  <PropTable.Entry name="children" type="React.ReactNode" description="Content of the card"/>
  <PropTable.Entry name="align" type="left | center | right" description="Content of the card"/>
</PropTable>
```
