import * as React from 'react';
import styled from 'styled-components';
import { Lock } from '../../icon/src';
import Tabs from '.';

const Container = styled.div`
  width: 100%;
`;

export default class TabsExample extends React.Component {
  state = {
    activeTabIndex: 0,
  };

  render() {
    return (
      <Container>
        <Tabs
          id="tabId"
          data-data="moreData"
          aria-label="tabLabel"
          onChangeTabIndex={(activeTabIndex) => this.setState({ activeTabIndex })}
          activeTabIndex={this.state.activeTabIndex}
          isInverse
        >
          <Tabs.Tab icon={<Lock color="secondary.500" />}>1</Tabs.Tab>
          <Tabs.Tab icon={<Lock color="secondary.500" />}>2</Tabs.Tab>
          <Tabs.Tab icon={<Lock color="secondary.500" />}>3</Tabs.Tab>
          <Tabs.Tab icon={<Lock color="secondary.500" />}>4</Tabs.Tab>
          <Tabs.Tab icon={<Lock color="secondary.500" />}>5</Tabs.Tab>
        </Tabs>
        <br />
        <br />
        <Tabs
          onChangeTabIndex={(activeTabIndex) => this.setState({ activeTabIndex })}
          activeTabIndex={this.state.activeTabIndex}
        >
          <Tabs.Tab icon={<Lock color="secondary.500" />}>1</Tabs.Tab>
          <Tabs.Tab icon={<Lock color="secondary.500" />}>2</Tabs.Tab>
          <Tabs.Tab icon={<Lock color="secondary.500" />}>3</Tabs.Tab>
          <Tabs.Tab icon={<Lock color="secondary.500" />}>4</Tabs.Tab>
          <Tabs.Tab icon={<Lock color="secondary.500" />}>5</Tabs.Tab>
        </Tabs>
      </Container>
    );
  }
}
