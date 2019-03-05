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

```
<PropTable>
  <PropTable.Entry name="title" type="string" description="Title of card"/>
  <PropTable.Entry name="subtitle" type="string" description="SubTitle of card"/>
  <PropTable.Entry name="interactiveTitle" type="React.ReactElement<DropdownProps>" description="Interactive title - a dropdown to switch between content."/>
  <PropTable.Entry name="cardTitleIcon" type="React.ReactElement<IconProps>" description="Icon to be shown along title"/>
  <PropTable.Entry name="moreIcon" type="React.ReactElement<IconProps>" description="Icon to be shown along Cancel button"/>
  <PropTable.Entry name="children" type="React.ReactNode" description="Content of the card."/>
  <PropTable.Entry name="onCancel" type="() => void" description="Handle the click event."/>
</PropTable>
```