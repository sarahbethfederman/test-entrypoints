import * as React from 'react';
import styled from 'styled-components';
import { p } from '@lendi-ui/spacing';
import { bg, color } from '@lendi-ui/color';
import { body } from '@lendi-ui/typography';
import Grid from '.';

const Content = styled.code`
  display: block;
  ${p('xxs')}
  ${bg('primary.300')}
  ${body({ size: 'xs', align: 'center' })}
  font-weight: bold;
  border: 1px solid ${color('shade.0')}
`;

const Story = () => (
  <>
    <Grid>
      <Grid.Unit>
        <Content>1</Content>
      </Grid.Unit>
    </Grid>

    <Grid>
      <Grid.Unit size={1 / 2}>
        <Content>1/2</Content>
      </Grid.Unit>
      <Grid.Unit size={1 / 2}>
        <Content>1/2</Content>
      </Grid.Unit>
    </Grid>

    <Grid>
      <Grid.Unit size={1 / 3}>
        <Content>1/3</Content>
      </Grid.Unit>
      <Grid.Unit size={1 / 3}>
        <Content>1/3</Content>
      </Grid.Unit>
      <Grid.Unit size={1 / 3}>
        <Content>1/3</Content>
      </Grid.Unit>
    </Grid>

    <Grid>
      <Grid.Unit size={1 / 4}>
        <Content>1/4</Content>
      </Grid.Unit>
      <Grid.Unit size={1 / 4}>
        <Content>1/4</Content>
      </Grid.Unit>
      <Grid.Unit size={1 / 4}>
        <Content>1/4</Content>
      </Grid.Unit>
      <Grid.Unit size={1 / 4}>
        <Content>1/4</Content>
      </Grid.Unit>
    </Grid>

    <Grid>
      <Grid.Unit size={1 / 5}>
        <Content>1/5</Content>
      </Grid.Unit>
      <Grid.Unit size={1 / 5}>
        <Content>1/5</Content>
      </Grid.Unit>
      <Grid.Unit size={1 / 5}>
        <Content>1/5</Content>
      </Grid.Unit>
      <Grid.Unit size={1 / 5}>
        <Content>1/5</Content>
      </Grid.Unit>
      <Grid.Unit size={1 / 5}>
        <Content>1/5</Content>
      </Grid.Unit>
    </Grid>
  </>
);

export default Story;
