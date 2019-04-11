import * as React from 'react';
import { MenuWrapper, HeadWrapper, MainWrapper, MenuChevronUp, MenuChevronDown } from './index.style';
import { Heading } from '@lendi-ui/typography';
import { MenuTitle } from '../BrokerNavigation/index';

export interface MenuProps {
  menuTitle: string | MenuTitle;
  isOpen?: boolean;
  onClick: (menuTitle: string | MenuTitle) => void;
  children?: React.ReactNode;
  className?: string;
}

export const Menu = ({ menuTitle, isOpen = false, onClick, children, className }: MenuProps) => (
  <MenuWrapper className={className}>
    <HeadWrapper onClick={() => onClick(menuTitle)} isOpen={isOpen}>
      <Heading size="sm" color="shade.0" ml="xs">
        {menuTitle}
      </Heading>
      {isOpen ? <MenuChevronUp color="shade.0" /> : <MenuChevronDown color="shade.0" />}
    </HeadWrapper>
    {isOpen && <MainWrapper>{children}</MainWrapper>}
  </MenuWrapper>
);
