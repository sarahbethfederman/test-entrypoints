import * as React from 'react';
import styled from 'styled-components';
import { p } from '@lendi-ui/spacing';
import { bg, color } from '@lendi-ui/color';
import { body } from '@lendi-ui/typography';
import { grid, unit } from '.';

const Grid = styled.div`
  ${grid};
`;

const Unit = styled.code`
  ${p('xxs')}
  ${bg('primary.300')}
  ${body({ size: 'xs', align: 'center' })}
  ${unit}
  font-weight: bold;
  border: 1px solid ${color('shade.0')}
`;

const Story = () => (
  <>
    <Grid>
      <Unit>1</Unit>
    </Grid>

    <Grid>
      <Unit size={1 / 2}>1/2</Unit>
      <Unit size={1 / 2}>1/2</Unit>
    </Grid>

    <Grid>
      <Unit size={1 / 3}>1/2</Unit>
      <Unit size={1 / 3}>1/3</Unit>
      <Unit size={1 / 3}>1/3</Unit>
    </Grid>

    <Grid>
      <Unit size={1 / 4}>1/4</Unit>
      <Unit size={1 / 4}>1/4</Unit>
      <Unit size={1 / 4}>1/4</Unit>
      <Unit size={1 / 4}>1/4</Unit>
    </Grid>

    <Grid>
      <Unit size={1 / 5}>1/5</Unit>
      <Unit size={1 / 5}>1/5</Unit>
      <Unit size={1 / 5}>1/5</Unit>
      <Unit size={1 / 5}>1/5</Unit>
      <Unit size={1 / 5}>1/5</Unit>
    </Grid>
  </>
);

export default Story;
