# @lendi-ui/grid

Grid styles HTML element with grid CSS layout. Grid contains `grid` and `unit`.

## Installation

```
yarn add @lendi-ui/grid
```

## Usage

- grid

```jsx
import { grid } from '@lendi-ui/grid';
const Grid = styled.div`
  ${grid({ halign: 'justify-center' })};
`;
```

- unit

```jsx
import { unit } from '@lendi-ui/grid';
const Quarter = styled.div`
  ${unit({ offset: 1 / 4, size: 1 / 4 })};
`;
```
