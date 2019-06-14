import * as React from 'react';
import styled from 'styled-components';

import { mr } from '@lendi-ui/spacing';
import { Check, Close } from '@lendi-ui/icon';
import { Heading, Body } from '@lendi-ui/typography';
import Container from '@lendi-ui/container';

import { Layout } from '../Layout';
import { ContentWrapper } from '../Layout/index.style';

const HeadingCheck = styled(Check)`
  ${mr('xxs')}
`;

const HeadingClose = styled(Close)`
  ${mr('xxs')}
`;

export const Home = () => (
  <Layout>
    <Container>
      <ContentWrapper>
        <Heading size="xl">Lendi UI</Heading>
        <Body size="lg" mt="md">
          Lendi UI (or LUI) is Lendi's Design System built with React. Design systems improve consistency in a platform
          by utilising reusable, responsive and modular components that are built into a living, ever evolving system.
          LUI represents a unified language so that designers, developers, and product owners can work cohesively and
          consistently.
        </Body>

        <Body size="lg" mt="xs">
          This provides Lendi with:
        </Body>

        <ul>
          <li>
            <Body size="lg">Consistent UI across our many platforms</Body>
          </li>
          <li>
            <Body size="lg">Faster turnaround as teams can focus on application logic instead of pixe</Body>
          </li>
          <li>
            <Body size="lg">Clearer direction for developers when given a design</Body>
          </li>
          <li>
            <Body size="lg">Design/UX can focus on user journies and customer experience</Body>
          </li>
          <li>
            <Body size="lg">Developers can focus on application logic</Body>
          </li>
        </ul>

        <Body size="lg" mt="md">
          This web site represents a catalog of general purpose UI components used across Lendi applications. Using this
          library teams can quickly create user interfaces consistent with Lendi’s look and feel.
        </Body>

        <Heading size="sm" mt="md">
          <HeadingCheck color="success.500" />
          What this is
        </Heading>
        <ul>
          <li>
            <Body size="lg">A catalogue of repeatable design patterns and UI components</Body>
          </li>
        </ul>

        <Heading size="sm" mt="md">
          <HeadingClose color="error.500" />
          What this is NOT
        </Heading>
        <ul>
          <li>
            <Body size="lg">A place for bespoke/once-off UI elements or interactions</Body>
          </li>
          <li>
            <Body size="lg">A place for repeatable elements (such as copy) that are not UI related</Body>
          </li>
        </ul>
      </ContentWrapper>
    </Container>
  </Layout>
);
