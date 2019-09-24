import * as React from 'react';
import styled from 'styled-components';
import { Heading } from '@lendi-ui/typography';
import Field from '@lendi-ui/field';
import { pl } from '@lendi-ui/spacing';
import { Search } from '@lendi-ui/icon';
import { AutoCompleteStateless } from '..';
import { DataSourceItem, AutoCompleteValue } from '../../typings';
import { getFailedAsyncData } from '../../data-source.mock';

interface ExampleState {
  value: AutoCompleteValue;
  isLoading: boolean;
  dataSource: DataSourceItem[];
  isError: boolean;
  errorMessage: string;
}

const PaddedSearchIcon = styled(Search)`
  ${pl('sm')}
`;

export default class AutoCompleteStatelessAsyncFailedExample extends React.Component<{}, ExampleState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      value: 'Ade',
      dataSource: [],
      isLoading: false,
      isError: false,
      errorMessage: '',
    };
  }

  render() {
    return (
      <>
        <Heading size="xs">Error when asyn call get failed.</Heading>
        <Field error={this.state.errorMessage} touched={!!this.state.errorMessage}>
          <AutoCompleteStateless
            dataSource={this.state.dataSource}
            value={String(this.state.value)}
            isFullWidth
            onChange={async (e) => {
              this.setState({ isLoading: true, value: e.target.value });
              try {
                const dataSource = await getFailedAsyncData(e.target.value); // data comimg from API
                this.setState({ dataSource }, () => {
                  this.setState({ isLoading: false });
                });
              } catch (e) {
                this.setState({ dataSource: [] }, () => {
                  this.setState({ isLoading: false, isError: true, errorMessage: 'API failed while retrieing data' });
                });
              }
            }}
            onSelectItem={(item: DataSourceItem) => this.setState({ value: item.label })}
            isLoading={this.state.isLoading}
            before={<PaddedSearchIcon color="shade.500" />}
            isError={this.state.isError}
          />
        </Field>
      </>
    );
  }
}
