import styled, { css } from 'styled-components';
import { select } from '@lendi-ui/theme';
import { fg, bg, color } from '@lendi-ui/color';
import { depth } from '@lendi-ui/depth';

export type Size = 'lg' | 'md' | 'sm' | 'xs';
export type Variant = 'primary' | 'secondary' | 'emphasis' | 'empty';

export const heightBySize: { [size in Size]: string } = {
  lg: '64px',
  md: '48px',
  sm: '40px',
  xs: '24px',
};

const fontBySize: { [size in Size]: string } = {
  lg: '22px',
  md: '18px',
  sm: '16px',
  xs: '12px',
};

const spacingBySize: { [size in Size]: string } = {
  lg: '16px',
  md: '16px',
  sm: '8px',
  xs: '4px',
};

const commonStyle = css`
  cursor: pointer;
  box-sizing: border-box;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  line-height: 1;
  text-align: center;
  transition: all 0.1s;

  ${({ size }: WrapperProps) => css`
    height: ${heightBySize[size]};
    padding: 0 ${spacingBySize[size]};
    font-size: ${fontBySize[size]};
    font-family: ${select('typography.body.fontFamily')};
  `} ${({ isFullWidth = false }: WrapperProps) => {
    if (isFullWidth) {
      return 'width: 100%;';
    }
    return undefined;
  }}

  :focus {
    outline: none;
    ${depth(2)};
  }

  :hover {
    ${depth(4)};
  }

  :active {
    transform: scale(0.98);
  }

  :disabled,
  :disabled:hover,
  :disabled:active {
    cursor: not-allowed;
    opacity: 0.4;
    box-shadow: none;
    transform: scale(1);
  }
`;

const filledStyle = ({ colorPrefix }: { colorPrefix: string }) => {
  return css`
    ${commonStyle}
    ${fg('shade.0')}
    ${bg(`${colorPrefix}.500`)};

    :focus {
      ${bg(`${colorPrefix}.400`)}
    }

    :hover {
      ${bg(`${colorPrefix}.400`)}
    }

    :active {
      ${bg(`${colorPrefix}.600`)}
    }

    :disabled:hover,
    :disabled:active,
    :disabled:focus {
      ${bg(`${colorPrefix}.500`)}
    }

  `;
};

const inversedFilledStyle = ({ colorPrefix }: { colorPrefix: string }) => {
  return css`
    ${commonStyle} ${fg(`${colorPrefix}.500`)};
    ${bg('shade.0')};

    :active {
      opacity: 0.9;
    }
  `;
};

const outlineStyle = ({ colorPrefix }: { colorPrefix: string }) => {
  return css`
    ${commonStyle}
    ${fg(`${colorPrefix}.500`)}
    ${bg('shade.0')}
    border: 1px solid ${color(`${colorPrefix}.500`)};

    :focus {
      border-color: ${color(`${colorPrefix}.400`)};
    }

    :hover {
      border-color: ${color(`${colorPrefix}.400`)};
    }

    :active {
      ${fg(`${colorPrefix}.600`)};
      ${bg(`${colorPrefix}.50`)};
      border-color: ${color(`${colorPrefix}.600`)};
    }

    :disabled:hover,
    :disabled:active,
    :disabled:focus {
      ${fg(`${colorPrefix}.500`)}
      ${bg('shade.0')}
      border-color: ${color(`${colorPrefix}.500`)};
    }

  `;
};

const inversedOutlineStyle = ({ colorPrefix }: { colorPrefix: string }) => {
  return css`
    ${commonStyle} ${fg('shade.0')}
    background-color: transparent;
    border: 1px solid ${color('shade.0')};

    :active {
      opacity: 0.9;
    }
  `;
};

const buttonStyle = ({ variant, isInverse }: WrapperProps) => {
  switch (variant) {
    case 'primary':
      return !isInverse ? filledStyle({ colorPrefix: 'primary' }) : inversedFilledStyle({ colorPrefix: 'primary' });

    case 'secondary':
      return !isInverse ? outlineStyle({ colorPrefix: 'primary' }) : inversedOutlineStyle({ colorPrefix: 'primary' });

    case 'emphasis':
      return filledStyle({ colorPrefix: 'tertiary' });

    case 'empty':
      return css`
        ${!isInverse
          ? outlineStyle({ colorPrefix: 'primary' })
          : inversedOutlineStyle({ colorPrefix: 'primary' })} border-style: dashed;
        :focus {
          border-width: 1px;
        }
      `;
  }
};

export interface WrapperProps {
  variant: Variant;
  size: Size;
  isInverse?: boolean;
  isFullWidth?: boolean;
}

export const Wrapper = styled.button`
  ${buttonStyle};
`;

export const Layout = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const BeforeWrapper = styled.span`
  margin-right: ${({ size }: { size: Size }) => spacingBySize[size]};
`;

export const AfterWrapper = styled.span`
  margin-left: ${({ size }: { size: Size }) => spacingBySize[size]};
`;
