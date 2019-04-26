import * as React from 'react';
import { LabelSize } from './Label/index.style';
import Label from './Label/index';
import ErrorMessage from './ErrorMessage/index';
import { LinkProps } from '@lendi-ui/typography';
import { FieldWrapper, LabelField, ToolTip } from './index.style';

export interface FieldProps {
  size?: LabelSize;
  label?: string;
  isOptional?: boolean;
  assistiveText?: string;
  link?: React.ReactElement<LinkProps>;
  tooltip?: React.ReactNode; // replace with ToolTip later when LUI Input added to LUI
  children: React.ReactNode;
  error?: string;
  touched?: boolean;
  htmlFor?: string;
}

const Field = ({
  size = 'sm',
  label,
  isOptional = false,
  assistiveText,
  link,
  tooltip,
  children,
  error,
  touched,
  htmlFor,
}: FieldProps) => {
  const labelPropExists = label || isOptional || assistiveText || link || tooltip;
  return (
    <FieldWrapper>
      {labelPropExists && (
        <LabelField htmlFor={htmlFor}>
          <Label size={size} label={label} isOptional={isOptional} assistiveText={assistiveText} link={link} />
          {/* replace with ToolTip later when LUI Input added to LUI */}
          {tooltip && <ToolTip size={size} color="secondary.600" />}
        </LabelField>
      )}
      {children}
      {touched && error && <ErrorMessage error={error} />}
    </FieldWrapper>
  );
};

export default Field;
