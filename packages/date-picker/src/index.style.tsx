import styled, { css } from 'styled-components';
import { select } from '@lendi-ui/theme';
import { SpacingName } from '@lendi-ui/spacing';
import { map, BreakpointValue, BreakpointValueMap } from '@lendi-ui/breakpoint';
import { color } from '@lendi-ui/color';
import { deriveSize } from '@lendi-ui/utils';

export type Size = 'lg' | 'md' | 'sm';
export type DatePickerSize = BreakpointValue<Size> | BreakpointValueMap<Size>;
export interface WrapperProps {
  size: DatePickerSize;
  isError: boolean;
  isDisabled: boolean;
  hasDayField: boolean;
}

export interface IconWrapperProps {
  size: DatePickerSize;
}

export interface InputWrapperProps {
  isRightEdge?: boolean;
  readOnly?: boolean;
}

const wrapperBySizeMixin = (size: DatePickerSize, hasDayField: boolean): SpacingName =>
  map(size, (val) => {
    switch (val) {
      case 'sm':
        return `
        height: ${deriveSize(2.5)};
        font-size: ${deriveSize(1)};
        min-width: ${hasDayField ? deriveSize(14) : deriveSize(10.125)};
        `;
      case 'md':
        return `
        height: ${deriveSize(3)};
        font-size: ${deriveSize(1.125)};
        min-width: ${hasDayField ? deriveSize(16.25) : deriveSize(11.75)};
        `;
      case 'lg':
        return `
        height: ${deriveSize(4)};
        font-size: ${deriveSize(1.375)};
        min-width: ${hasDayField ? deriveSize(20.5) : deriveSize(15)};
        `;
      default:
        return undefined;
    }
  });

const iconWrapperBySizeMixin = (size: DatePickerSize): SpacingName =>
  map(size, (val) => {
    switch (val) {
      case 'sm':
        return `
        min-width: ${deriveSize(2.5)};
        padding-top: ${deriveSize(0.125)};
        font-size: ${deriveSize(1.25)};
      `;
      case 'md':
        return `
        min-width: ${deriveSize(3)};
        padding-top: ${deriveSize(0.1875)};
        font-size: ${deriveSize(1.875)};;
      `;
      case 'lg':
        return `
        min-width: ${deriveSize(4)};
        padding-top: ${deriveSize(0.3125)};
        font-size: ${deriveSize(2.5)};
      `;
      default:
        return undefined;
    }
  });

export const Wrapper = styled.div<WrapperProps>`
  ${({ size, hasDayField }: { size: DatePickerSize; hasDayField: boolean }) =>
    css`
      ${size && wrapperBySizeMixin(size, hasDayField)};
    `};
  ${({ isError }: { isError: boolean }) =>
    isError
      ? css`
          border: 1px solid ${color('error.500')};
        `
      : css`
          border: 1px solid ${color('shade.200')};
        `};
  ${({ isDisabled }: { isDisabled: boolean }) =>
    isDisabled
      ? css`
          cursor: not-allowed;
        `
      : css`
          :hover {
            border: solid 1px ${color('shade.600')};
          }
        `}

  font-family: ${select('typography.body.fontFamily')};
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  `;

export const IconWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  ${({ size }: IconWrapperProps) =>
    css`
      ${size && iconWrapperBySizeMixin(size)};
    `};
  };
`;

export const InputWrapper = styled.input<InputWrapperProps>`
  ${({ isRightEdge }: InputWrapperProps) => {
    if (isRightEdge) {
      return css`
        border-bottom-right-radius: 6px;
        border-top-right-radius: 6px;
      `;
    }
    return undefined;
  }};

  ${({ readOnly }: InputWrapperProps) => {
    if (readOnly) {
      return css`
        cursor: not-allowed;
      `;
    }
    return undefined;
  }} font-size: inherit;
  height: 100%;
  width: 100%;
  border: 0px;
  padding: 0px;
  text-align: center;
`;

export const DayInputWrapper = styled.div`
  border-left: solid 1px ${color('shade.200')};
  width: 100%;
  height: 100%;
`;

export const MonthInputWrapper = styled.div`
  border-left: solid 1px ${color('shade.200')};
  width: 100%;
  height: 100%;
`;

export const YearInputWrapper = styled.div`
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
  border-left: solid 1px ${color('shade.200')};
  width: 100%;
  height: 100%;
`;
