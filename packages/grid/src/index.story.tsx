import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Theme from '@lendi-ui/theme';
import { p } from '@lendi-ui/spacing';
import { bg, color } from '@lendi-ui/color';
import { body } from '@lendi-ui/typography';
import { grid, unit } from '.';

const Grid = styled.div`
  ${grid};
`;

const Unit = styled.code`
  ${p('xxs')}
  ${bg('brand.primary.light')}
  ${body({ align: 'center' })}
  ${unit}
  border: 1px solid ${color('shade.8')}
`;

storiesOf('Foundation/grid', module).add('basic', () => (
  <Theme>
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

      <br />

      <Grid>
        <Unit size={1 / 2}>1/2</Unit>
        <Unit size={1 / 4}>1/4</Unit>
      </Grid>
    </>
  </Theme>
));
