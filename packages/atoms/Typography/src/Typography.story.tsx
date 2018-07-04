import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { wInfoStyle } from '@lui/story-utils';
import { typographyHeading, typographySubHeading, typographyBody } from './Typography';

const ExampleHeadingWrapper = styled.div`
  ${typographyHeading};
`;

const ExampleSubHeadingWrapper = styled.div`
  ${typographySubHeading};
`;

const ExampleBodyWrapper = styled.div`
  ${typographyBody};
`;

storiesOf('Components/Typography', module).add(
  'Mixins',
  withInfo({
    styles: wInfoStyle,
    inline: true,
    propTables: false,
    source: false,
    text: `
  ## Typography Mixins

  ### Usage
  ~~~js
  const ExampleWrapper = styled.div\`
    \$\{ typographyHeading \}
  \`;

  ### Note
  In most cases you will need to use the Body / Heading components instead of this mixin
  This mixin only deals with font families and font weights
  ~~~`,
  })(() => (
    <React.Fragment>
      <ExampleHeadingWrapper>typographyHeading</ExampleHeadingWrapper>
      <ExampleSubHeadingWrapper>typographySubHeading</ExampleSubHeadingWrapper>
      <ExampleBodyWrapper>typographyBody</ExampleBodyWrapper>
    </React.Fragment>
  ))
);
