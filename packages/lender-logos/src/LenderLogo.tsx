/**
 * ----------------------------------------------------
 * THIS IS AN AUTOMATICALLY GENERATED FILE
 * If you edit this file directly, your changes will
 * be OVERRIDDEN the next time these icons are built
 *
 * Please see the README for more information
 * ----------------------------------------------------
 */

import styled from 'styled-components';

export interface LenderLogoProps {
  width?: string;
  height?: string;
  className?: string;
}

export const LenderLogoWrapper = styled.span`
  width: ${({ width }: LenderLogoProps) => width ?? '1em'};
  height: ${({ height }: LenderLogoProps) => height ?? '1em'};
  vertical-align: middle;

  & > svg {
    width: inherit;
    height: inherit;
  }
`;
