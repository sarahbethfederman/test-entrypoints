import * as React from 'react';
import cuid from 'cuid';
import { AccordionProps } from '../../typings';
import { AccordionItem } from '../AccordionItem';
import { AccordionHeader } from '../AccordionHeader';
import { AccordionWrapper } from '../../index.style';
import { AccordionContext } from '../AccordionContext';
import { AccordionGroupContext } from '../AccordionGroupContext';

function getChildrenOf(component: React.ReactType, children: React.ReactNode) {
  const foundChildren = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === component && child
  );

  return foundChildren || null;
}

export const Accordion = (props: AccordionProps) => {
  const context = React.useContext(AccordionGroupContext);
  const { isOpen = false, isDisabled = false, isTransparent = false, children, ...otherAccordionProps } = props;

  // check isOpen on Accordion group and preference to be given to it otherwise take the indicidual accordions.
  const isOpenValue = context.isOpen ? context.isOpen : isOpen;
  const ariaId = cuid();

  return (
    <AccordionContext.Provider
      value={{ isOpen: isOpenValue, variant: context.variant, isDisabled, isTransparent, ariaId }}
    >
      <AccordionWrapper
        isSelected={isOpenValue}
        variant={context.variant}
        isTransparent={isTransparent}
        {...otherAccordionProps}
      >
        <>{getChildrenOf(Accordion.Header, children)}</>
        <>{getChildrenOf(Accordion.Content, children)}</>
      </AccordionWrapper>
    </AccordionContext.Provider>
  );
};

Accordion.Header = AccordionHeader;
Accordion.Content = AccordionItem;
