import * as React from 'react';
import { Link, Button, Icon, ListItem } from './index.style';

export interface ItemProps {
  href?: string;
  onClick?: () => void;
  depth?: number;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  labelText?: string;
}

export const Item = (props: ItemProps) => {
  const { href, depth = 0, icon, children, onClick, labelText } = props;
  if (href) {
    return (
      <ListItem role="none">
        <Link depth={depth} href={href} role={labelText ? labelText : 'menu item'}>
          {icon && <Icon>{icon}</Icon>}
          {children}
        </Link>
      </ListItem>
    );
  } else {
    return (
      <ListItem role="none">
        <Button depth={depth} onClick={onClick} aria-label={labelText}>
          {icon && <Icon>{icon}</Icon>}
          {children}
        </Button>
      </ListItem>
    );
  }
};
