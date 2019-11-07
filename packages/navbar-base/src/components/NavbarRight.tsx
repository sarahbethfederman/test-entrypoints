import * as React from 'react';
import { NavbarRightWrapper } from '../index.style';
import { NavbarBaseRightProps } from '../types';

const NavbarRight: React.FunctionComponent<NavbarBaseRightProps> = ({ children }) => (
  <NavbarRightWrapper>{children}</NavbarRightWrapper>
);

export default NavbarRight;
