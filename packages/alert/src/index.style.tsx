import styled, { css } from 'styled-components';
import { Body } from '@lendi-ui/typography';
import { color, fg, bg } from '@lendi-ui/color';
import { p, ml, mt } from '@lendi-ui/spacing';
import { select } from '@lendi-ui/theme';
import { normalise } from '@lendi-ui/utils';
import { AlertVariant } from './index';

interface WrapperProps {
  variant: AlertVariant;
  withHeading: boolean;
}

export const Wrapper = styled.div`
    ${normalise};
    display: flex;
    align-items: flex-start;
    border-radius: ${select('borderRadius')};
    ${p('sm')}
    ${({ withHeading }: WrapperProps) => {
      if (withHeading) {
        return css`
          flex-direction: column;
        `;
      }
      return css`
        flex-direction: row;
      `;
    }}
    ${({ variant }: WrapperProps) => {
      switch (variant) {
        case 'error':
          return css`
            border: 1px solid ${color('error.500')};
            ${fg('error.500')} ${bg('error.25')};
          `;
        case 'info':
          return css`
            border: 1px solid ${color('info.500')};
            ${fg('info.500')} ${bg('info.25')};
          `;
        case 'success':
          return css`
            border: 1px solid ${color('success.500')};
            ${fg('success.500')} ${bg('success.25')};
          `;
        case 'warn':
          return css`
            border: 1px solid ${color('warn.500')};
            ${fg('warn.500')} ${bg('warn.25')};
          `;
        default:
          return undefined;
      }
    }}
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IconWrapper = styled.span`
  line-height: 0;
`;

export const HeadingWrapper = styled(Body)`
  ${ml('xs')};
`;

export const ContentWrapper = styled(Body)`
  ${({ withHeading }: { withHeading: boolean }) => (withHeading ? mt('xxxs') : ml('xs'))};
`;
