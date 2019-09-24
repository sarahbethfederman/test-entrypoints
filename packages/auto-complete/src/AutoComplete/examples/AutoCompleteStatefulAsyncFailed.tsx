import * as React from 'react';
import styled from 'styled-components';
import Field from '@lendi-ui/field';
import { Heading } from '@lendi-ui/typography';
import { AutoComplete } from '../index';
import { getFailedAsyncData } from '../../data-source.mock';
import { AutoCompleteValue, DataSourceItem } from '../../typings';

interface MyState {
  errorMessage: string;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export class AutoCompleteStatefullAsyncFailedExample extends React.Component<{}, MyState> {
  selectedAddress: AutoCompleteValue = '';
  transformedSuggestions = [];
  constructor(props: {}) {
    super(props);
    this.state = {
      errorMessage: '',
    };
  }

  async fetchResult(userInput: string) {
    this.transformedSuggestions = [];
    try {
      await getFailedAsyncData(userInput);
    } catch (e) {
      this.setState({
        errorMessage: 'API failed while fetching.',
      });
    }

    return this.transformedSuggestions;
  }

  render() {
    return (
      <>
        <Heading size="xs">Error when asyn call get failed.</Heading>
        <Wrapper>
          <Field error={this.state.errorMessage} touched={!!this.state.errorMessage}>
            <AutoComplete
              isError={!!this.state.errorMessage}
              dataSource={(t) => this.fetchResult(t)}
              onSelectItem={(item: DataSourceItem) => {
                this.selectedAddress = item.value;
                this.setState({
                  errorMessage: '',
                });
              }}
            />
          </Field>
        </Wrapper>
      </>
    );
  }
}
