import styled, { css } from 'styled-components';
import { bg, color } from '@lendi-ui/color';
import { depth } from '@lendi-ui/depth';
import { ml } from '@lendi-ui/spacing';
import { deriveSize } from '@lendi-ui/utils';
import { Size } from '../index.style';
import { select } from '@lendi-ui/theme';

// Small size is 0.75 * medium
const ToggleWrapperBySizeMixin = (size: Size) => {
  switch (size) {
    case 'sm':
      return `
        width: ${deriveSize(1.875)};
        height: ${deriveSize(1.5)};
      `;
    case 'md':
      return `
        width: ${deriveSize(2.5)};
        height: ${deriveSize(2)};
      `;
    default:
      return undefined;
  }
};

const ToggleTrackBySizeMixin = (size: Size) => {
  switch (size) {
    case 'sm':
      return `
        --width: ${deriveSize(1.5)};
        --height: ${deriveSize(0.625)};
        --handle-width: ${deriveSize(0.875)};
      `;
    case 'md':
      return `
        --width: ${deriveSize(2.125)};
        --height: ${deriveSize(0.875)};
        --handle-width: ${deriveSize(1.25)};
      `;
    default:
      return undefined;
  }
};

const ToggleHandleBySizeMixin = (size: Size) => {
  switch (size) {
    case 'sm':
      return `
        --width: ${deriveSize(0.875)};
        --track-width: ${deriveSize(1.5)};
      `;
    case 'md':
      return `
        --width: ${deriveSize(1.25)};
        --track-width: ${deriveSize(2.125)};
      `;
    default:
      return undefined;
  }
};

interface ToggleCheckboxWrapperProps {
  checked: boolean;
  disabled: boolean;
  error: boolean;
}

export const ToggleCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;

  /* Focus styles for sibling span (Toggle Track) */
  &:focus ~ span {
    ${({ error, checked, disabled }: ToggleCheckboxWrapperProps) => {
      if (!error && !disabled) {
        if (checked) {
          return css`
            ${bg('primary.300')}
            border: 2px solid ${color('primary.300')};
            box-shadow: 0 0 3px 0 rgba(0, 192, 165, 0.8);
          `;
        } else {
          return css`
            border: 2px solid ${color('primary.300')};
            box-shadow: 0 0 3px 0 rgba(0, 192, 165, 0.8);
          `;
        }
      } else {
        return null;
      }
    }}
  }

  /* Focus styles for sibling div (Toggle Handle) */
  :focus ~ div {
    ${({ error, checked, disabled }: ToggleCheckboxWrapperProps) => {
      return !error && !disabled && checked && bg('primary.300');
    }};
  }
`;

interface ToggleProps {
  size: Size;
}

export const ToggleWrapper = styled.span`
  ${({ size }: ToggleProps) => `${size && ToggleWrapperBySizeMixin(size)}`} position: relative;
  display: inline-block;
  appearance: none;
  border-radius: ${select('borderRadius')};
  box-sizing: border-box;
  ${ml('xxs')};
`;

interface TogglePartsProps {
  checked: boolean;
  disabled: boolean;
  error: boolean;
  size: Size;
}

export const ToggleTrack = styled.span`
  ${({ size }: TogglePartsProps) => `${size && ToggleTrackBySizeMixin(size)}`}
  position: absolute;
  content: '';
  width: var(--width);
  height: var(--height);
  top: calc(50% - var(--height) / 2);
  border-radius: ${select('borderRadius')};
  margin-left: calc(var(--handle-width) * 0.3);
  margin-right: calc(var(--handle-width) * 0.3);
  box-sizing: border-box;
  ${bg('shade.300')}
  transition: 0.4s;

  /* Default Checked */
  ${({ checked }: TogglePartsProps) => {
    return checked && bg('primary.300');
  }}

  /* Disabled styles */
  ${({ disabled, checked }: TogglePartsProps) => {
    return disabled && (checked ? bg('primary.50') : bg('shade.200'));
  }}

  /* Error styles */
  ${({ error }: TogglePartsProps) => {
    return error && bg('error.200');
  }}
`;

export const ToggleHandle = styled.div`
  ${({ size }: TogglePartsProps) => `${size && ToggleHandleBySizeMixin(size)}`}
  --height: var(--width);
  --track-margin: var(--width) * 0.3;

  ${depth(1)} position: absolute;
  content: '';
  width: var(--width);
  height: var(--height);
  top: calc(50% - var(--height) / 2);
  border: 1px solid transparent;
  ${bg('shade.25')}
  border-radius: 50%;
  box-sizing: border-box;
  transition: 0.4s;
  text-align: center;

  /* Default Checked */
  ${({ checked }: TogglePartsProps) => {
    return (
      checked &&
      css`
        ${bg('primary.500')} margin-left: calc(var(--track-width) + 2 * var(--track-margin) - var(--width));
      `
    );
  }}

  /* Disabled styles */
  ${({ disabled, checked }: TogglePartsProps) => {
    return disabled && (checked ? bg('primary.300') : bg('shade.50'));
  }}

  /* Error styles */
  ${({ error }: TogglePartsProps) => {
    return error && bg('error.500');
  }}
`;

export const IconWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
