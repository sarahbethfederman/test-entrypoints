import styled, { css } from 'styled-components';
import { normalise } from '@lendi-ui/utils';
import { bg } from '@lendi-ui/color';
import { depth } from '@lendi-ui/depth';
interface ChildrenWrapperProps {
  isTransparent: boolean;
}

export const NavbarWrapper = styled.nav`
  ${normalise};
`;

export const ChildrenWrapper = styled.div`
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  ${({ isTransparent }: ChildrenWrapperProps) => css`
    ${isTransparent
      ? `background-color: transparent;`
      : css`
          ${depth(2)}
          ${bg('shade.0')};
        `};
  `}
`;

export const NavbarLeftWrapper = styled.div`
  margin-right: auto;
`;

export const NavbarRightWrapper = styled.div`
  margin-left: auto;
`;
