import * as React from 'react';
import { TriggerWrapper, IconWrapper } from './index.style';
import { IconProps } from '@lendi-ui/icon';
import { LUIGlobalProps } from '@lendi-ui/utils';

export interface TriggerProps extends LUIGlobalProps {
  iconBefore?: React.ReactElement<IconProps>;
  iconAfter?: React.ReactElement<IconProps>;
  onClick?: (event: React.MouseEvent) => void;
}

export const MenuDropdownTrigger: React.FunctionComponent<TriggerProps> = ({
  iconBefore = '',
  iconAfter = '',
  children,
  ...otherProps
}) => {
  return (
    <TriggerWrapper {...otherProps}>
      {iconBefore && <IconWrapper>{iconBefore}</IconWrapper>}
      {children}
      {iconAfter && <IconWrapper>{iconAfter}</IconWrapper>}
    </TriggerWrapper>
  );
};
