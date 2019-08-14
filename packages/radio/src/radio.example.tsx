import * as React from 'react';
import { Body } from '@lendi-ui/typography';
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
        <Body>XSM</Body>
        <Radio size="xs" value={value} label={label} isChecked={isChecked} onChange={this.handleChange} />
        <Radio size="xs" value={value} label={label} isChecked={isChecked} onChange={this.handleChange} isBoxed />
        <Radio size="xs" value={value} label={label} isChecked={isChecked} onChange={this.handleChange} isDisabled />
        <Radio
          size="xs"
          value={value}
          label={label}
          isChecked={isChecked}
          onChange={this.handleChange}
          isBoxed
          isDisabled
        />
        <hr />
        <Body>SM</Body>
        <Radio size="sm" value={value} label={label} isChecked={isChecked} onChange={this.handleChange} />
        <Radio size="sm" value={value} label={label} isChecked={isChecked} onChange={this.handleChange} isBoxed />
        <Radio size="sm" value={value} label={label} isChecked={isChecked} onChange={this.handleChange} isDisabled />
        <Radio
          size="sm"
          value={value}
          label={label}
          isChecked={isChecked}
          onChange={this.handleChange}
          isBoxed
          isDisabled
        />
        <hr />
        <Body>MD</Body>
        <Radio size="md" value={value} label={label} isChecked={isChecked} onChange={this.handleChange} />
        <Radio size="md" value={value} label={label} isChecked={isChecked} onChange={this.handleChange} isBoxed />
        <Radio size="md" value={value} label={label} isChecked={isChecked} onChange={this.handleChange} isDisabled />
        <Radio
          size="md"
          value={value}
          label={label}
          isChecked={isChecked}
          onChange={this.handleChange}
          isBoxed
          isDisabled
        />
        <hr />
        <Body>LG</Body>
        <Radio size="lg" value={value} label={label} isChecked={isChecked} onChange={this.handleChange} />
        <Radio size="lg" value={value} label={label} isChecked={isChecked} onChange={this.handleChange} isBoxed />
        <Radio size="lg" value={value} label={label} isChecked={isChecked} onChange={this.handleChange} isDisabled />
        <Radio
          size="lg"
          value={value}
          label={label}
          isChecked={isChecked}
          onChange={this.handleChange}
          isBoxed
          isDisabled
        />
      </div>
    );
  }
}

export default Example;
