import * as React from 'react';
import styled from 'styled-components';
import Footer from './index';
import { ExpertAdvice } from './components/ExpertAdvice/index';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;
export default () => (
  <Wrapper>
    {/* Just make an example right now for Mon and will integrate all component when everything ready */}
    <ExpertAdvice />
    <Footer id="footerId" aria-label="myLabel" />
  </Wrapper>
);
