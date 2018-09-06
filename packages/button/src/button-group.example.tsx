import * as React from 'react';
import styled from 'styled-components';
import { Body } from '@lendi-ui/typography';
import { ButtonGroup } from '@lendi-ui/button';

const SmallContainer = styled.div`
  max-width: 360px;
`;

export default () => (
  <>
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
  </>
);
