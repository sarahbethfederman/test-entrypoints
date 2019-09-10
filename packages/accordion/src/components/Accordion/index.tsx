import * as React from 'react';
import * as cuid from 'cuid';
import { AccordionProps } from '../../typings';
import { AccordionItem } from '../AccordionItem';
import { AccordionHeader } from '../AccordionHeader';
import { AccordionWrapper } from '../../index.style';
import { AccordionContext } from '../AccordionContext';
import { AccordionGroupContext } from '../AccordionGroupContext';

export class Accordion extends React.Component<AccordionProps> {
  static Header = AccordionHeader;
  static Content = AccordionItem;
  static context = AccordionGroupContext;

  render() {
    const { isOpen = false, isDisabled = false, children, ...otherAccordionProps } = this.props;
    // check isOpen on Accordion group and preference to be given to it otherwise take the indicidual accordions.
    const isOpenValue = this.context.isOpen ? this.context.isOpen : isOpen;
    const ariaId = cuid();

    return (
      <AccordionContext.Provider value={{ isOpen: isOpenValue, isDisabled, ariaId }}>
        <AccordionWrapper isSelected={isOpenValue} {...otherAccordionProps}>
          <>{getChildrenOf(Accordion.Header, children)}</>
          <>{getChildrenOf(Accordion.Content, children)}</>
        </AccordionWrapper>
      </AccordionContext.Provider>
    );
  }
}

function getChildrenOf(component: React.ReactType, children: React.ReactNode) {
  const foundChildren = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === component && child
  );

  return foundChildren || null;
}
