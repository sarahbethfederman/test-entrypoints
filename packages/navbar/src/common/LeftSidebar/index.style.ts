import styled from 'styled-components';
import { bg } from '@lendi-ui/color';
import { px, py, mb, mr } from '@lendi-ui/spacing';
import { link, Link } from '@lendi-ui/typography';
import { Close } from '@lendi-ui/icon';
import { gte } from '@lendi-ui/breakpoint';
import { deriveSize } from '@lendi-ui/utils';
import { Button } from '@lendi-ui/button';

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
  ${py('md')};
  ${px('sm')}
`;

export const UserDetail = styled.div`
  flex-shrink: 0;
  ${px('md')}
  ${py('sm')}
  ${bg('shade.25')}
`;

export const CTAWrapper = styled.div`
  ${px('md')}
  ${py('xs')}
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

export const CTAButton = styled(Button)`
  ${mb('sm')};
  width: 100%;
  border: none;
  line-height: 1.1;
`;

export const MenuCloseWrapper = styled.a`
  cursor: pointer;
  ${mr('xs')};
`;

export const MenuClose = styled(Close)`
  ${gte('tablet')`
    display: none;
  `};

  height: ${deriveSize(1.6)};
  width: ${deriveSize(1.6)};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  outline: none;
`;

export const ContactWrapper = styled.div`
  width: 100%;
  text-align: right;
`;

export const ContactButton = styled(Button).attrs({
  size: 'xs',
  variant: 'secondary',
})``;
