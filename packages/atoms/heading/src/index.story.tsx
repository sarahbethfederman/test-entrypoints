import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { H1, H2, H3, H4, H5, H6 } from '.';
import { wInfo } from '@lui/story-utils';

storiesOf('Components/Heading', module).addWithJSX(
  'H1',
  wInfo(`
  ### Usage
  ~~~js
    <H1 color="colorBrandPrimary" textAlign="center">
      H1: Adelaide's June 2018 property market news
    </H1>
  ~~~`)(() => (
    <H1 color="colorBrandPrimary" textAlign="center">
      H1: Adelaide's June 2018 property market news
    </H1>
  ))
);

storiesOf('Components/Heading', module).addWithJSX(
  'H2',
  wInfo(`
  ### Usage
  ~~~js
    <H2>
      H2: Adelaide's June 2018 property market news
    </H2>
  ~~~`)(() => <H2>H2: 7 things you need to know before building a granny flat</H2>)
);

storiesOf('Components/Heading', module).addWithJSX(
  'H3',
  wInfo(`
  ### Usage
  ~~~js
    <H3>
      H3: Adelaide's June 2018 property market news
    </H3>
  ~~~`)(() => <H3>H3: How to own your home sooner</H3>)
);

storiesOf('Components/Heading', module).addWithJSX(
  'H4',
  wInfo(`
  ### Usage
  ~~~js
    <H4>
      H4: Adelaide's June 2018 property market news
    </H4>
  ~~~`)(() => <H4>H4: How to own your home sooner</H4>)
);

storiesOf('Components/Heading', module).addWithJSX(
  'H5',
  wInfo(`
  ### Usage
  ~~~js
    <H5>
      H5: Adelaide's June 2018 property market news
    </H5>
  ~~~`)(() => <H5>H5: How to own your home sooner</H5>)
);

storiesOf('Components/Heading', module).addWithJSX(
  'H6',
  wInfo(`
  ### Usage
  ~~~js
    <H6>
      H6: Adelaide's June 2018 property market news
    </H6>
  ~~~`)(() => <H6>H6: How to own your home sooner</H6>)
);
