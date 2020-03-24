import styled, { css } from 'styled-components';
import { normalise, deriveSize } from '@lendi-ui/utils';
import { color, bg } from '@lendi-ui/color';
import { m, mb, pl, px } from '@lendi-ui/spacing';
import { ArrowDropDown } from '@lendi-ui/icon';
import { body } from '@lendi-ui/typography';
import { AccordionGroupVariant } from './typings';

export const Wrapper = styled.div`
  ${normalise};
`;

interface HeaderWrapperProps {
  variant: AccordionGroupVariant;
  isTransparent?: boolean;
}

export const HeaderWrapper = styled.h3<HeaderWrapperProps>`
  ${m('nil')};
  align-items: center;
  display: flex;
  height: 48px;
  justify-content: space-between;

  ${({ variant }) => {
    switch (variant) {
      case 'emphasis':
        return css`
          border: 1px solid ${color('shade.100')};
          border-radius: 6px;

          ${ArrowIcon} {
            ${color('primary.500')}
          }
        `;
      case 'empty':
      case 'primary':
      default:
        return null;
    }
  }}

  ${({ variant, isTransparent }) => {
    if (isTransparent) {
      return css`
        background-color: transparent;
      `;
    }
    switch (variant) {
      case 'emphasis':
      case 'empty':
        return css`
          ${bg('shade.0')}
        `;
      case 'primary':
      default:
        return null;
    }
  }}
`;

export const HeaderContent = styled.span`
  word-wrap: break-word;
  ${px('xxxs')};
`;

interface HeaderAfterWrapperProps {
  disabled: boolean;
}

export const HeaderAfterWrapper = styled.div<HeaderAfterWrapperProps>`
  ${px('xs')}
  display: flex;

  ${({ disabled }) =>
    disabled
      ? css`
          cursor: not-allowed;
          opacity: 0.4;
          :hover,
          :active,
          :focus {
            pointer-events: inherit;
            cursor: not-allowed;
            box-shadow: none;
            transform: scale(1);
          }
        `
      : css`
          cursor: pointer;
        `}
`;

interface HeaderButtonWrapperProps {
  disabled: boolean;
  variant: AccordionGroupVariant;
}

export const HeaderButtonWrapper = styled.button<HeaderButtonWrapperProps>`
  ${px('xs')}
  align-items: center;
  background-color: inherit;
  border: none;
  display: flex;
  font-size: ${deriveSize(1)};
  font-weight: 600;
  height: 100%;
  text-align: left;
  width: 100%;

  ${({ disabled }) =>
    disabled
      ? css`
          cursor: not-allowed;
          opacity: 0.4;
          :hover,
          :active,
          :focus {
            pointer-events: inherit;
            cursor: not-allowed;
            box-shadow: none;
            transform: scale(1);
          }
        `
      : css`
          cursor: pointer;
        `}

  ${({ variant }) => {
    switch (variant) {
      case 'emphasis':
        return css`
          font-weight: normal;
          ${body({ color: 'shade.700' })}
        `;
      case 'empty':
        return null;
      case 'primary':
      default:
        return css`
          text-transform: uppercase;
          ${body({ color: 'secondary.500' })}
        `;
    }
  }}
`;

export const HeaderContentWrapper = styled.div`
  ${pl('xs')};
`;

interface AccordionWrapperProps {
  isSelected: boolean;
  variant?: AccordionGroupVariant;
  isTransparent?: boolean;
}

export const AccordionWrapper = styled.div<AccordionWrapperProps>`
  ${({ variant, isSelected }) => {
    switch (variant) {
      case 'emphasis':
        return css`
          ${mb('xxs')}

          &:last-child {
            ${mb('nil')}
          }

          ${HeaderWrapper} {
            border-color: ${isSelected ? color('primary.500') : null};
          }
        `;
      case 'empty':
        return css`
          border-bottom: 1px solid ${color('shade.100')};
        `;
      case 'primary':
      default:
        return css`
          border-bottom: 1px solid ${color('shade.100')};

          &:first-child {
            border-top: 1px solid ${color('shade.100')};
          }
        `;
    }
  }}

  ${({ variant, isSelected, isTransparent }) => {
    if (isTransparent) {
      return css`
        background-color: transparent;
      `;
    }
    switch (variant) {
      case 'empty':
        return css`
          ${bg('shade.0')}
        `;
      case 'primary':
      case 'emphasis':
      default:
        return css`
          ${bg(isSelected ? 'shade.25' : 'shade.0')}
        `;
    }
  }}
`;

export const IconWrapper = styled.div`
  ${px('sm')};
`;

interface ArrowIconProps {
  isDisabled: boolean;
  isRotate: boolean;
}
export const ArrowIcon = styled(ArrowDropDown)`
  height: 20px;
  width: 20px;
  transform: rotate(-90deg);
  transition: transform 0.5s;

  ${({ isRotate }: ArrowIconProps) => {
    return css`
      transform: rotate(${isRotate ? '0deg' : '-90deg'});
    `;
  }}
  ${({ isDisabled }: ArrowIconProps) =>
    isDisabled
      ? css`
          visibility: hidden;
        `
      : css`
          visibility: visible;
        `}
`;

export const PaddedItem = styled.div`
  ${px('xxxs')};
`;

export const AccordionItemWrapper = styled.div`
  transition: all 0.3s linear;
  ${({ show }: { show: boolean }) =>
    !show
      ? css`
          display: none;
        `
      : css`
          display: block;
        `};
  ${body()};
`;
