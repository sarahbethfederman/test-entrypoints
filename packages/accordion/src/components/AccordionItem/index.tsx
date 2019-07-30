import * as React from 'react';
import { AccordionItemProps } from '../../typings';
import { PaddedItem, AccordionItemWrapper } from '../../index.style';
import { AccordionContext } from '../AccordionContext';
export const AccordionItem: React.FC<AccordionItemProps> = ({ children, ...otherAccordionItemProps }) => {
  return (
    <AccordionContext.Consumer>
      {(context) => (
        <AccordionItemWrapper show={context.isOpen} {...otherAccordionItemProps}>
          <PaddedItem>{children}</PaddedItem>
        </AccordionItemWrapper>
      )}
    </AccordionContext.Consumer>
  );
};
