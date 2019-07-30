import * as React from 'react';
import AddressPicker from './index';

export default class AddressPickerExample extends React.Component {
  state = {
    address: '',
  };

  render() {
    return (
      <>
        <AddressPicker
          onChange={() => undefined}
          onSelect={(e) => {
            this.setState(e);
          }}
          showMap
          country="au"
        />
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </>
    );
  }
}