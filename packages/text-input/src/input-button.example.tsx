import * as React from 'react';
import { Input } from './index';
import { InputButton } from './InputButton/index';

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
          isFullWidth={false}
          after={
            <InputButton variant="primary" size="md" onClick={() => alert(this.state.value)}>
              search
            </InputButton>
          }
        />
        <br />
        <br />
        <Input
          size="md"
          value={this.state.value}
          placeholder="input here ..."
          onChange={this.onChange}
          isFullWidth={true}
          after={
            <InputButton variant="primary" size="md" onClick={() => alert(this.state.value)}>
              search
            </InputButton>
          }
        />
      </div>
    );
  }
}

export default Example;
