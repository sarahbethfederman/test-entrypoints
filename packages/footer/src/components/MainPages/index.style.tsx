import styled from 'styled-components';
import { gte } from '@lendi-ui/breakpoint';
import { fg, color } from '@lendi-ui/color';
import { my, mt, mb, p } from '@lendi-ui/spacing';
import { link } from '@lendi-ui/typography';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${gte('tablet')`
    flex-direction: row;
  `};
`;

export const MainCategory = styled.div`
  width: 100%;
  ${mb({ mobile: 'lg', tablet: 'nil', desktop: 'nil' })};
  ${gte('desktop')`
    width: 25%;
  `};
`;

export const MainCategoryText = styled.a`
  ${link({ size: 'lg', color: 'shade.0' })};
  text-decoration: none;
  font-weight: bold;
  ${mb({ mobile: 'md', tablet: 'md', desktop: 'md' })};
  :hover {
    ${fg('shade.0')};
  }
`;

export const SubLinks = styled.ul`
  ${p('nil')} ${mt('sm')};
  border-top: 1px solid ${color('shade.0')};

  :hover {
    border-top: 1px solid ${color('primary.500')};
  }
`;

export const LinkWrapper = styled.li`
  list-style-type: none;
  ${my({ mobile: 'xs', tablet: 'xs', desktop: 'sm' })};
`;

export const PageLink = styled.a`
  ${link({ color: 'shade.0', size: { mobile: 'sm', tablet: 'md', desktop: 'md' } })};
  text-decoration: none;
  ${my('md')};
  :hover {
    ${fg('shade.0')};
  }
`;
