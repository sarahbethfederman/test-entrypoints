import styled, { css } from 'styled-components';
import { select, Colors } from '@lendi-ui/theme';
import { fg as getFg, bg as getBg } from '@lendi-ui/color';
import { p } from '@lendi-ui/spacing';
import { body, BodySize } from '@lendi-ui/typography';
import { normalise } from '@lendi-ui/utils';
import { depth as cardDepth, Level } from '@lendi-ui/depth';

interface CardWrapperProps {
  size: BodySize;
  bg: Colors;
  fg: Colors;
  depth: Level;
  border?: string;
}

export const CardWrapper = styled.div`
  ${normalise};
  border-radius: ${select('borderRadius')};
  ${p('xs')};
  ${({ bg = 'shade.0' }: CardWrapperProps) => getBg(bg)}
  ${({ depth = 1 }: CardWrapperProps) => cardDepth(depth)}
  ${({ size = 'md' }: CardWrapperProps) =>
    body({ size })}
  ${({ fg }: CardWrapperProps) => getFg(fg)}
  ${({ border }: CardWrapperProps) =>
    border &&
    css`
      border: ${border};
    `}

  &:hover {
    ${cardDepth(4)}
  }
`;
