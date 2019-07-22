import { LUIGlobalProps } from '@lendi-ui/utils';
import { SyntheticEvent } from 'react';
import { IconProps } from '@lendi-ui/icon';

export interface AccordionItemProps extends LUIGlobalProps {
  children?: React.ReactNode;
}

export interface AccordionHeaderProps extends LUIGlobalProps {
  onClick?: (event: SyntheticEvent) => void;
  after?: React.ReactElement<IconProps>;
  children?: React.ReactNode;
}

export interface AccordionProps extends LUIGlobalProps {
  isOpen?: boolean;
  isDisabled?: boolean;
  children?: React.ReactNode;
}
export interface AccordionGroupProps extends LUIGlobalProps {
  children?: React.ReactNode;
  isOpen?: boolean;
}
