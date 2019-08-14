import * as React from 'react';
import { Body } from '@lendi-ui/typography';
import { Checkbox } from './Checkbox/index';

interface ExampleState {
  value?: string;
  label?: string;
  isChecked?: boolean;
}

class Example extends React.Component<{}, ExampleState> {
  state = {
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
    const label = 'checkbox example';
    return (
      <div style={{ width: '600px' }}>
        <Body>xs checkboxes</Body>
        <Checkbox size="xs" value={value} label={label} isChecked={isChecked} onChange={this.handleChange} />
        <Checkbox size="xs" value={value} label={label} isChecked={isChecked} onChange={this.handleChange} isBoxed />
        <Checkbox size="xs" value={value} label={label} isChecked={isChecked} onChange={this.handleChange} isDisabled />
        <hr />
        <Body>sm checkboxes</Body>
        <Checkbox size="sm" value={value} label={label} isChecked={isChecked} onChange={this.handleChange} />
        <Checkbox size="sm" value={value} label={label} isChecked={isChecked} onChange={this.handleChange} isBoxed />
        <Checkbox size="sm" value={value} label={label} isChecked={isChecked} onChange={this.handleChange} isDisabled />
        <hr />
        <Body>md checkboxes</Body>
        <Checkbox size="md" value={value} label={label} isChecked={isChecked} onChange={this.handleChange} />
        <Checkbox size="md" value={value} label={label} isChecked={isChecked} onChange={this.handleChange} isBoxed />
        <Checkbox size="md" value={value} label={label} isChecked={isChecked} onChange={this.handleChange} isDisabled />
        <hr />
        <Body>lg checkboxes</Body>
        <Checkbox size="lg" value={value} label={label} isChecked={isChecked} onChange={this.handleChange} />
        <Checkbox size="lg" value={value} label={label} isChecked={isChecked} onChange={this.handleChange} isBoxed />
        <Checkbox size="lg" value={value} label={label} isChecked={isChecked} onChange={this.handleChange} isDisabled />
        <hr />
      </div>
    );
  }
}

export default Example;
