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

const Input = (props: InputProp) => {
  const {
    size = 'md',
    before,
    after,
    isError = false,
    isInverse = false,
    isFullWidth = false,
    isDisabled = false,
    ...otherProps
  } = props;
  return (
    <Layout size={size} isFullWidth={isFullWidth}>
      {before && <BeforeWrapper size={size}>{before}</BeforeWrapper>}
      <InputWrapper
        type="text"
        readOnly={isDisabled}
        isError={isError}
        isInverse={isInverse}
        beforeExist={!!before}
        afterExist={!!after}
        fontSize={size}
        {...otherProps}
      />
      {after && <AfterWrapper size={size}>{after}</AfterWrapper>}
    </Layout>
  );
};

export default Input;
