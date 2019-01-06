import * as React from 'react';
import Input from './index';

export interface ExampleState {
  value: string;
}

class Example extends React.Component<{}, ExampleState> {
  state = {
    value: '',
  };

  onChange = (e: any): void => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <div style={{ width: '600px' }}>
        <Input
          size="md"
          value={this.state.value}
          placeholder="input here ..."
          onChange={this.onChange}
          isFullWidth={true}
          after={<span style={{ width: '24px', height: '24px' }}>x</span>}
        />
        <Input
          size="md"
          value={this.state.value}
          placeholder="input here ..."
          onChange={this.onChange}
          isFullWidth={false}
          after={<span style={{ width: '24px', height: '24px' }}>x</span>}
        />
        <Input
          size="md"
          value={this.state.value}
          placeholder="input here ..."
          onChange={this.onChange}
          after={<span style={{ width: '24px', height: '24px' }}>x</span>}
        />
      </div>
    );
  }
}

export default Example;
