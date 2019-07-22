import * as React from 'react';
import { AccordionHeaderProps } from '../../typings';
import { ArrowIcon, HeaderWrapper, HeaderContent, HeaderIconContentWrapper } from '../../index.style';
import { AccordionContext } from '../AccordionContext';

export const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  children,
  after,
  onClick = () => {},
  ...otherHeaderProps
}) => {
  return (
    <AccordionContext.Consumer>
      {(context) => {
        return (
          <HeaderWrapper
            {...otherHeaderProps}
            disabled={context.isDisabled}
            onClick={(e: React.SyntheticEvent) => {
              if (context.isDisabled) {
                return;
              }
              onClick(e);
            }}
          >
            <HeaderIconContentWrapper>
              <ArrowIcon isRotate={context.isOpen} isDisabled={context.isDisabled} />
              <HeaderContent>{children}</HeaderContent>
            </HeaderIconContentWrapper>
            {after && <>{after}</>}
          </HeaderWrapper>
        );
      }}
    </AccordionContext.Consumer>
  );
};
