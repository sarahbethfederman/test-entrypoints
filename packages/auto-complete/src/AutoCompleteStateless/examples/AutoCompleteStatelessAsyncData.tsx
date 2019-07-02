import * as React from 'react';
import styled from 'styled-components';

import { pl } from '@lendi-ui/spacing';
import { Search } from '@lendi-ui/icon';
import { AutoCompleteStateless } from '..';
import { DataSourceItem, AutoCompleteValue } from '../../types';
import { getAsyncData } from '../../data-source.mock';
import { Heading } from '@lendi-ui/typography';

interface ExampleState {
  value: AutoCompleteValue;
  isLoading: boolean;
  dataSource: DataSourceItem[];
}

const PaddedSearchIcon = styled(Search)`
  ${pl('sm')}
`;

export default class AutoCompleteStatelessAsyncDataExample extends React.Component<{}, ExampleState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      value: 'Ade',
      dataSource: [],
      isLoading: false,
    };
  }

  render() {
    return (
      <>
        <Heading size="xs">
          Autocomplete works with API async call. The onChange event provides you the value to make a server request
          with, then change state and pass in new dataSource.
        </Heading>
        <AutoCompleteStateless
          dataSource={this.state.dataSource}
          value={this.state.value}
          isFullWidth
          onChange={async (e) => {
            this.setState({ isLoading: true, value: e.target.value });
            try {
              const dataSource = await getAsyncData(e.target.value); // data comimg from API
              this.setState({ dataSource }, () => {
                this.setState({ isLoading: false });
              });
            } catch (e) {
              this.setState({ dataSource: [] }, () => {
                this.setState({ isLoading: false });
              });
            }
          }}
          onSelect={(item: DataSourceItem) => this.setState({ value: item.label })}
          isLoading={this.state.isLoading}
          before={<PaddedSearchIcon color="shade.500" />}
        />
      </>
    );
  }
}
