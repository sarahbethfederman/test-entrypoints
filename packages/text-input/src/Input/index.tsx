import * as React from 'react';
import { AfterWrapper, BeforeWrapper, InputSize, InputWrapper, Layout } from './index.style';

type ReactInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const supportedTypes = ['text', 'email', 'number', 'tel'];

export type InputProp = Pick<
  ReactInputProps,
  Exclude<keyof ReactInputProps, 'size' | 'placeholder' | 'value' | 'readonly'>
> & {
  size?: InputSize;
  inputSize?: React.InputHTMLAttributes<HTMLInputElement>['size'];
  isError?: boolean;
  isInverse?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isAutoFocus?: boolean;
  isRequired?: boolean;
  isFullWidth?: boolean;
  before?: React.ReactNode;
  after?: React.ReactNode;
  placeholder?: string;
  value?: string;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: string;
};

export const Input = React.forwardRef(
  (
    {
      size = 'md',
      before,
      after,
      isError = false,
      isInverse = false,
      isFullWidth = false,
      isDisabled = false,
      isReadOnly = false,
      isAutoFocus = false,
      isRequired = false,
      inputSize,
      type = 'text',
      ...otherProps
    }: InputProp,
    parentRef?: React.Ref<HTMLInputElement>
  ) => {
    const disabledVal = isDisabled || !!otherProps.disabled;
    const refInput = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
      if (refInput.current && (isAutoFocus || otherProps.autoFocus)) {
        refInput.current.focus();
      }
    }, []);

    return (
      <Layout size={size} isFullWidth={isFullWidth} isInverse={isInverse} isError={isError} isDisabled={disabledVal}>
        {before && <BeforeWrapper isDisabled={disabledVal}>{before}</BeforeWrapper>}
        <InputWrapper
          {...otherProps}
          ref={parentRef ? parentRef : refInput}
          type={supportedTypes.includes(`${type}`) ? `${type}` : 'text'}
          isError={isError}
          isInverse={isInverse}
          fontSize={size}
          size={inputSize}
          readOnly={isReadOnly || otherProps.readOnly} // in order to keep a backward compatibility, and giving preferences to provided InputProps, otherwise fall to HTML defaults.
          disabled={disabledVal}
          required={isRequired || otherProps.required}
        />
        {after && <AfterWrapper isDisabled={isDisabled}>{after}</AfterWrapper>}
      </Layout>
    );
  }
);
