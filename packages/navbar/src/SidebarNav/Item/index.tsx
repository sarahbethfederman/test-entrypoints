import * as React from 'react';
import { Link, Button, Icon } from './index.style';

export interface ItemProps {
  href?: string;
  onClick?: () => void;
  depth?: number;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export const Item = (props: ItemProps) => {
  const { href, depth = 0, icon, children, onClick } = props;
  if (href) {
    return (
      <Link depth={depth} href={href}>
        {icon && <Icon>{icon}</Icon>}
        {children}
      </Link>
    );
  } else {
    return (
      <Button depth={depth} onClick={onClick}>
        {icon && <Icon>{icon}</Icon>}
        {children}
      </Button>
    );
  }
};
