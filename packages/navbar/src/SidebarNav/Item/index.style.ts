import styled, { css } from 'styled-components';
import { px, py, mr } from '@lendi-ui/spacing';
import { body } from '@lendi-ui/typography';
import { bg, color, fg } from '@lendi-ui/color';

const buttonReset = css`
  ${py('nil')};
  border-top: none;
  border-right: none;
  border-left: none;
  background-color: transparent;
  width: 100%;
  outline: none;
`;

export interface StyleProps {
  depth?: number;
}

export const style = css`
  ${({ depth = 0 }: StyleProps) => {
    if (depth === 0) {
      return css`
        height: 3rem;
        ${body({ size: 'md', color: 'primary.500' })};
      `;
    } else {
      return css`
        height: 2.5rem;
        ${body({ size: 'sm', color: 'shade.700' })};
      `;
    }
  }} ${px('md')}
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${color('shade.100')};

  :hover {
    ${fg('shade.0')} ${bg('primary.500')};
  }

  :active {
    ${fg('shade.0')} ${bg('primary.600')};
  }

  :last-of-type {
    border-bottom: none;
  }
`;

export const Link = styled.a`
  ${style};
  text-decoration: none;
`;

export const Button = styled.button`
  ${style} ${buttonReset};
`;

export const Icon = styled.div`
  ${mr('sm')};
`;
