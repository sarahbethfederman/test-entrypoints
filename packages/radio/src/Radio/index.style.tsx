import styled, { css } from 'styled-components';
import { Body } from '@lendi-ui/typography';
import { deriveSize, normalise } from '@lendi-ui/utils';
import { select } from '@lendi-ui/theme';
import { bg, color } from '@lendi-ui/color';
import { m } from '@lendi-ui/spacing';
import { activeState, activeCheckedState, boxedActiveState } from './styles/active.style';
import { hoverState, hoverCheckedState, boxedHoverState, boxedHoverCheckedState } from './styles/hover.style';
import { focusState, boxedFocusCheckedState, boxedFocusState } from './styles/focus.style';
import { disabledState, boxedDisabledState, boxedDisabledCheckedState } from './styles/disabled.style';
import { checkedState, boxedCheckedState } from './styles/checked.style';

type Size = 'xs' | 'sm' | 'md' | 'lg';
interface WrapperProps {
  isBoxed: boolean;
  checked: boolean;
  disabled: boolean;
  size: Size;
}

export const defaultBorder = css`
  border: 1px solid ${color('shade.200')};
`;

export const defaultBackground = bg('shade.0');

export const Wrapper = styled.label<WrapperProps>`
  ${normalise};
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  ${({ size }) => {
    if (size !== 'xs') {
      return css`
        border-radius: ${select('borderRadius')};
      `;
    }
    return css`
      border-radius: 20px;
    `;
  }}
  position: relative;
  ${({ isBoxed, checked }) => {
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
  }} ${({ isBoxed, disabled, checked }) => {
    if (isBoxed && !disabled) {
      if (checked) {
        return boxedHoverCheckedState;
      } else {
        return boxedHoverState;
      }
    }
    if (isBoxed && disabled) {
      if (checked) {
        return boxedDisabledCheckedState;
      } else {
        return boxedDisabledState;
      }
    }
    if (disabled) {
      return disabledState;
    }
    return null;
  }};
  ${({ size, checked }: WrapperProps) => {
    let containerHeight, radioOuterHeight, radioInnerHeight;
    switch (size) {
      case 'xs':
        containerHeight = 26;
        radioOuterHeight = 18;
        radioInnerHeight = 10;
        break;
      case 'sm':
        containerHeight = 40;
        radioOuterHeight = 20;
        radioInnerHeight = 12;
        break;
      case 'lg':
        containerHeight = 64;
        radioOuterHeight = 38;
        radioInnerHeight = 22;
        break;
      case 'md':
      default:
        containerHeight = 48;
        radioOuterHeight = 32;
        radioInnerHeight = 20;
        break;
    }
    return css`
      height: ${containerHeight}px;
      ${checked && checkedState(radioInnerHeight, containerHeight)}
      ${radioOverrideMixin(radioOuterHeight, containerHeight)}
    `;
  }}
  ${activeState};
  ${focusState};
  ${disabledState};
`;

interface RadioWrapperProps {
  checked: boolean;
  disabled: boolean;
  inputSize: Size;
}

export const RadioLabel = styled(Body)`
  display: inline-block;
`;

const radioOverrideMixin = (size: number = 32, container: number = 48) => {
  const offset = (container - size) / 2;
  return css`
    padding-left: ${offset + size + 8}px;
    :before {
      content: '';
      position: absolute;
      top: ${offset - 1}px;
      left: ${offset}px;
      ${m('auto')};
      ${defaultBackground};
      border: 2px solid ${color('shade.200')};
      border-radius: 20px;
      box-sizing: border-box;
      width: ${size}px;
      height: ${size}px;
    }
  `;
};

export const RadioWrapper = styled.input<RadioWrapperProps>`
  position: absolute;
  opacity: 0;
  display: inline-block;
  top: 0;
  left: 0;
  ${({ inputSize }) => {
    switch (inputSize) {
      case 'xs':
        return css`
          width: ${deriveSize(18 / 16)}px;
          height: ${deriveSize(18 / 16)}px;
        `;
      case 'sm':
        return css`
          width: ${deriveSize(20 / 16)}px;
          height: ${deriveSize(20 / 16)}px;
        `;
      case 'lg':
        return css`
          width: ${deriveSize(38 / 16)}px;
          height: ${deriveSize(38 / 16)}px;
        `;
      case 'md':
      default:
        return css`
          width: ${deriveSize(32 / 16)}px;
          height: ${deriveSize(32 / 16)}px;
        `;
    }
  }}
  ${({ checked, disabled }) => {
    if (!disabled) {
      if (checked) {
        return css`
          ${hoverCheckedState};
          ${activeCheckedState};
        `;
      }
      return hoverState;
    }
    return null;
  }}
`;
