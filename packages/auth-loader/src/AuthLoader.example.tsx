import * as React from 'react';
import styled from 'styled-components';
import AuthLoader from './index';
import Navbar from '@lendi-ui/navbar';

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
`;

const NavbarWrapper = styled(Navbar)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

export default () => (
  <Wrapper>
    <NavbarWrapper variant="white" />
    <AuthLoader />
  </Wrapper>
);
