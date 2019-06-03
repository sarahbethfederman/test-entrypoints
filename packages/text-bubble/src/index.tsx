import * as React from 'react';
import { Wrapper, OverlineContainer, ChildWrapper } from './index.style';
import { LUIGlobalProps } from '@lendi-ui/utils';

export interface TextBubbleProps extends LUIGlobalProps {
  label?: string;
  children?: React.ReactNode;
  hasOverline?: boolean;
  isFullWidth?: boolean;
  className?: string;
}

const TextBubble = (props: TextBubbleProps) => {
  const { label, children, className, hasOverline = true, isFullWidth = false, ...otherProps } = props;

  return (
    <Wrapper className={className} isFullWidth={isFullWidth} {...otherProps}>
      {hasOverline && (
        <OverlineContainer>
          {label
            ? label
            : new Date(Date.now()).toLocaleDateString('en-AU', {
                hour: 'numeric',
                minute: 'numeric',
              })}
        </OverlineContainer>
      )}
      <ChildWrapper>{children}</ChildWrapper>
    </Wrapper>
  );
};

export default TextBubble;
