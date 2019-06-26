import styled from 'styled-components';
import { container } from '@lendi-ui/container';
import { normalise, deriveSize } from '@lendi-ui/utils';
import { bg } from '@lendi-ui/color';
import { p, px, py, mr, mb } from '@lendi-ui/spacing';
import { gte, between } from '@lendi-ui/breakpoint';
import { Heading } from '@lendi-ui/typography';

export const Wrapper = styled.div`
    ${normalise};
    ${container};
    ${bg('secondary.600')};
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
  ${mb('xl')};
`;

export const ButtonsWrapper = styled.div`
  a:first-child {
    ${mr('sm')}
  }

  a,
  button {
    ${mb('sm')};
    width: ${deriveSize(17)};
  }

  ${between('mobile', 'tablet')`
    a {
      display: block;
      width: 100%;
    }
  `}
`;

export const ModalContentWrapper = styled.div`
  text-align: center;
`;

export const ModalFooterWrapper = styled.div`
  text-align: center;

  a {
    width: ${deriveSize(16)};
  }

  ${between('mobile', 'tablet')`
  a {
    width: 100%;
  }
`}
`;
