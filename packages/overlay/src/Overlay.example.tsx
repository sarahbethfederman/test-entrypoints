import * as React from 'react';
import styled from 'styled-components';
import { Button } from '@lendi-ui/button';
import Theme from '@lendi-ui/theme';
import Overlay from '.';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 150vh;
`;

const ExamplePopup = ({ isOverlayActive }: OverlayExampleState) => {
  const Container = styled.div`
    display: ${isOverlayActive ? 'flex' : 'none'};
    background: white;
    width: 200px;
    height: 400px;
    position: fixed;
    top: 30px;
    left: calc(50% - 100px);
    overflow: scroll;
    z-index: 10;
  `;

  const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200%;
  `;

  return (
    <Container>
      <Content>Scrollable</Content>
    </Container>
  );
};

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
        <Overlay isVisible={isOverlayActive} zIndex={5} onHide={this.onHide} />
        <ExamplePopup isOverlayActive={isOverlayActive} />
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
