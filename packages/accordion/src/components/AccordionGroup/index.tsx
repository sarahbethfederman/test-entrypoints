import * as React from 'react';
import { AccordionGroupProps, AccordionProps } from '../../typings';
import { Accordion } from '../Accordion/index';
import { Wrapper } from '../../index.style';
import { AccordionGroupContext } from '../AccordionGroupContext';

function renderAccordions(child: React.ReactChild) {
  if (React.isValidElement<AccordionProps>(child)) {
    return React.cloneElement(child);
  }

  return child;
}

function AccordionGroup(props: AccordionGroupProps) {
  const { children, isOpen = false, variant = 'primary', ...otherProps } = props;

  return (
    <Wrapper {...otherProps}>
      <AccordionGroupContext.Provider value={{ isOpen, variant }}>
        {React.Children.map(children as React.ReactChild, renderAccordions)}
      </AccordionGroupContext.Provider>
    </Wrapper>
  );
}

AccordionGroup.Accordion = Accordion;

export { AccordionGroup };
