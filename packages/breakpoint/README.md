# @lendi-ui/breakpoint

Breakpoint CSS style with `between`, `gte` and `map`.

## Installation

```
yarn add @lendi-ui/breakpoint
```

## Testing

When testing with `getBreakpoint` or `useBreakpoint` it is advised to mock `@lendi-ui/breakpoint` as `window.matchMedia` is not available on the JSDOM. If you need to test resize functionality, you can instead add something like the following code to your tests to mock the `window.matchMedia` function:

```jsx
import { match } from 'css-mediaquery';

const width: number = 1201;

window.matchMedia = jest.fn().mockImplementation((query: string) => ({
  matches: match(query, { type: 'screen', width: `${width}px` }),
}));
```

## Usage

- `between` receives two parameters. The first one is the smaller breakpoint and the second one is the larger breakpoint. The CSS style will be between these two breakpoints.

```jsx
import { between } from '@lendi-ui/breakpoint';
const Component = styled.div`
  ${between('xs', 'md')`
    color: red;
  `} ${between('lg', 'xl')`
    color: green;
  `}
  color: pink;
`;
```

- `gte` receives one parameter that CSS style will be larger than this breakpoint.

```jsx
import { gte } from '@lendi-ui/breakpoint';
const Mobile = styled.code`
  ${gte('sm')`
    ${bg('primary.800')}
  `};
`;
```

- `map` will match different breakpoint style for this property.

```jsx
import { map } from '@lendi-ui/breakpoint';
const TextWithDifferentColoursForEachBreakpoint = styled(Text)`
  ${map({ xs: 'red', sm: 'green', md: 'pink', lg: '#ffee12' }, (value: Colors) => `color: ${value}`)};
`;
```
