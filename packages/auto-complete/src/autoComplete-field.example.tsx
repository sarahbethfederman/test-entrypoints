import * as React from 'react';
import AutoComplete, { SelectedValue } from './AutoComplete';
import { MOCK_DATA_SOURCE } from './AutoComplete/data-source.mock';
import styled from 'styled-components';
import Field from '@lendi-ui/field';
import { Button } from '@lendi-ui/button';
import { Heading } from '@lendi-ui/typography';

interface MyState {
  errorMessage: string;
  inputChanged: boolean;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default class Example extends React.Component<{}, MyState> {
  selectedAddress: SelectedValue = '';
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
        <Heading size="sm">This is Autocomlpete example with Field wrapper and validation</Heading>
        <Wrapper>
          <Field error={this.state.errorMessage} touched={!!this.state.errorMessage}>
            <AutoComplete
              isFullWidth
              isError={!!this.state.errorMessage}
              dataSource={(t) => this.fetchResult(t)}
              onSelect={(t: SelectedValue) => {
                this.selectedAddress = t;
                this.setState({
                  inputChanged: false,
                  errorMessage: '',
                });
              }}
              onChange={(val: SelectedValue) => {
                this.setState({ inputChanged: true });
              }}
            />
          </Field>
          <br />
          <Button variant="primary" onClick={this.onClick}>
            GET PROPERTY VALUE
          </Button>
          {/* {JSON.stringify(this.state, undefined, 2)} */}
        </Wrapper>
      </>
    );
  }
}
