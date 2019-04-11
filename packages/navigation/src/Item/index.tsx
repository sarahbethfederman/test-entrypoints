import * as React from 'react';
import { Heading } from '@lendi-ui/typography';
import { Wrapper, ItemWrapper, HeadWrapper, Slider, ContentWrapper } from './index.style';
import { StatusBadgeProps } from '@lendi-ui/status-badge';
import { ItemHeader } from '../BrokerNavigation/index';

export interface MenuItemProps {
  itemHeader: string | ItemHeader;
  handleClick: (itemHeader: string | ItemHeader) => void;
  isSelected?: boolean;
  badge?: React.ReactElement<StatusBadgeProps>;
  children?: React.ReactNode;
  className?: string;
}

export const MenuItem = ({
  itemHeader = '',
  handleClick,
  isSelected = false,
  badge,
  children,
  className,
}: MenuItemProps) => (
  <Wrapper>
    <Slider isSelected={isSelected} />
    <ItemWrapper className={className}>
      <HeadWrapper onClick={() => handleClick(itemHeader)}>
        <Heading size="xs" color="shade.700">
          {itemHeader}
        </Heading>
        {badge}
      </HeadWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </ItemWrapper>
  </Wrapper>
);
