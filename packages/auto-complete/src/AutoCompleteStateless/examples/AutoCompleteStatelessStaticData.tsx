import * as React from 'react';
import styled from 'styled-components';
import { Heading } from '@lendi-ui/typography';
import { pl } from '@lendi-ui/spacing';
import { Search } from '@lendi-ui/icon';
import { AutoCompleteStateless } from '..';
import { DataSourceItem, AutoCompleteValue } from '../../typings';
import { getStaticData } from '../../data-source.mock';

const PaddedSearchIcon = styled(Search)`
  ${pl('sm')}
`;

interface AutoCompleteStatelessExampleState {
  value: AutoCompleteValue;
  dataSource: DataSourceItem[];
}

export default class AutoCompleteStatelessStaticDataExample extends React.Component<
  {},
  AutoCompleteStatelessExampleState
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      value: '',
      dataSource: [],
    };
  }

  render() {
    return (
      <>
        <Heading size="xs">Basic Example with Static Data</Heading>
        <AutoCompleteStateless
          dataSource={this.state.dataSource}
          value={String(this.state.value)}
          onChange={(e) => {
            this.setState({ value: e.target.value, dataSource: getStaticData(e.target.value) });
          }}
          onSelectItem={(item: DataSourceItem) => {
            console.log(item);
            this.setState({ value: item.label });
          }}
          isFullWidth={false}
          before={<PaddedSearchIcon color="shade.500" />}
        />
      </>
    );
  }
}
