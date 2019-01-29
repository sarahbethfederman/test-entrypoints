import * as React from 'react';
import { InputSize, InputWrapper, Layout, BeforeWrapper, AfterWrapper } from './index.style';

export interface InputProp {
  size?: InputSize;
  isError?: boolean;
  isInverse?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  before?: React.ReactNode;
  after?: React.ReactNode;
  placeholder?: string;
  value?: string;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  size = 'md',
  before,
  after,
  isError = false,
  isInverse = false,
  isFullWidth = false,
  isDisabled = false,
  ...otherProps
}: InputProp) => {
  return (
    <Layout size={size} isFullWidth={isFullWidth} isInverse={isInverse} isError={isError} isDisabled={isDisabled}>
      {before && <BeforeWrapper isDisabled={isDisabled}>{before}</BeforeWrapper>}
      <InputWrapper
        type="text"
        readOnly={isDisabled}
        isError={isError}
        isInverse={isInverse}
        fontSize={size}
        {...otherProps}
      />
      {after && <AfterWrapper isDisabled={isDisabled}>{after}</AfterWrapper>}
    </Layout>
  );
};
