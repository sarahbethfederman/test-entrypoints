import * as React from 'react';
import styled from 'styled-components';
import Footer from './index';
import { ExpertAdvice } from './components/ExpertAdvice/index';
import { SocialPanel } from './components/SocialPanel/index';
import { Body } from '@lendi-ui/typography';

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
    <SocialPanel />
    <Body style={{ background: '#0d5a6d', padding: '150px 0' }} align="center" color="shade.0">
      This is not include in Footer. Just make more padding to prevent something blocked by bottom buton.
    </Body>
  </Wrapper>
);
