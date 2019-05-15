import * as React from 'react';
import { Checkbox } from './Checkbox/index';

interface ExampleState {
  value?: string;
  label?: string;
  isChecked?: boolean;
}

class Example extends React.Component<{}, ExampleState> {
  state = {
    value: '1',
    label:
      'LUI single Checkbox LUI single Checkbox LUI single Checkbox LUI single Checkbox LUI single Checkbox LUI single Checkbox LUI single Checkbox LUI single Checkbox LUI single Checkbox LUI single Checkbox LUI single Checkbox LUI single Checkbox LUI single Checkbox  LUI single Checkbox LUI single Checkbox LUI single Checkbox ',
    isChecked: true,
  };

  handleChange = () => {
    this.setState((prevState) => ({
      isChecked: !prevState.isChecked,
    }));
  };

  render() {
    const { value, label, isChecked } = this.state;
    return (
      <div style={{ width: '600px' }}>
        <Checkbox value={value} label={label} isChecked={isChecked} onChange={this.handleChange} />
        <Checkbox value={value} label={label} isChecked={isChecked} onChange={this.handleChange} isBoxed />
        <Checkbox value={value} label={label} isChecked={isChecked} onChange={this.handleChange} isDisabled />
      </div>
    );
  }
}

export default Example;
