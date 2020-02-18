import * as React from 'react';
import { Size, TextAreaWrapper } from './index.style';

type ReactTextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export type TextAreaProps = Pick<
  ReactTextAreaProps,
  Exclude<keyof ReactTextAreaProps, 'size' | 'placeholder' | 'value'>
> & {
  size?: Size;
  isError?: boolean;
  isInverse?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  placeholder?: string;
  value?: string;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
};

const TextArea = React.forwardRef(
  (
    {
      size = 'md',
      isError = false,
      isInverse = false,
      isFullWidth = false,
      isDisabled = false,
      className = '',
      ...otherProps
    }: TextAreaProps,
    parentRef?: React.Ref<HTMLTextAreaElement>
  ) => {
    return (
      <TextAreaWrapper
        size={size}
        ref={parentRef}
        isError={isError}
        isInverse={isInverse}
        isFullWidth={isFullWidth}
        disabled={isDisabled}
        isDisabled={isDisabled}
        className={className}
        {...otherProps}
      />
    );
  }
);

export default TextArea;
