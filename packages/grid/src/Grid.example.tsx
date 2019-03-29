import * as React from 'react';
import Grid from './index';

export default () => (
  <>
    <Grid>
      <Grid.Unit size={{ mobile: 1, desktop: 1 / 3 }}>1/3</Grid.Unit>
      <Grid.Unit size={{ mobile: 1, desktop: 1 / 3 }}>1/3</Grid.Unit>
      <Grid.Unit size={{ mobile: 1, desktop: 1 / 3 }}>1/3</Grid.Unit>
    </Grid>
    <br />
    <Grid>
      <Grid.Unit size={{ mobile: 1, desktop: 1 / 6 }}>1/6</Grid.Unit>
      <Grid.Unit size={{ mobile: 1, desktop: 1 / 3 }}>1/3</Grid.Unit>
      <Grid.Unit size={{ mobile: 1, desktop: 1 / 2 }}>1/2</Grid.Unit>
    </Grid>
  </>
);
