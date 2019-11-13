import * as React from 'react';
import { Colors } from '@lendi-ui/theme';
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
      {({ isOpen, isDisabled, ariaId, variant }) => {
        let arrowIconColor: Colors = 'secondary.500';

        if (['emphasis', 'empty'].indexOf(variant) !== -1) {
          arrowIconColor = 'primary.500';
        }

        return (
          <HeaderButtonWrapper
            id={ariaId}
            aria-expanded={isOpen}
            {...otherHeaderProps}
            disabled={isDisabled}
            variant={variant}
            onClick={(e: React.SyntheticEvent) => {
              if (isDisabled) {
                return;
              }
              onClick(e);
            }}
          >
            <HeaderIconContentWrapper>
              <ArrowIcon isRotate={isOpen} isDisabled={isDisabled} color={arrowIconColor} />
              <HeaderContent>{children}</HeaderContent>
            </HeaderIconContentWrapper>
            {after && <>{after}</>}
          </HeaderButtonWrapper>
        );
      }}
    </AccordionContext.Consumer>
  );
};
