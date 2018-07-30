import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Theme from '@auscred/theme';
import { p } from '@auscred/spacing';
import { bg, color } from '@auscred/color';
import { body } from '@auscred/typography';
import { grid, unit } from '.';

const Grid = styled.div`
  ${grid};
`;

const Unit = styled.code`
  ${p(2)}
  ${bg('brand.primary.light')}
  ${body({ align: 'center' })}
  ${unit}
  border: 1px solid ${color('shade.8')}
`;

storiesOf('Foundation/grid', module).addWithJSX('basic', () => (
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
