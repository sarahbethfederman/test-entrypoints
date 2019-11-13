import * as React from 'react';
import AddressPicker from './index';

export default class AddressPickerExample extends React.Component {
  state = {
    address: '',
    formatString: '',
  };

  render() {
    return (
      <>
        <AddressPicker
          onChange={() => undefined}
          onSelectAddress={(address, formatString) => {
            this.setState({ address, formatString });
          }}
          mapType="static"
          country="au"
        />
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </>
    );
  }
}
