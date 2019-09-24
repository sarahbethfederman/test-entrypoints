import * as React from 'react';
import styled from 'styled-components';
import { p } from '@lendi-ui/spacing';
import { Body } from '@lendi-ui/typography';
import { Button } from '@lendi-ui/button';
import { ModeEdit, Delete } from '@lendi-ui/icon';
import { color } from '@lendi-ui/color';
import Card from '.';

const CardWrapper = styled.div`
  ${p('md')}
  ${({ width }: { width?: string }) => `max-width: ${width ? width : '500px'}`}
`;

export default () => (
  <>
    <Body>Card structure - The header, content and footer are all optional</Body>
    <CardWrapper>
      <Card>
        <Card.Header>This heading is in Cabin</Card.Header>
        <Card.Content>The body uses open sans. This should be the default appearence of a card.</Card.Content>
      </Card>
    </CardWrapper>
    <CardWrapper>
      <Card>
        <Card.Content>Psst! This is a teeny tiny card that only contains content.</Card.Content>
      </Card>
    </CardWrapper>
    <CardWrapper>
      <Card>
        <Card.Header>Ex fastidii perseque</Card.Header>
        <Card.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus lacus ut urna entum sodales.
        </Card.Content>
        <Card.Footer align="right">
          <ModeEdit color="primary.500" width="1.5em" height="1.5em" />
          <Delete color="primary.500" width="1.5em" height="1.5em" />
        </Card.Footer>
      </Card>
    </CardWrapper>
    <hr />
    <Body>Depth</Body>
    <CardWrapper>
      <Card>
        <Card.Content>The default depth is 1</Card.Content>
      </Card>
    </CardWrapper>
    <CardWrapper>
      <Card depth={2}>
        <Card.Content>This card has a depth of 2</Card.Content>
      </Card>
    </CardWrapper>
    <CardWrapper>
      <Card depth={3}>
        <Card.Content>This card has a depth of 3</Card.Content>
      </Card>
    </CardWrapper>
    <CardWrapper>
      <Card depth={4}>
        <Card.Content>This card has the deepest shadow, a depth of 4</Card.Content>
      </Card>
    </CardWrapper>
    <hr />
    <Body>Colour variants</Body>
    <Body>The forground, background, and border can be altered</Body>
    <CardWrapper width="700px">
      <Card bg="primary.500" fg="shade.0">
        <Card.Header>This heading is in Cabin</Card.Header>
        <Card.Content>
          The body uses open sans. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus lacus ut urna
          entum sodales. Sed pharetra interdum pellentesque. In felis leo, faucibus sed nisl eu, fringilla viverra gula.
          Donec sagittis aliquet tincidunt. Curabitur nec eleifend dolor, quis mattis lorem. Interdum et malesuada fames
          ac ante ipsum primis in faucibus
        </Card.Content>
        <Card.Footer>
          <Button isInverse isFullWidth variant="primary" size="md">
            Click Me!{' '}
          </Button>
        </Card.Footer>
      </Card>
    </CardWrapper>
    <CardWrapper>
      <Card bg="primary.50" border={`1px solid ${color('primary.500')}`}>
        <Card.Header>This heading is in Cabin</Card.Header>
        <Card.Content>
          The body uses open sans. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus lacus ut urna
          entum sodales. Sed pharetra interdum pellentesque.
        </Card.Content>
        <Card.Footer align="right">
          <Button variant="primary" size="xs">
            Click Me!
          </Button>
        </Card.Footer>
      </Card>
    </CardWrapper>
    <CardWrapper>
      <Card bg="secondary.500" fg="shade.0">
        <Card.Header>Hey you there!</Card.Header>
        <Card.Content>This is a teeny tiny card with a header.</Card.Content>
      </Card>
    </CardWrapper>
  </>
);
