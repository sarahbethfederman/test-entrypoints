import * as React from 'react';
import styled from 'styled-components';
import { Button } from '@lendi-ui/button';
import { Body } from '@lendi-ui/typography';
import Footer from './index';
import { ExpertAdvice } from './components/ExpertAdvice/index';
import { SocialPanel } from './components/SocialPanel/index';
import { CallToAction } from './components/CallToAction';
import { ml, mt, mr } from '@lendi-ui/spacing';
import { gte } from '@lendi-ui/breakpoint';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

const ActionsWrapper = styled.div`
  ${gte('desktop')`
    display: flex;
  `}
`;

const ConfigWrapper = styled.div`
  ${mt('sm')};
  ${ml('sm')};
`;

const ButtonWrapper = styled(Button)`
  ${mr('sm')};
`;

export default () => {
  const [isAuth, setIsAuth] = React.useState(false);
  const [hasApplication, setHasApplication] = React.useState(false);

  return (
    <Wrapper>
      {/* Just make an example right now for Mon and will integrate all component when everything ready */}
      <ConfigWrapper>
        <Body>Config:</Body>
        <ButtonWrapper variant="primary" onClick={() => setIsAuth(!isAuth)}>
          Auth: {isAuth ? 'Logged in' : 'Logged out'}
        </ButtonWrapper>
        <ButtonWrapper variant="primary" onClick={() => setHasApplication(!hasApplication)}>
          Existing Application: {hasApplication ? 'Yes' : 'No'}
        </ButtonWrapper>
      </ConfigWrapper>
      <br />
      <ActionsWrapper>
        <CallToAction
          isAuth={isAuth}
          continueApplicationUrl={hasApplication ? '/' : ''}
          applicationDate={hasApplication ? '6 February 2019' : ''}
        />
        <ExpertAdvice />
      </ActionsWrapper>
      <Footer id="footerId" aria-label="myLabel" />
      <SocialPanel />
      <Body style={{ background: '#0d5a6d', padding: '150px 0' }} align="center" color="shade.0">
        This is not include in Footer. Just make more padding to prevent something blocked by bottom buton.
      </Body>
    </Wrapper>
  );
};
