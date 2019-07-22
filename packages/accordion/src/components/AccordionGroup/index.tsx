import * as React from 'react';
import { AccordionGroupProps, AccordionProps } from '../../typings';
import { Accordion } from '../Accordion/index';
import { Wrapper } from '../../index.style';
import { AccordionGroupContext } from '../AccordionGroupContext';

export class AccordionGroup extends React.Component<AccordionGroupProps> {
  static Accordion = Accordion;

  private renderAccordions = (child: React.ReactChild): React.ReactNode => {
    if (React.isValidElement<AccordionProps>(child)) {
      return React.cloneElement(child);
    }
    return child;
  };

  render() {
    const { children, isOpen = false, ...otherProps } = this.props;
    return (
      <Wrapper {...otherProps}>
        <AccordionGroupContext.Provider value={{ isOpen }}>
          {React.Children.map(children as React.ReactChild, this.renderAccordions)}
        </AccordionGroupContext.Provider>
      </Wrapper>
    );
  }
}
