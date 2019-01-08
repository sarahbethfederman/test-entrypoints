import styled from 'styled-components';
import { py, mx, mt, mb } from '@lendi-ui/spacing';
import { link } from '@lendi-ui/typography';
import { gte } from '@lendi-ui/breakpoint';

export const Wrapper = styled.div`
  display: none;
  ${py({ mobile: 'md', tablet: 'md', desktop: 'md' })};

  ${gte('tablet')`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `};
`;

export const SocialLogoWrapper = styled.div`
  width: 220px;
  display: flex;
  justify-content: space-around;
  ${mx('auto')};
`;

export const SocialLogo = styled.a`
  ${link()};
  ${mt('lg')};
  ${mb('sm')};
  & svg {
    height: 35px;
    width: 35px;
  }
`;
