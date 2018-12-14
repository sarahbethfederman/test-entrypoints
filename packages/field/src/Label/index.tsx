import * as React from 'react';
import { LinkProps } from '@lendi-ui/typography';
import { LabelSize, LabelBody, LabelHeading, AssistiveBody } from './index.style';

export interface LabelProps {
  size?: LabelSize;
  label?: string;
  assistiveText?: string;
  link?: React.ReactElement<LinkProps>;
  isOptional?: boolean;
}

const Label = ({ size = 'sm', label, assistiveText, link, isOptional }: LabelProps) => {
  let labelBody, assistiveBody;
  switch (size) {
    case 'sm':
      labelBody = (
        <LabelBody size="md" ml="xxs">
          <strong>
            {label}
            {isOptional && ' (Optional)'}
          </strong>
        </LabelBody>
      );
      assistiveBody = assistiveText ? (
        <AssistiveBody color="shade.400" size="xs">
          {assistiveText}
        </AssistiveBody>
      ) : null;
      break;
    case 'lg':
      labelBody = (
        <LabelHeading size="md">
          {label}
          {isOptional && ' (Optional)'}
        </LabelHeading>
      );
      assistiveBody = assistiveText ? (
        <AssistiveBody color="shade.400" size="md">
          {assistiveText}
        </AssistiveBody>
      ) : null;
      break;
  }
  return (
    <div>
      {labelBody}
      {link}
      {assistiveBody}
    </div>
  );
};

export default Label;
