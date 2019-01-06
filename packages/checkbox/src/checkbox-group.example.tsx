import * as React from 'react';
import { CheckboxGroup } from './CheckboxGroup/index';

interface ExampleState {
  values_1?: string[];
  labels_1?: string[];
  value_1?: string[];
  values_2?: string[];
  labels_2?: string[];
  value_2?: string[];
  values_3?: string[];
  labels_3?: string[];
  value_3?: string[];
}

class Example extends React.Component<{}, ExampleState> {
  state = {
    values_1: ['1'],
    labels_1: ['LUI CheckboxGroup option 1', 'LUI CheckboxGroup option 2', 'LUI CheckboxGroup option 3'],
    value_1: ['1', '2', '3'],
    values_2: ['1'],
    labels_2: ['LUI CheckboxGroup option 1', 'LUI CheckboxGroup option 2', 'LUI CheckboxGroup option 3'],
    value_2: ['1', '2', '3'],
    values_3: ['_1'],
    labels_3: ['LUI CheckboxGroup option 1', 'LUI CheckboxGroup option 2', 'LUI CheckboxGroup option 3'],
    value_3: ['1', '2', '3'],
  };

  onChange_1 = (e: any): void => {
    const newValues = this.state.values_1;
    if (newValues.includes(e.target.value.toString())) {
      const index = newValues.indexOf(e.target.value.toString());
      newValues.splice(index, 1);
    } else {
      newValues.push(e.target.value.toString());
    }
    this.setState({ values_1: newValues });
  };

  onChange_2 = (e: any): void => {
    const newValues = this.state.values_2;
    if (newValues.includes(e.target.value.toString())) {
      const index = newValues.indexOf(e.target.value.toString());
      newValues.splice(index, 1);
    } else {
      newValues.push(e.target.value.toString());
    }
    this.setState({ values_2: newValues });
  };

  onChange_3 = (e: any): void => {
    const newValues = this.state.values_3;
    if (newValues.includes(e.target.value.toString())) {
      const index = newValues.indexOf(e.target.value.toString());
      newValues.splice(index, 1);
    } else {
      newValues.push(e.target.value.toString());
    }
    this.setState({ values_3: newValues });
  };

  render() {
    return (
      <div style={{ width: '600px' }}>
        <CheckboxGroup values={this.state.values_1} onChange={this.onChange_1}>
          <CheckboxGroup.Checkbox label={this.state.labels_1[0]} value={this.state.value_1[0]} />
          <CheckboxGroup.Checkbox label={this.state.labels_1[1]} value={this.state.value_1[1]} />
          <CheckboxGroup.Checkbox label={this.state.labels_1[2]} value={this.state.value_1[2]} />
        </CheckboxGroup>
        <CheckboxGroup isBoxed={true} values={this.state.values_2} onChange={this.onChange_2}>
          <CheckboxGroup.Checkbox label={this.state.labels_2[0]} value={this.state.value_2[0]} />
          <CheckboxGroup.Checkbox label={this.state.labels_2[1]} value={this.state.value_2[1]} />
          <CheckboxGroup.Checkbox label={this.state.labels_2[2]} value={this.state.value_2[2]} />
        </CheckboxGroup>
        <CheckboxGroup isDisabled={true} values={this.state.values_3} onChange={this.onChange_3}>
          <CheckboxGroup.Checkbox label={this.state.labels_3[0]} value={this.state.value_3[0]} />
          <CheckboxGroup.Checkbox label={this.state.labels_3[1]} value={this.state.value_3[1]} />
          <CheckboxGroup.Checkbox label={this.state.labels_3[2]} value={this.state.value_3[2]} />
        </CheckboxGroup>
      </div>
    );
  }
}

export default Example;
