import styled from 'styled-components';
import { bg } from '@lendi-ui/color';
import { p, px, py } from '@lendi-ui/spacing';
import { link } from '@lendi-ui/typography';
import { Link } from '@lendi-ui/typography';

export const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.header`
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  align-items: flex-end;
  ${p('md')};
`;

export const UserDetail = styled.div`
  flex-shrink: 0;
  ${px('md')}
  ${py('sm')}
  ${bg('shade.25')}
`;

export const Logout = styled.a`
  flex-shrink: 0;
  display: block;
  ${px('md')}
  ${py('xs')}
  ${bg('shade.25')}
  ${link({ size: 'sm' })}
  text-decoration: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  outline: none;
`;
