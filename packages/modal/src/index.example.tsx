import * as React from 'react';
import styled from 'styled-components';
import { mt } from '@lendi-ui/spacing';
import { Button } from '@lendi-ui/button';
import Modal from '.';

const Space = styled.div`
  ${mt('sm')};
`;

export interface ModalExampleState {
  active: boolean;
}

class ModalExample extends React.Component<{}, ModalExampleState> {
  state = {
    active: false,
  };

  onShow = () => {
    this.setState({
      active: true,
    });
  };

  onHide = () => {
    this.setState({
      active: false,
    });
  };

  render() {
    const { active } = this.state;
    return (
      <>
        <Button variant="primary" onClick={this.onShow}>
          Activate a modal
        </Button>
        <Modal show={active} size="lg" onHide={this.onHide}>
          <Modal.Content>
            <span>
              You already started an application on
              <br /> 8 October 2018
              <br /> Would you like to continue?{' '}
            </span>
          </Modal.Content>
          <Modal.Footer>
            <Button variant="primary" isFullWidth onClick={() => {}}>
              Continue application
            </Button>
            <Space />
            <Button variant="secondary" isFullWidth onClick={() => {}}>
              open a modal
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ModalExample;
