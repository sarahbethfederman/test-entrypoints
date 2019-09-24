import styled, { css } from 'styled-components';
import { normalise, deriveSize } from '@lendi-ui/utils';
import { color } from '@lendi-ui/color';
import { pl, pr, px } from '@lendi-ui/spacing';
import { ArrowDropDown } from '@lendi-ui/icon';
import { body } from '@lendi-ui/typography';

export const Wrapper = styled.div`
  ${normalise};
`;

interface AccordionWrapperProps {
  isSelected: boolean;
}

export const AccordionWrapper = styled.div<AccordionWrapperProps>`
  border-top: 1px solid ${color('shade.100')};
  background-color: ${({ isSelected }) => (isSelected ? color('shade.25') : color('shade.0'))};
  :last-child {
    border-bottom: 1px solid ${color('shade.100')};
  }
`;

export const HeaderContent = styled.span`
  ${px('xxxs')};
  word-wrap: break-word;
`;

export const HeaderIconContentWrapper = styled.div`
  ${pr('xs')}
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  text-align: left;
  font-weight: 600;
  height: 48px;
  ${px('xs')};
  text-transform: uppercase;
  background-color: inherit;
  width: 100%;
  font-size: ${deriveSize(1)};
  ${({ disabled }: { disabled: boolean }) =>
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
  ${body({ color: 'secondary.500' })}
`;

export const IconWrapper = styled.div`
  ${px('sm')};
`;

interface ArrowIconProps {
  isDisabled: boolean;
  isRotate: boolean;
}
export const ArrowIcon = styled(ArrowDropDown).attrs({
  color: 'secondary.500',
})`
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
