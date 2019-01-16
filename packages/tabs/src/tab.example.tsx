import * as React from 'react';
import styled from 'styled-components';
import { Lock } from '../../icon/src';
import Tabs from '.';

const Container = styled.div`
  width: 100%;
`;

export default class TabsExample extends React.Component {
  state = {
    activeTab: 1,
  };

  render() {
    return (
      <Container>
        <Tabs
          variant="positive"
          onChange={(activeTab) => this.setState({ activeTab })}
          activeTab={this.state.activeTab}
        >
          <Tabs.Tab icon={<Lock color="secondary.500" />}>1</Tabs.Tab>
          <Tabs.Tab icon={<Lock color="secondary.500" />}>2</Tabs.Tab>
          <Tabs.Tab icon={<Lock color="secondary.500" />}>3</Tabs.Tab>
          <Tabs.Tab icon={<Lock color="secondary.500" />}>4</Tabs.Tab>
          <Tabs.Tab icon={<Lock color="secondary.500" />}>5</Tabs.Tab>
          <Tabs.Tab icon={<Lock color="secondary.500" />}>6</Tabs.Tab>
          <Tabs.Tab icon={<Lock color="secondary.500" />}>7</Tabs.Tab>
          <Tabs.Tab icon={<Lock color="secondary.500" />}>8</Tabs.Tab>
          <Tabs.Tab icon={<Lock color="secondary.500" />}>1</Tabs.Tab>
          <Tabs.Tab icon={<Lock color="secondary.500" />}>2</Tabs.Tab>
          <Tabs.Tab icon={<Lock color="secondary.500" />}>3</Tabs.Tab>
          <Tabs.Tab icon={<Lock color="secondary.500" />}>4</Tabs.Tab>
          <Tabs.Tab icon={<Lock color="secondary.500" />}>5</Tabs.Tab>
          <Tabs.Tab icon={<Lock color="secondary.500" />}>6</Tabs.Tab>
          <Tabs.Tab icon={<Lock color="secondary.500" />}>7</Tabs.Tab>
          <Tabs.Tab icon={<Lock color="secondary.500" />}>8</Tabs.Tab>
        </Tabs>
      </Container>
    );
  }
}
