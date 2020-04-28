import * as React from 'react';
import styled from 'styled-components';
import { Body } from '@lendi-ui/typography';
import { ButtonGroup } from '@lendi-ui/button';

const SmallContainer = styled.div`
  max-width: 360px;
  border: 1px dotted red;
`;

const CenterContainer = styled.div`
  text-align: center;
`;

const FixedWidthContainer = styled.div`
  width: 500px;
  border: 1px dotted red;
`;

export default () => (
  <>
    <Body>'xs' button group:</Body>
    <ButtonGroup size="xs">
      <ButtonGroup.Button variant="primary">I want to refinance</ButtonGroup.Button>
      <ButtonGroup.Button variant="primary">I want to buy a new home</ButtonGroup.Button>
    </ButtonGroup>
    <hr />
    <Body>Margin should be on the right when not wrapped:</Body>
    <ButtonGroup>
      <ButtonGroup.Button variant="primary">I want to refinance</ButtonGroup.Button>
      <ButtonGroup.Button variant="primary">I want to buy a new home</ButtonGroup.Button>
    </ButtonGroup>
    <hr />
    <Body>Margin should be on bottom and right when wrapped:</Body>
    <SmallContainer>
      <ButtonGroup>
        <ButtonGroup.Button variant="primary">I want to refinance</ButtonGroup.Button>
        <ButtonGroup.Button variant="primary">I want to buy a new home</ButtonGroup.Button>
      </ButtonGroup>
    </SmallContainer>
    <hr />
    <Body>Group should be centered:</Body>
    <CenterContainer>
      <ButtonGroup>
        <ButtonGroup.Button variant="primary">I want to refinance</ButtonGroup.Button>
        <ButtonGroup.Button variant="primary">I want to buy a new home</ButtonGroup.Button>
      </ButtonGroup>
    </CenterContainer>
    <hr />
    <Body>Group should inherit full width from the parent and not use margin</Body>
    <FixedWidthContainer>
      <ButtonGroup isFullWidth={true}>
        <ButtonGroup.Button variant="primary">I want to refinance</ButtonGroup.Button>
        <ButtonGroup.Button variant="primary">I want to buy a new home</ButtonGroup.Button>
        <ButtonGroup.Button variant="primary">I want to buy a new home</ButtonGroup.Button>
        <ButtonGroup.Button variant="primary">I want to buy a new home</ButtonGroup.Button>
      </ButtonGroup>
    </FixedWidthContainer>
  </>
);