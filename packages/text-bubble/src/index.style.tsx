import styled from 'styled-components';
import { overline, body } from '@lendi-ui/typography';
import { bg } from '@lendi-ui/color';
import { p, mt, mb } from '@lendi-ui/spacing';
import { select } from '@lendi-ui/theme';
import { normalise } from '@lendi-ui/utils';

export interface WrapperProps {
  isFullWidth?: boolean;
}

export const Wrapper = styled.div`
  ${normalise} display: inline-block;
  ${mb('xs')};
  ${({ isFullWidth = false }: WrapperProps) => {
    if (isFullWidth) {
      return 'width: 100%;';
    }
    return undefined;
  }};
`;

export const OverlineContainer = styled.div`
  ${overline({ size: 'md', colorScheme: 'light' })};
`;

export const ChildWrapper = styled.div`
  ${body({ size: 'md', color: 'shade.700' })};
  ${mt('xxs')};
  border-radius: ${select('borderRadius')};
  ${bg('primary.50')};
  ${p('xs')};
`;