import * as React from 'react';
import Grid from '@lendi-ui/grid';
import SimpleAccordionExample from './SimpleExample';
import AccordionGroupExample from './AccordionGroupExample';
import WhiteListProps from './WhiteListPropsExample';
import SizeAndAlignment from './SizeAndAlignmentExample';

export default () => (
  <>
    <Grid />
    <hr />
    <Grid>
      <Grid.Unit size={{ mobile: 1, desktop: 1 / 3 }} style={{ padding: '10px', border: '1px solid' }}>
        <SimpleAccordionExample />
      </Grid.Unit>
      <Grid.Unit size={{ mobile: 1, desktop: 1 / 3 }} style={{ padding: '10px', border: '1px solid' }}>
        <AccordionGroupExample />
      </Grid.Unit>
      <Grid.Unit size={{ mobile: 1, desktop: 1 / 3 }} style={{ padding: '10px', border: '1px solid' }}>
        <WhiteListProps />
        <SizeAndAlignment />
      </Grid.Unit>
    </Grid>
  </>
);
