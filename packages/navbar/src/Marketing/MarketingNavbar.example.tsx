import * as React from 'react';
import styled from 'styled-components';

import { MarketingNavbar } from './index';
import { Button } from '@lendi-ui/button';
import { mx, ml } from '@lendi-ui/spacing';
import { bg } from '@lendi-ui/color';

const STARTED_APPLICATION = {
  type: 'Refinance',
  sfid: '123',
  number: 6,
  stage: 'started_application',
  continueURL: '/dashboard/123',
  applicants: [],
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const ButtonWrapper = styled(Button)`
  ${mx('lg')};
  ${ml('lg')};
`;

const FillerOne = styled.div`
  width: 100vw;
  height: 100vh;
  ${bg('secondary.600')}
  padding-top: 6em;
`;

const FillerTwo = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightslategrey;
`;

class NewNavBarExample extends React.Component {
  state = {
    isAuthenticated: false,
    application: undefined,
  };

  onChat = () => {
    alert('Chat is triggered');
  };

  render() {
    return (
      <Wrapper>
        <MarketingNavbar
          isAuthenticated={this.state.isAuthenticated}
          application={this.state.application}
          onChat={this.onChat}
        />
        <FillerOne>
          <ButtonWrapper
            variant="primary"
            onClick={() => this.setState({ isAuthenticated: !this.state.isAuthenticated })}
          >
            Toggle isAuthenticated
          </ButtonWrapper>
          <ButtonWrapper
            variant="primary"
            onClick={() => this.setState({ application: this.state.application ? undefined : STARTED_APPLICATION })}
          >
            Toggle with Application
          </ButtonWrapper>
        </FillerOne>
        <FillerTwo />
      </Wrapper>
    );
  }
}

export default NewNavBarExample;
