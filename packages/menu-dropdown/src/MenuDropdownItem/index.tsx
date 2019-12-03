import * as React from 'react';
import { ItemWrapper } from './index.style';
import { IconProps } from '@lendi-ui/icon';
import { IconWrapper, Size, ChildWrapper } from './index.style';
import { LUIGlobalProps } from '@lendi-ui/utils';

export interface ItemProps extends LUIGlobalProps {
  icon?: React.ReactElement<IconProps>;
  onClick: () => void;
  size: Size;
}

export const MenuDropdownItem: React.FunctionComponent<ItemProps> = ({
  size = 'md',
  icon = '',
  onClick = () => {},
  children,
  ...otherProps
}) => {
  return (
    <ItemWrapper size={size} onClick={onClick} {...otherProps}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {children && <ChildWrapper>{children}</ChildWrapper>}
    </ItemWrapper>
  );
};
