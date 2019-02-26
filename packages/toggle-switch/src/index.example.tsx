import * as React from 'react';
import ToggleSwitch from './index';

interface ExampleState {
  value?: string;
  label?: string;
  isChecked?: boolean;
}

class Example extends React.Component<{}, ExampleState> {
  state: ExampleState = {
    value: '1',
    isChecked: true,
  };

  handleChange = () => {
    this.setState((prevState) => ({
      isChecked: !prevState.isChecked,
    }));
  };

  render() {
    const { value, isChecked } = this.state;
    return (
      <div>
        <ToggleSwitch value={value} label={'Default'} isChecked={isChecked} onChange={this.handleChange} />
        <ToggleSwitch value={value} label={'Boxed'} isChecked={isChecked} onChange={this.handleChange} isBoxed />
        <ToggleSwitch value={value} label={'Disabled'} isChecked={isChecked} onChange={this.handleChange} isDisabled />
        <ToggleSwitch value={value} label={'Loading'} isChecked={isChecked} onChange={this.handleChange} isLoading />
        <ToggleSwitch value={value} label={'Error'} isChecked={isChecked} onChange={this.handleChange} isError />
        <ToggleSwitch value={value} label={'Small'} isChecked={isChecked} onChange={this.handleChange} size={'sm'} />
      </div>
    );
  }
}

export default Example;
