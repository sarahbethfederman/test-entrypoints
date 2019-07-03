import * as React from 'react';
import styled from 'styled-components';

import { AuthedNavbar, UnauthedNavbar } from './index';
import { Button } from '@lendi-ui/button';
import { mx, ml, pt } from '@lendi-ui/spacing';
import { Application } from './types';

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

  render() {
    return (
      <Wrapper>
        {this.state.isAuthenticated ? (
          <AuthedNavbar application={{ continueURL: 'https://www.lendi.design' } as Application} />
        ) : (
          <UnauthedNavbar />
        )}
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
