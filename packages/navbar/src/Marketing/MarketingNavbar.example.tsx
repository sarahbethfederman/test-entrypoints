import * as React from 'react';
import styled from 'styled-components';

import { MarketingNavbar } from './index';
import { Button } from '@lendi-ui/button';
import { mx, ml } from '@lendi-ui/spacing';
import { Application } from '../common/types';

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
  background-color: lightsalmon;
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
  };

  onChat = () => {
    alert('Chat is triggered');
  };

  render() {
    return (
      <Wrapper>
        <MarketingNavbar
          isAuthenticated={this.state.isAuthenticated}
          application={{ continueURL: 'https://www.lendi.design' } as Application}
          onChat={this.onChat}
        />
        <FillerOne>
          <ButtonWrapper
            variant="primary"
            onClick={() => this.setState({ isAuthenticated: !this.state.isAuthenticated })}
          >
            Toggle isAuthenticated
          </ButtonWrapper>
        </FillerOne>
        <FillerTwo />
      </Wrapper>
    );
  }
}

export default NewNavBarExample;
