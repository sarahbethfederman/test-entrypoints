import * as React from 'react';
import { ItemWrapper } from './index.style';
import { IconProps } from '@lendi-ui/icon';
import { IconWrapper, Size, ChildWrapper } from './index.style';

export interface ItemProps {
  icon?: React.ReactElement<IconProps>;
  onClick: () => void;
  size: Size;
}

export const MenuDropdownItem: React.FunctionComponent<ItemProps> = ({
  size = 'md',
  icon = '',
  onClick = () => {},
  children,
}) => {
  return (
    <ItemWrapper size={size} onClick={onClick}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {children && <ChildWrapper>{children}</ChildWrapper>}
    </ItemWrapper>
  );
};
