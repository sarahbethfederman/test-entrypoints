import * as React from 'react';
import { Size, TextAreaWrapper } from './index.style';
import { LUIFormProps } from '@lendi-ui/utils';

export interface TextAreaProps extends LUIFormProps {
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
}

const TextArea = ({
  size = 'md',
  isError = false,
  isInverse = false,
  isFullWidth = false,
  isDisabled = false,
  className = '',
  ...otherProps
}: TextAreaProps) => {
  return (
    <TextAreaWrapper
      size={size}
      isError={isError}
      isInverse={isInverse}
      isFullWidth={isFullWidth}
      disabled={isDisabled}
      isDisabled={isDisabled}
      className={className}
      {...otherProps}
    />
  );
};

export default TextArea;
