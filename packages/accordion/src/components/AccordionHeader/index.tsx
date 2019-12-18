import * as React from 'react';
import { Colors } from '@lendi-ui/theme';
import { AccordionHeaderProps } from '../../typings';
import { ArrowIcon, HeaderWrapper, HeaderContent, HeaderButtonWrapper, HeaderAfterWrapper } from '../../index.style';
import { AccordionContext } from '../AccordionContext';

export const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  children,
  after,
  onClick = () => {},
  ...otherHeaderProps
}) => {
  return (
    <AccordionContext.Consumer>
      {({ isOpen, isDisabled, isTransparent, ariaId, variant }) => {
        let arrowIconColor: Colors = 'secondary.500';

        if (['emphasis', 'empty'].indexOf(variant) !== -1) {
          arrowIconColor = 'primary.500';
        }

        return (
          <HeaderWrapper {...otherHeaderProps} isTransparent={isTransparent} variant={variant}>
            <HeaderButtonWrapper
              id={ariaId}
              aria-expanded={isOpen}
              type={'button'}
              onClick={(e: React.SyntheticEvent) => {
                if (isDisabled) {
                  return;
                }
                onClick(e);
              }}
              disabled={isDisabled}
              variant={variant}
            >
              <ArrowIcon isRotate={isOpen} isDisabled={isDisabled} color={arrowIconColor} />
              <HeaderContent>{children}</HeaderContent>
            </HeaderButtonWrapper>
            {after && <HeaderAfterWrapper disabled={isDisabled}>{after}</HeaderAfterWrapper>}
          </HeaderWrapper>
        );
      }}
    </AccordionContext.Consumer>
  );
};
