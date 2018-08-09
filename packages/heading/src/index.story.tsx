import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { wInfo } from '@lendi-ui/story-utils';
import Theme from '@lendi-ui/theme';
import { H1, H2, H3, H4, H5, H6 } from '.';

storiesOf('Components/heading', module)
  .addWithJSX(
    'H1',
    wInfo(`
  ### Usage
  ~~~js
    <H1 color="brand.primary" align="center">
      H1: Adelaide's June 2018 property market news
    </H1>
  ~~~`)(() => (
      <Theme>
        <H1 color="brand.primary" align="center">
          H1: Adelaide's June 2018 property market news
        </H1>
      </Theme>
    ))
  )
  .addWithJSX(
    'H2',
    wInfo(`
    ### Usage
    ~~~js
      <H2>
        H2: Adelaide's June 2018 property market news
      </H2>
    ~~~`)(() => (
      <Theme>
        <H2>H2: 7 things you need to know before building a granny flat</H2>
      </Theme>
    ))
  )
  .addWithJSX(
    'H3',
    wInfo(`
    ### Usage
    ~~~js
      <H3>
        H3: Adelaide's June 2018 property market news
      </H3>
    ~~~`)(() => (
      <Theme>
        <H3>H3: How to own your home sooner</H3>
      </Theme>
    ))
  )
  .addWithJSX(
    'H4',
    wInfo(`
    ### Usage
    ~~~js
      <H4>
        H4: Adelaide's June 2018 property market news
      </H4>
    ~~~`)(() => (
      <Theme>
        <H4>H4: How to own your home sooner</H4>
      </Theme>
    ))
  )
  .addWithJSX(
    'H5',
    wInfo(`
    ### Usage
    ~~~js
      <H5>
        H5: Adelaide's June 2018 property market news
      </H5>
    ~~~`)(() => (
      <Theme>
        <H5>H5: How to own your home sooner</H5>
      </Theme>
    ))
  )
  .addWithJSX(
    'H6',
    wInfo(`
    ### Usage
    ~~~js
      <H6>
        H6: Adelaide's June 2018 property market news
      </H6>
    ~~~`)(() => (
      <Theme>
        <H6>H6: How to own your home sooner</H6>
      </Theme>
    ))
  );
