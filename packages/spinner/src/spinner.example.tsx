import * as React from 'react';
import styled from 'styled-components';
import { bg } from '@lendi-ui/color';
import Spinner from '../../spinner/src/index';

const Background = styled.div`
  ${bg('secondary.500')};
`;

const Section = styled.section`
  border: 1px solid #ebedf0;
  border-radius: 2px;
  display: inline-block;
  position: relative;
  padding: 15px;
`;

export default () => (
  <>
    <Section>
      <div>Spinner without color</div>
      <Spinner />
    </Section>
    <Section>
      <div>Spinner with color variant - Light</div>
      <Background>
        <Spinner variant="light" />
      </Background>
    </Section>
  </>
);
