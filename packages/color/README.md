# @lendi-ui/color

Color style with `bg`(background color), `fg`(font color) and `color`(every CSS property relate to color).

## Installation

```
yarn add @lendi-ui/color
```

## Usage

- `bg` for styling background-color.

```jsx
import { bg } from '@lendi-ui/color';
const Square = styled.div`
  width: 2em;
  height: 2em;
  ${bg('warn.500')};
`;
```

- `fg` for styling font-color.

```jsx
import { fg } from '@lendi-ui/color';
const WarningText = styled.span`
  ${fg('warn.500')};
`;
```

- `color` for styling every CSS porperty relate to color.

```jsx
import { color } from '@lendi-ui/color';
const Circle = styled.div`
  width: 0;
  border-radius: 1em;
  border: 1em solid ${color('primary.500')};
`;
```
