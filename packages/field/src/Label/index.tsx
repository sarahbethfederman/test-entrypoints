import * as React from 'react';
import { LinkProps } from '@lendi-ui/typography';
import { LabelSize, LabelHeading, AssistiveBody } from './index.style';

export interface LabelProps {
  size: LabelSize;
  label?: string;
  assistiveText?: string;
  link?: React.ReactElement<LinkProps>;
  isRequired?: boolean;
}

const Label = ({ size, label, assistiveText, link, isRequired }: LabelProps) => (
  <div>
    <LabelHeading size={size}>
      {label}
      {!isRequired && ' (Optional)'}
    </LabelHeading>
    {link}
    <AssistiveBody color="shade.400" size={size}>
      {assistiveText}
    </AssistiveBody>
  </div>
);

export default Label;