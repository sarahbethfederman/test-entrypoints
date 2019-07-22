# @lendi-ui/accordion

An Accordion component.

## Installation

```
yarn add @lendi-ui/accordion
```

## Usage

```jsx
import { AccordionGroup, Accordion } from '@lendi-ui/accordion';

<AccordionGroup>
  <Accordion isOpen={true} data-id="first">
    <AccordionHeader after={<Lock color="primary.500" />}>About</AccordionHeader>
    <AccordionItem>
      <Body size="xs">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Body>
    </AccordionItem>
  </Accordion>
</AccordionGroup>;
```
