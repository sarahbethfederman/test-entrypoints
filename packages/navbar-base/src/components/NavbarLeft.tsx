import * as React from 'react';
import { NavbarLeftWrapper } from '../index.style';
import { NavbarBaseLeftProps } from '../types';

const NavbarLeft: React.FunctionComponent<NavbarBaseLeftProps> = ({ children }) => (
  <NavbarLeftWrapper>{children}</NavbarLeftWrapper>
);

export default NavbarLeft;
