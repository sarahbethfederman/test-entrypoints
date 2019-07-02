import * as React from 'react';
import { AutoComplete } from '../index';
import styled from 'styled-components';
import Field from '@lendi-ui/field';
import { Button } from '@lendi-ui/button';
import { Heading } from '@lendi-ui/typography';
import { MOCK_DATA_SOURCE } from '../../data-source.mock';
import { AutoCompleteValue, DataSourceItem } from '../../types';

interface MyState {
  errorMessage: string;
  inputChanged: boolean;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export class AutoCompleteStatefullFieldExample extends React.Component<{}, MyState> {
  selectedAddress: AutoCompleteValue = '';
  transformedSuggestions = [];
  constructor(props: {}) {
    super(props);
    this.state = {
      errorMessage: '',
      inputChanged: false,
    };
  }

  async fetchResult(userInput: string) {
    this.transformedSuggestions = [];
    const result: any = await new Promise((res, rej) => {
      const filteredDataSource = MOCK_DATA_SOURCE.filter(
        (d) => d.label.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );
      return res(filteredDataSource);
    });

    this.transformedSuggestions = result;
    if (this.transformedSuggestions.length > 0) {
      this.setState({
        errorMessage: '',
      });
    }
    return this.transformedSuggestions;
  }

  onClick = () => {
    if (!this.selectedAddress) {
      return this.setState({
        errorMessage: 'Required!',
      });
    }

    if (this.selectedAddress && this.state.inputChanged) {
      return this.setState({
        errorMessage: 'Changed',
      });
    }
    // add logic to submit
  };

  render() {
    return (
      <>
        <Heading size="xs">This is Autocomplete example with Field wrapper and validation</Heading>
        <Wrapper>
          <Field error={this.state.errorMessage} touched={!!this.state.errorMessage}>
            <AutoComplete
              isFullWidth
              isError={!!this.state.errorMessage}
              dataSource={(t) => this.fetchResult(t)}
              onSelect={(item: DataSourceItem) => {
                this.selectedAddress = item.value;
                this.setState({
                  inputChanged: false,
                  errorMessage: '',
                });
              }}
              onChange={(e) => {
                this.setState({ inputChanged: true });
              }}
            />
          </Field>
          <Button variant="primary" onClick={this.onClick}>
            GET PROPERTY VALUE
          </Button>
        </Wrapper>
      </>
    );
  }
}
