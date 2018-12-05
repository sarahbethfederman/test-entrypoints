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
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProp) => {
  const {
    size = 'md',
    before,
    after,
    value,
    isError = false,
    isInverse = false,
    isFullWidth = false,
    isDisabled = false,
    placeholder,
    onChange,
  } = props;
  return (
    <Layout size={size} isFullWidth={isFullWidth}>
      {before && <BeforeWrapper size={size}>{before}</BeforeWrapper>}
      <InputWrapper
        type="text"
        value={value}
        placeholder={placeholder}
        readOnly={isDisabled}
        isError={isError}
        isInverse={isInverse}
        beforeExist={!!before}
        afterExist={!!after}
        fontSize={size}
        onChange={onChange}
      />
      {after && <AfterWrapper size={size}>{after}</AfterWrapper>}
    </Layout>
  );
};

export default Input;
