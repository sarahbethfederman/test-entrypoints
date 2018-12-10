import * as React from 'react';
import styled from 'styled-components';
import { Button } from '@lendi-ui/button';
import Theme from '@lendi-ui/theme';
import Overlay from '.';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

interface OverlayExampleState {
  isOverlayActive: boolean;
}

class OverlayExample extends React.Component<{}, OverlayExampleState> {
  state = {
    isOverlayActive: false,
  };

  onShow = () => {
    this.setState({
      isOverlayActive: true,
    });
  };

  onHide = () => {
    this.setState({
      isOverlayActive: false,
    });
  };

  render() {
    const { isOverlayActive } = this.state;
    return (
      <Theme>
        <Overlay show={isOverlayActive} zIndex={5} onHide={this.onHide} />
        <Wrapper>
          <Button variant="primary" onClick={this.onShow}>
            Activate overlay
          </Button>
        </Wrapper>
      </Theme>
    );
  }
}

export default OverlayExample;
