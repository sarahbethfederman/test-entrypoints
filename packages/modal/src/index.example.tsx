import * as React from 'react';
import { Button, ButtonGroup } from '@lendi-ui/button';
import Modal from '.';
import { Body, Heading } from '@lendi-ui/typography';

export interface ModalExampleState {
  active: boolean;
  modal: Number;
}

class ModalExample extends React.Component<{}, ModalExampleState> {
  state = {
    active: false,
    modal: 1,
  };

  onShow = (modalNumber: Number) => {
    this.setState({
      active: true,
      modal: modalNumber,
    });
  };

  onHide = () => {
    this.setState({
      active: false,
      modal: 1,
    });
  };

  render() {
    const { active, modal } = this.state;
    return (
      <>
        <Heading size="md" color="shade.700">
          Modal examples
        </Heading>
        <br />
        <br />
        <Body>Simple modal - content only.</Body>
        <br />
        <Button variant="primary" onClick={() => this.onShow(1)}>
          Open the first modal 🐈
        </Button>
        <Modal show={active && modal === 1 ? true : false} size="lg" onHide={this.onHide}>
          <Modal.Content>
            <Body>What is Lorem Ipsum?</Body>
            <br />
            <Body>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </Body>
          </Modal.Content>
        </Modal>
        <br />
        <br />
        <Body>Modal with footer in different size variants.</Body>
        <br />
        <Button variant="primary" onClick={() => this.onShow(2)}>
          Open the smol one 👶🏻
        </Button>
        <Modal show={active && modal === 2 ? true : false} size="sm" onHide={this.onHide}>
          <Modal.Content>
            <Body>You already started an application on the 150th of May, 3012.</Body>
            <br />
            <Body>Would you like to continue?</Body>
          </Modal.Content>
          <Modal.Footer>
            <ButtonGroup isFullWidth size="sm">
              <ButtonGroup.Button variant="secondary">Continue application</ButtonGroup.Button>
              <ButtonGroup.Button variant="primary">Start a new application</ButtonGroup.Button>
            </ButtonGroup>
          </Modal.Footer>
        </Modal>
        <br />
        <br />
        <Button variant="primary" onClick={() => this.onShow(3)}>
          Open the medium one 👨🏻
        </Button>
        <Modal show={active && modal === 3 ? true : false} size="md" onHide={this.onHide}>
          <Modal.Content>
            <Body>You already started an application on the 150th of May, 3012.</Body>
            <br />
            <Body>Would you like to continue?</Body>
          </Modal.Content>
          <Modal.Footer>
            <ButtonGroup isFullWidth size="md">
              <ButtonGroup.Button variant="secondary">Continue application</ButtonGroup.Button>
              <ButtonGroup.Button variant="primary">Start a new application</ButtonGroup.Button>
            </ButtonGroup>
          </Modal.Footer>
        </Modal>
        <br />
        <br />
        <Button variant="primary" onClick={() => this.onShow(4)}>
          Open the large one 👨🏻‍🦳
        </Button>
        <Modal show={active && modal === 4 ? true : false} size="lg" onHide={this.onHide}>
          <Modal.Content>
            <Body>You already started an application on the 150th of May, 3012.</Body>
            <br />
            <Body>Would you like to continue?</Body>
          </Modal.Content>
          <Modal.Footer>
            <ButtonGroup isFullWidth size="lg">
              <ButtonGroup.Button variant="secondary">Continue application</ButtonGroup.Button>
              <ButtonGroup.Button variant="primary">Start a new application</ButtonGroup.Button>
            </ButtonGroup>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ModalExample;
