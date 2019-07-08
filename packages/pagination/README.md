# @lendi-ui/pagination

A pagination component.

## Installation

```
yarn add @lendi-ui/pagination
```

## Usage

```jsx
import Pagination from '@lendi-ui/pagination';

<Pagination totalPages={10} currentPage={1} visiablePages={7} handleChange={() => {}} handleClick={() => {}} />;

## Properties

<PropTable>
  <PropTable.Entry name="currentPage" type="number" defaultValue="1" description="The current page that selected"/>
  <PropTable.Entry name="handleChange" type="(number) => void" description="Handle Chevron Icon button clicking event"/>
  <PropTable.Entry name="handleClick" type="(number) => void" description="Handle Page button clicking event"/>
  <PropTable.Entry name="totalPages" required type="number" description="The total number of pages that needed"/>
  <PropTable.Entry name="visiblePages" type="number" defaultValue="7" description="The total visible page button"/>
</PropTable>
```
