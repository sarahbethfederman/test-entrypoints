import * as React from 'react';
import styled from 'styled-components';
import { Lock } from '../../icon/src';
import Tabs from '.';

const Container = styled.div`
  width: 100%;
`;

export default () => (
  <Container>
    <Tabs variant="positive" onChange={() => console.log('changed')}>
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
