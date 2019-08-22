import * as React from 'react';
import { Select } from '../index';

import { Heading } from '@lendi-ui/typography';
import { MOCK_DATA_SOURCE } from './data-source.mock';
import { OptionType } from '../types';

interface MyState {
  values: OptionType[];
  inputValue: string;
  isBlurred: boolean;
  isFocused: boolean;
}

export default class StateControlled extends React.Component<{}, MyState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      values: [
        {
          label: 'Adelaide Bank',
          value: 'ADE',
        },
      ],
      inputValue: 'ab',
      isBlurred: false,
      isFocused: false,
    };
  }

  render() {
    return (
      <>
        <Heading size="xs">State controlled Example - and Events like onChange, onBlur, onFocus,</Heading>
        <br />
        <pre>{JSON.stringify(this.state, undefined, 2)}</pre>
        <Select
          size="sm"
          isClearable={true}
          options={MOCK_DATA_SOURCE}
          isFullWidth={true}
          placeholder="On Change"
          onChangeItem={(value: any) => this.handleChange(value)}
          value={this.state.values}
          isClearableByBackspace={true}
          onFocus={() => this.setState({ isFocused: true, isBlurred: false })}
          onBlur={() => this.setState({ isFocused: false, isBlurred: true })}
          hideSelectedOptions={true}
          isError={false}
          isMultiple
          inputValue={this.state.inputValue}
          onInputChange={(inputValue) => {
            this.setState({
              inputValue,
            });
          }}
        />
      </>
    );
  }

  handleChange = (values: OptionType[]) => {
    this.setState({ values });
  };
}
