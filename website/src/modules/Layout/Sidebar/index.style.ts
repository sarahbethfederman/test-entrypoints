import styled from 'styled-components';
import { bg, color } from '@lendi-ui/color';
import { px, ml, mb } from '@lendi-ui/spacing';
import { body } from '@lendi-ui/typography';
import { gte } from '@lendi-ui/breakpoint';

export const Wrapper = styled.div`
  box-sizing: border-box;
  ${px({ mobile: 'xs', tablet: 'md' })}
  ${body()}
  ${bg('shade.0')}
  ${gte('mobile')`
    overflow: hidden;
  `}
  ${gte('tablet')`
    height: 100vh;
    overflow: auto;
  `}
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  ${gte('tablet')`
    height: 112px;
  `}
  ${mb('lg')}
  border-bottom: 1px solid ${color('shade.200')};
`;

export const NavGroup = styled.div`
  ${mb('xl')};
`;

export const SubNav = styled.div`
  ${ml('sm')} ${mb('xs')};
`;
