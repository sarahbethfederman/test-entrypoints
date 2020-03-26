import * as React from 'react';
import { AccordionItemProps } from '../../typings';
import { PaddedItem, AccordionItemWrapper } from '../../index.style';
import { AccordionContext } from '../AccordionContext';

export const AccordionItem: React.FC<AccordionItemProps> = ({ children, ...otherAccordionItemProps }) => (
  <AccordionContext.Consumer>
    {({ isOpen, ariaId, variant }) => (
      <AccordionItemWrapper
        role="region"
        aria-labelledby={ariaId}
        hidden={!isOpen}
        aria-hidden={!isOpen}
        show={isOpen}
        {...otherAccordionItemProps}
      >
        <PaddedItem variant={variant}>{children}</PaddedItem>
      </AccordionItemWrapper>
    )}
  </AccordionContext.Consumer>
);
