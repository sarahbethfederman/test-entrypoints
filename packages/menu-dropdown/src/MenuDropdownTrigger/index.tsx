import * as React from 'react';
import { TriggerWrapper, IconWrapper } from './index.style';
import { IconProps } from '@lendi-ui/icon';

export interface TriggerProps {
  iconBefore?: React.ReactElement<IconProps>;
  iconAfter?: React.ReactElement<IconProps>;
}

export const MenuDropdownTrigger: React.FunctionComponent<TriggerProps> = ({
  iconBefore = '',
  iconAfter = '',
  children,
}) => {
  return (
    <TriggerWrapper>
      {iconBefore && <IconWrapper>{iconBefore}</IconWrapper>}
      {children}
      {iconAfter && <IconWrapper>{iconAfter}</IconWrapper>}
    </TriggerWrapper>
  );
};
