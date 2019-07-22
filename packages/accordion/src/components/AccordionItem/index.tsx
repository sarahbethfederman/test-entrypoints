import * as React from 'react';
import { AccordionItemProps } from '../../typings';
import { AccordionItemWrapper } from '../../index.style';
import { AccordionContext } from '../AccordionContext';
export const AccordionItem: React.FC<AccordionItemProps> = ({ children, ...otherAccordionItemProps }) => {
  return (
    <AccordionContext.Consumer>
      {(context) => (
        <AccordionItemWrapper show={context.isOpen} {...otherAccordionItemProps}>
          {children}
        </AccordionItemWrapper>
      )}
    </AccordionContext.Consumer>
  );
};
