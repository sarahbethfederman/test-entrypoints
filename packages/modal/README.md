# @lendi-ui/modal

A modal component.

## Installation

```
yarn add @lendi-ui/modal
```

## Usage

```
import Modal from '@lendi-ui/modal';

<Modal />
```

## Modal Properties

<PropTable>
  <PropTable.Entry name="isHeaderFixed" type="boolean" defaultValue="false" description="Flag to set the fixed Header"/>
  <PropTable.Entry name="isVisible" type="boolean" defaultValue="false" description="Flag to show modal"/>
  <PropTable.Entry name="onHide" type="() => void" description="Handle closing the modal"/>
  <PropTable.Entry name="size" type={ '"sm" | "md" | "lg"' } defaultValue="md" description="Size of the modal"/>
</PropTable>

<br/><br/>

## Modal.Header

<PropTable>
  <PropTable.Entry name="size" type={ '"xs" | "sm" | "md"' } defaultValue="md" description="The size of the header text, in line with Heading from typography sizes."/>
  <PropTable.Entry name="subtitle" type="string" description="The subtitle text to show below the header."/>
  <PropTable.Entry required name="title" type="string" description="The header text to show."/>
</PropTable>

## Modal.Content

<PropTable>
  <PropTable.Entry name="children" type="React.ReactNode" description="The content on modal"/>
</PropTable>

## Modal.Footer

<PropTable>
  <PropTable.Entry name="children" type="React.ReactNode" description="The footer on modal"/>
</PropTable>
