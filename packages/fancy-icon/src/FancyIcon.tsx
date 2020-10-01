import styled from 'styled-components';

export interface FancyIconProps {
  width?: string;
  height?: string;
  className?: string;
}

export const FancyIconWrapper = styled.span`
  width: ${({ width }: FancyIconProps) => width ?? '1em'};
  height: ${({ height }: FancyIconProps) => height ?? '1em'};
  vertical-align: middle;

  & > svg {
    width: inherit;
    height: inherit;
  }
`;
