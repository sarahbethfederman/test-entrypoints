# @lendi-ui/breakpoint

Breakpoint CSS style with `between`, `gte` and `map`.

## Installation

```
yarn add @lendi-ui/breakpoint
```

## Usage

- `between` receives two parameters. The first one is the smaller breakpoint and the second one is the larger breakpoint. The CSS style will be between these two breakpoints.

```jsx
import { between } from '@lendi-ui/breakpoint';
const Component = styled.div`
  ${between('mobile', 'tablet')`
    color: red;
  `} ${between('tablet', 'desktop')`
    color: green;
  `}
  color: pink;
`;
```

- `gte` receives one parameter that CSS style will be larger than this breakpoint.

```jsx
import { gte } from '@lendi-ui/breakpoint';
const Mobile = styled.code`
  ${gte('mobile')`
    ${bg('primary.800')}
  `};
`;
```

- `map` will match different breakpoint style for this property.

```jsx
import { map } from '@lendi-ui/breakpoint';
<ComponentName size={{ mobile: 'xs', tablet: 'sm', desktop: 'lg' }} />;
```
