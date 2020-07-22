import { bg } from '@lendi-ui/color';
import { Button } from '@lendi-ui/button';
import Container from '@lendi-ui/container';
import { mt, SpacingNameOrSpacingNameMap } from '@lendi-ui/spacing';
import { Input } from '@lendi-ui/text-input';
import { Body, Heading } from '@lendi-ui/typography';
import * as React from 'react';
import styled from 'styled-components';
import Grid from './index';

const Page = styled.div`
  ${bg('shade.25')};
  height: calc(100vh - 3 * var(--lendi-ui-size));
`;

interface SpacerProps {
  marginTop: SpacingNameOrSpacingNameMap;
}

const Spacer = styled.div<SpacerProps>`
  ${({ marginTop }) => mt(marginTop)};
`;

export default () => (
  <Page>
    <Container>
      <Grid>
        <Grid.Unit
          offset={{ sm: 1 / 6, md: 1 / 8, lg: 1 / 5, xl: 1 / 4 }}
          size={{ xs: 1, sm: 2 / 3, md: 3 / 4, lg: 3 / 5, xl: 1 / 2 }}
        >
          <Heading align="center" mb="xl" mt="md">
            Tell us more about your current employment situation.
          </Heading>

          <Body>On what basis are you currently employed?</Body>

          <Spacer marginTop="xs" />

          <Input isFullWidth onChange={(e) => e} />

          <Body mt="lg">What is your employer's name?</Body>

          <Spacer marginTop="xs" />

          <Input isFullWidth onChange={(e) => e} />

          <Body mt="lg">Do you earn any of the following on top of your base?</Body>

          <Spacer marginTop="xs" />

          <Input isFullWidth onChange={(e) => e} />

          <Spacer marginTop="sm" />

          <Grid gutter="sm">
            <Grid.Unit size={1 / 2}>
              <Input isFullWidth onChange={(e) => e} />
            </Grid.Unit>

            <Grid.Unit size={1 / 2}>
              <Input isFullWidth onChange={(e) => e} />
            </Grid.Unit>
          </Grid>

          <Spacer marginTop="xxl" />

          <Grid>
            <Grid.Unit offset={{ md: 1 / 6 }} size={{ md: 2 / 3 }}>
              <Button variant="primary" isFullWidth>
                Next
              </Button>
            </Grid.Unit>
          </Grid>
        </Grid.Unit>
      </Grid>
    </Container>
  </Page>
);
