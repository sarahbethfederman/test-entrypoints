import * as React from 'react';
import { AccordionHeaderProps } from '../../typings';
import { ArrowIcon, HeaderButtonWrapper, HeaderContent, HeaderIconContentWrapper } from '../../index.style';
import { AccordionContext } from '../AccordionContext';

export const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  children,
  after,
  onClick = () => {},
  ...otherHeaderProps
}) => {
  return (
    <AccordionContext.Consumer>
      {({ isOpen, isDisabled, ariaId }) => {
        return (
          <HeaderButtonWrapper
            id={ariaId}
            aria-expanded={isOpen}
            {...otherHeaderProps}
            disabled={isDisabled}
            onClick={(e: React.SyntheticEvent) => {
              if (isDisabled) {
                return;
              }
              onClick(e);
            }}
          >
            <HeaderIconContentWrapper>
              <ArrowIcon isRotate={isOpen} isDisabled={isDisabled} />
              <HeaderContent>{children}</HeaderContent>
            </HeaderIconContentWrapper>
            {after && <>{after}</>}
          </HeaderButtonWrapper>
        );
      }}
    </AccordionContext.Consumer>
  );
};
