import * as React from 'react';
import styled from 'styled-components';
import { body } from '@lendi-ui/typography';
import { p } from '@lendi-ui/spacing';

const Wrapper = styled.div`
  ${p('xs')} ${body({
    size: 'xs',
    align: 'center',
    color: 'shade.800',
  })};
`;

export class Footer extends React.Component {
  render() {
    const CurrentYear = new Date().getFullYear();
    return (
      <Wrapper>
        Copyright &copy; <span className="curYear">{CurrentYear}</span>.
      </Wrapper>
    );
  }
}
