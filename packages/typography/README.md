# @lendi-ui/typography

Typography including Body, Heading, Overline, and Link.

## Installation

```
yarn add @lendi-ui/typography
```

## Usage

- Body

```jsx
import { Body } from '@lendi-ui/typography';
<Body size="lg" color="warn.500">
  The quick brown fox jumps over the lazy dog
</Body>;
```

- Heading

```jsx
import { Heading } from '@lendi-ui/typography';
<Heading size="lg" color="warn.500">
  The quick brown fox jumps over the lazy dog
</Heading>;
```

- Link

```jsx
import { Link } from '@lendi-ui/typography';
<Link>quick brown fox</Link>;
```

- Overline

```jsx
import { Overline } from '@lendi-ui/typography';
<Overline>quick brown fox</Overline>;
```

### Notes

<b>Support for native props like Aria attributes, Standard HTML Attributes like title, classname, id, role, itemProp, itemID, itemRef</b>
