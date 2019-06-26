import styled from 'styled-components';
import { container } from '@lendi-ui/container';
import { Heading, body, Link } from '@lendi-ui/typography';
import { normalise } from '@lendi-ui/utils';
import { p, px, py, mt, ml } from '@lendi-ui/spacing';
import { gte } from '@lendi-ui/breakpoint';
import { bg } from '@lendi-ui/color';

export const Wrapper = styled.div`
    ${normalise};
    ${container};
    ${bg('secondary.500')};
    ${px('xl')}
    ${py('xxl')}
    ${gte('tablet')`
      ${p('xxxl')};
    `}

    ${gte('desktop')`
      display: inline-block;
      width: 50vw;
    `};
`;

export const HeadingWrapper = styled(Heading)`
  font-weight: bold;
`;

export const LinkGroup = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
  ${gte('tablet')`
        flex-flow: row;
        justify-content: center;
    `}
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  :hover,
  :focus,
  :active {
    text-decoration: none;
  }
  display: flex;
  flex-flow: row;
  align-items: center;
`;

export const LinkWrapperOne = styled.div`
  ${mt('xl')};
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  ${gte('tablet')`
        flex: 3.5;
    `}
`;

export const LinkWrapperTwo = styled(LinkWrapperOne.withComponent('div'))`
  ${gte('tablet')`
        flex: 6.5;
    `}
`;

export const BodyWrapper = styled.span`
  ${body({ size: 'lg', color: 'shade.0' })};
  font-weight: bold;
  ${ml('lg')};
  ${gte('tablet')`
        ${ml('sm')}
    `}
`;
