# @lendi-ui/navbar-vertical

A Vertical Navbar component for LUI. This is a full page sidebar that is ideal for dashboard applications. The Vertical Navbar is best used inside a grid layout on a modern browser. It allows for a custom heading to sit in line with your horizontal navbar and tabs to take each menu item. It can be collapsed and expanded to take up more or less space on the page.

## Installation

```
yarn add @lendi-ui/navbar-vertical
```

## Usage

```jsx
import VerticalNavbar from '@lendi-ui/navbar-vertical';

<VerticalNavbar>
  <VerticalNavbar.Header>{headerContent}</VerticalNavbar.Header>

  <VerticalNavbar.Tab tooltip={tabOneTooltipContent}>{tabOneContent}</VerticalNavbar.Tab>

  <VerticalNavbar.Tab tooltip={tabTwoTooltipContent}>{tabTwoContent}</VerticalNavbar.Tab>

  <VerticalNavbar.Tab tooltip={tabThreeTooltipContent}>{tabThreeContent}</VerticalNavbar.Tab>
</VerticalNavbar>;
```
