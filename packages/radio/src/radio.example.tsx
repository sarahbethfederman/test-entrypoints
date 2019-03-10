import * as React from 'react';
import { Radio } from './Radio/index';

interface ExampleState {
  value?: string;
  label?: string;
  isChecked?: boolean;
}

class Example extends React.Component<{}, ExampleState> {
  state = {
    value: '1',
    label: 'LUI single Radio Button',
    isChecked: false,
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
        <Radio value={value} label={label} isChecked={isChecked} onChange={this.handleChange} />
        <Radio value={value} label={label} isChecked={isChecked} onChange={this.handleChange} isBoxed />
        <Radio value={value} label={label} isChecked={isChecked} onChange={this.handleChange} isDisabled />
        <Radio value={value} label={label} isChecked={isChecked} onChange={this.handleChange} isBoxed isDisabled />
      </div>
    );
  }
}

export default Example;
