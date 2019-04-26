import * as React from 'react';
import { Input } from './index';

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
    const { value } = this.state;
    return (
      <div>
        <br />
        <br />
        <Input size="sm" isAutoFocus value={value} onChange={this.onChange} placeholder="So smol 🎉" />
        <br />
        <br />
        <Input size="md" value={value} onChange={this.onChange} placeholder="I'm medium 🎉" />
        <br />
        <br />
        <Input size="lg" value={value} onChange={this.onChange} placeholder="Wow I'm LARGE! 🎉" />
        <br />
        <br />
        <div style={{ background: 'gray', borderRadius: '6px', padding: '15px' }}>
          <Input isInverse value={value} onChange={this.onChange} placeholder="Inverse 👌" />
        </div>
        <br />
        <Input isDisabled value={value} onChange={this.onChange} placeholder="I'm disabled guys 😪" />
        <br />
        <br />
        <Input isError value={value} onChange={this.onChange} placeholder="Uh oh, error mode 😬" />
        <br />
        <br />
        <Input
          isFullWidth
          value={value}
          onChange={this.onChange}
          placeholder="I'm really, really long and so very full-width 😳"
        />
      </div>
    );
  }
}

export default Example;
