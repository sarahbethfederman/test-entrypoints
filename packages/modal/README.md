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
  <PropTable.Entry name="onHide" type="() => void" description="Handle closing the modal"/>
  <PropTable.Entry name="size" type={ '"sm" | "md" | "lg"' } defaultValue="md" description=""/>
  <PropTable.Entry name="show" type="boolean" defaultValue="false" description=""/>
</PropTable>

<br/><br/>

## Modal.Content

<PropTable>
  <PropTable.Entry name="children" type="React.ReactNode" description="The content on modal"/>
</PropTable>

<br/><br/>

## Modal.Footer

<PropTable>
  <PropTable.Entry name="children" type="React.ReactNode" description="The footer on modal"/>
</PropTable>
