import * as React from 'react';
import { Wrapper } from './index.style';
import { HighlightOff } from '@lendi-ui/icon';
import { Body } from '@lendi-ui/typography';

export interface ErrorMessageProps {
  error?: string;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  const ErrorMessageColor = 'error.500';
  return (
    <Wrapper color={ErrorMessageColor}>
      <HighlightOff color={ErrorMessageColor} />
      <Body size="xs" color={ErrorMessageColor} ml="xxxs">
        {error}
      </Body>
    </Wrapper>
  );
};

export default ErrorMessage;
