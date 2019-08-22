import * as React from 'react';
import Modal from '@lendi-ui/modal';
import { Button } from '@lendi-ui/button';
import { MOCK_DATA_SOURCE } from './data-source.mock';
import { Select } from '../index';

export default class SelectModalExample extends React.Component {
  state = {
    active: false,
  };

  render() {
    const { active } = this.state;
    return (
      <>
        <Button variant="primary" onClick={() => this.setState({ active: true })} isFullWidth={false}>
          Select in the modal
        </Button>
        <Modal show={active} size="lg" onHide={() => this.setState({ active: false })}>
          <Modal.Content>
            <Select size="sm" options={MOCK_DATA_SOURCE} isMultiple placeholder="Select in modal" isFullWidth={true} />
          </Modal.Content>
        </Modal>
      </>
    );
  }
}
