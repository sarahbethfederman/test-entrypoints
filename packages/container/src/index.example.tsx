import * as React from 'react';
import styled from 'styled-components';
import { p } from '@lendi-ui/spacing';
import { bg } from '@lendi-ui/color';
import { body } from '@lendi-ui/typography';
import { container } from '..';

const Wrapper = styled.div`
  ${bg('primary.400')};
`;

const Content = styled.div`
  ${container()}
  ${p('sm')}
  ${bg('primary.200')}
  ${body()}
`;

export default () => (
  <Wrapper>
    <Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel odio libero. Pellentesque habitant morbi
      tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ex ante, accumsan in dictum vel, dignissim
      nec enim. Sed enim quam, porta id dictum nec, vehicula in enim. Donec consequat varius diam, eget varius urna
      scelerisque in. Integer rhoncus leo id velit porta, ut porttitor dolor interdum. Integer cursus placerat odio, at
      molestie felis venenatis in. Pellentesque in molestie nisi. Fusce accumsan felis quis ornare faucibus.
    </Content>
  </Wrapper>
);
