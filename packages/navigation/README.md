# @lendi-ui/navigation

A navigation component.

## Installation

```
yarn add @lendi-ui/navigation
```

## Usage

```jsx
import { Navigation, Menu, MenuItem } from '@lendi-ui/navigation';

<Navigation width="376px">
  <Menu menuTitle="Loan Profile" isOpen={true} onClick={() => {}}>
    <MenuItem
      itemHeader="Loan structure"
      isSelected
      badge={<StatusBadge variant="success" hasIcon={false} size="sm" statusText="COMPLETED" />}
    />
    <MenuItem
      itemHeader="Applicants"
      badge={<StatusBadge variant="warn" hasIcon={false} size="sm" statusText="INCOMPLETED" />}
    />
    <MenuItem
      itemHeader="Assets & liabilities"
      badge={<StatusBadge variant="success" hasIcon={false} size="sm" statusText="COMPLETED" />}
    />
    <MenuItem
      itemHeader="Additional income & expenses"
      badge={<StatusBadge variant="warn" hasIcon={false} size="sm" statusText="INCOMPLETED" />}
    />
  </Menu>
  <Menu menuTitle="Loan Options" isOpen={true} onClick={() => {}}>
    <MenuItem
      itemHeader="Workshop your deal"
      badge={<StatusBadge variant="success" hasIcon={false} size="sm" statusText="COMPLETED" />}
    />
    <MenuItem
      itemHeader="Lender selection"
      badge={<StatusBadge variant="warn" hasIcon={false} size="sm" statusText="INCOMPLETED" />}
    />
  </Menu>
  <Menu menuTitle="Documents" isOpen={false} onClick={() => {}} />
  <Menu menuTitle="Loan Progress" isOpen={false} onClick={() => {}} />
  <Menu menuTitle="Deal IQ" isOpen={false} onClick={() => {}} />
</Navigation>;
```
