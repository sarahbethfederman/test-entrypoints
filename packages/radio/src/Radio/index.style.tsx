import styled, { css } from 'styled-components';
import { Body } from '@lendi-ui/typography';
import { deriveSize } from '@lendi-ui/utils';
import { bg, color } from '@lendi-ui/color';
import { m, ml } from '@lendi-ui/spacing';
import { activeState, activeCheckedState, boxedActiveState } from './styles/active.style';
import { hoverState, hoverCheckedState, boxedHoverState, boxedHoverCheckedState } from './styles/hover.style';
import { focusState, boxedFocusCheckedState, boxedFocusState } from './styles/focus.style';
import { disabledState, boxedDisabledState, boxedDisabledCheckedState } from './styles/disabled.style';
import { checkedState, boxedCheckedState } from './styles/checked.style';
import { normalise } from '@lendi-ui/utils';

interface WrapperProps {
  isBoxed: boolean;
  checked: boolean;
  disabled: boolean;
}

export const defaultBorder = css`
  border: 1px solid ${color('shade.200')};
`;
export const defaultBackground = bg('shade.0');

export const Wrapper = styled.label`
  ${normalise};
  width: 100%;
  display: flex;
  align-items: center;
  height: ${deriveSize(3)};
  border-radius: 6px;
  ${({ isBoxed, checked }: WrapperProps) => {
    if (isBoxed) {
      if (checked) {
        return css`
          ${boxedCheckedState};
          ${boxedActiveState};
          ${boxedFocusCheckedState};
        `;
      } else {
        return css`
          ${defaultBorder};
          ${boxedFocusState};
        `;
      }
    }
    return null;
  }} ${({ isBoxed, disabled, checked }: WrapperProps) => {
    if (isBoxed && !disabled) {
      if (checked) {
        return css`
          ${boxedHoverCheckedState};
        `;
      } else {
        return css`
          ${boxedHoverState};
        `;
      }
    }
    if (isBoxed && disabled) {
      if (checked) {
        return css`
          ${boxedDisabledCheckedState};
        `;
      } else {
        return css`
          ${boxedDisabledState};
        `;
      }
    }
    if (disabled) {
      return css`
        ${disabledState};
      `;
    }
    return null;
  }};
`;

export const RadioLabel = styled(Body)`
  display: inline-block;
  ${ml('xs')};
`;

interface RadioWrapperProps {
  checked: boolean;
  disabled: boolean;
}

export const RadioWrapper = styled.input`
  cursor: pointer;
  position: relative;
  display: inline-block;
  height: 32px;
  width: 32px;
  ${ml('xs')};
  :before {
    content: '';
    width: 32px;
    height: 32px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    ${m('auto')};
    ${defaultBackground};
    ${defaultBorder};
    border-radius: 20px;
    box-sizing: border-box;
  }
  ${({ checked }: RadioWrapperProps) => {
    return (
      checked &&
      css`
        ${checkedState};
      `
    );
  }}
  ${({ checked, disabled }: RadioWrapperProps) => {
    if (!disabled) {
      if (checked) {
        return css`
          ${hoverCheckedState};
          ${activeCheckedState};
        `;
      }
      return css`
        ${hoverState};
      `;
    }
    return null;
  }}

  ${activeState};
  ${focusState};
  ${disabledState};
`;
