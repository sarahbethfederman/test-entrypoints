import styled, { css } from 'styled-components';
import { select, Colors, ColorPrefixes } from '@lendi-ui/theme';
import { fg, bg, color } from '@lendi-ui/color';
import { depth } from '@lendi-ui/depth';
import { deriveSize, normalise } from '@lendi-ui/utils';
import { map, BreakpointValue, BreakpointValueMap } from '@lendi-ui/breakpoint';

export type Size = 'lg' | 'md' | 'sm' | 'xs';
export type ButtonSize = BreakpointValue<Size> | BreakpointValueMap<Size>;
export type ButtonVariant = 'primary' | 'secondary' | 'emphasis' | 'empty';

const commonStyleBySizeMixin = (size: ButtonSize) =>
  map(size, (val) => {
    switch (val) {
      case 'xs':
        return `
          border-radius: 21px;
          padding: ${deriveSize(0.5)} ${deriveSize(0.5625)};
          font-size: ${deriveSize(0.625)};
          letter-spacing: ${deriveSize(0.0625)};
      `;
      case 'sm':
        return `
          height: ${deriveSize(2.5)};
          padding: 0 ${deriveSize(0.75)};
          font-size: ${deriveSize(0.75)};
          letter-spacing: ${deriveSize(0.05)};
      `;
      case 'md':
        return `
          height: ${deriveSize(3)};
          padding: 0 ${deriveSize(1)};
          font-size: ${deriveSize(0.875)};
          letter-spacing: ${deriveSize(0.0625)};
      `;
      case 'lg':
        return `
          height: ${deriveSize(4)};
          padding: 0 ${deriveSize(1.5)};
          font-size: ${deriveSize(1)};
          letter-spacing: ${deriveSize(0.075)};
      `;
      default:
        return undefined;
    }
  });

const beforeBySizeMixin = (size: ButtonSize) =>
  map(size, (val) => {
    switch (val) {
      case 'xs':
      case 'sm':
        return `
          margin-right: ${deriveSize(0.5)};
      `;
      case 'md':
      case 'lg':
        return `
         margin-right: ${deriveSize(1)};
      `;
      default:
        return undefined;
    }
  });

const afterBySizeMixin = (size: ButtonSize) =>
  map(size, (val) => {
    switch (val) {
      case 'xs':
      case 'sm':
        return `
          margin-left: ${deriveSize(0.5)};
      `;
      case 'md':
      case 'lg':
        return `
         margin-left: ${deriveSize(1)};
      `;
      default:
        return undefined;
    }
  });

const commonStyle = css`
  ${normalise};
  cursor: pointer;
  box-sizing: border-box;
  border: none;
  border-radius: ${select('borderRadius')};
  font-weight: 700;
  line-height: 1;
  text-align: center;
  transition: all 0.1s;
  text-transform: uppercase;

  ${({ size }: WrapperProps) => css`
    ${size && commonStyleBySizeMixin(size)}
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

  ${({ isDisabled }: WrapperProps) =>
    isDisabled
      ? css`
          pointer-events: inherit;
          cursor: not-allowed;
          opacity: 0.4;
          box-shadow: none;
          transform: scale(1);
          :hover,
          :active,
          :focus {
            pointer-events: inherit;
            cursor: not-allowed;
            opacity: 0.4;
            box-shadow: none;
            transform: scale(1);
          }
        `
      : undefined}
`;

const filledStyle = ({ colorPrefix }: { colorPrefix: ColorPrefixes }) => {
  return css`
    ${commonStyle}
    ${fg('shade.0')}
    ${bg(`${colorPrefix}.500` as Colors)};

    :focus {
      ${bg(`${colorPrefix}.400` as Colors)}
    }

    :hover {
      ${bg(`${colorPrefix}.400` as Colors)}
    }

    :active {
      ${bg(`${colorPrefix}.600` as Colors)}
    }


    ${({ isDisabled }: WrapperProps) =>
      isDisabled
        ? css`
            ${bg(`${colorPrefix}.500` as Colors)}
            :hover, :active, :focus {
              ${bg(`${colorPrefix}.500` as Colors)}
            }
          `
        : undefined}

  `;
};

const inversedFilledStyle = ({ colorPrefix }: { colorPrefix: ColorPrefixes }) => {
  return css`
    ${commonStyle}
    ${fg(`${colorPrefix}.500` as Colors)};
    ${bg('shade.0')};

    :active {
      opacity: 0.9;
    }
  `;
};

const outlineStyle = ({ colorPrefix }: { colorPrefix: ColorPrefixes }) => {
  return css`
    ${commonStyle}
    ${fg(`${colorPrefix}.500` as Colors)}
    ${bg('shade.0')}
    border: 1px solid ${color(`${colorPrefix}.500` as Colors)};

    :focus {
      border-color: ${color(`${colorPrefix}.400` as Colors)};
    }

    :hover {
      border-color: ${color(`${colorPrefix}.400` as Colors)};
    }

    :active {
      ${fg(`${colorPrefix}.600` as Colors)};
      ${bg(`${colorPrefix}.50` as Colors)};
      border-color: ${color(`${colorPrefix}.600` as Colors)};
    }

    :disabled:hover,
    :disabled:active,
    :disabled:focus {
      ${fg(`${colorPrefix}.500` as Colors)}
      ${bg('shade.0')}
      border-color: ${color(`${colorPrefix}.500` as Colors)};
    }

  `;
};

const inversedOutlineStyle = ({ colorPrefix }: { colorPrefix: ColorPrefixes }) => {
  return css`
    ${commonStyle}
    ${fg('shade.0')}
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
  variant: ButtonVariant;
  size: ButtonSize;
  isInverse?: boolean;
  isFullWidth?: boolean;
  ariaLabel?: string;
  isDisabled?: boolean;
}

export const ButtonWrapper = styled.button`
  ${buttonStyle};
`;

export const LinkWrapper = styled(ButtonWrapper.withComponent('a'))`
  display: inline-block;
  text-decoration: none;
`;

export const Layout = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const BeforeWrapper = styled.span`
  ${({ size }: { size: ButtonSize }) => beforeBySizeMixin(size)};
  display: flex;
`;

export const AfterWrapper = styled.span`
  ${({ size }: { size: ButtonSize }) => afterBySizeMixin(size)};
  display: flex;
`;
