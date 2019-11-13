import styled, { css } from 'styled-components';
import { normalise, deriveSize } from '@lendi-ui/utils';
import { color, bg } from '@lendi-ui/color';
import { mb, pl, pr, px } from '@lendi-ui/spacing';
import { ArrowDropDown } from '@lendi-ui/icon';
import { body } from '@lendi-ui/typography';
import { AccordionGroupVariant } from './typings';

export const Wrapper = styled.div`
  ${normalise};
`;

interface HeaderButtonWrapperProps {
  disabled: boolean;
  variant: AccordionGroupVariant;
}
export const HeaderButtonWrapper = styled.button<HeaderButtonWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  text-align: left;
  font-weight: 600;
  height: 48px;
  ${px('xs')};
  background-color: inherit;
  width: 100%;
  font-size: ${deriveSize(1)};
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
            opacity: 0.4;
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
          ${bg('shade.0')}
          border: 1px solid ${color('shade.100')};
          border-radius: 6px;
          font-weight: normal;
          ${body({ color: 'shade.700' })}

          ${ArrowIcon} {
            ${color('primary.500')}
          }
        `;
      case 'empty':
        return css`
          ${bg('shade.0')}
        `;
      case 'primary':
      default:
        return css`
          text-transform: uppercase;
          ${body({ color: 'secondary.500' })}
        `;
    }
  }}
`;

interface AccordionWrapperProps {
  isSelected: boolean;
  variant?: AccordionGroupVariant;
}

export const AccordionWrapper = styled.div<AccordionWrapperProps>`
  ${({ variant, isSelected }) => {
    switch (variant) {
      case 'emphasis':
        return css`
          ${bg(isSelected ? 'shade.25' : 'shade.0')}
          ${mb('xxs')}

          &:last-child {
            ${mb('nil')}
          }

          ${HeaderButtonWrapper} {
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
          ${bg(isSelected ? 'shade.25' : 'shade.0')}
          border-bottom: 1px solid ${color('shade.100')};

          &:first-child {
            border-top: 1px solid ${color('shade.100')};
          }
        `;
    }
  }}
`;

export const HeaderContent = styled.span`
  word-wrap: break-word;
  ${px('xxxs')};
`;

export const HeaderIconContentWrapper = styled.div`
  ${pr('xs')}
  display: flex;
  justify-content: center;
  align-items: center;
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

export const HeaderContentWrapper = styled.div`
  ${pl('xs')};
`;

export const PaddedItem = styled.div`
  ${px('xxxs')};
`;

export const AccordionItemWrapper = styled.div`
  transition: all 0.3s linear;
  ${({ show }: { show: boolean }) =>
    !show
      ? css`
          max-height: 0;
          opacity: 0;
          padding: 0;
          visibility: hidden;
        `
      : css`
          max-height: 1000px;
          opacity: 1;
          visibility: visible;
        `};
  ${body()};
`;
