import * as React from 'react';
import { shallow } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { AccordionGroup } from './components/AccordionGroup';
import { AccordionHeader } from './components/AccordionHeader';
import { AccordionItem } from './components/AccordionItem';
import { Accordion } from './components/Accordion/index';
import { Check } from '@lendi-ui/icon';

let element;
const mockClickFn = jest.fn();

describe('AccordionGroup', () => {
  beforeEach(() => {
    element = shallow(
      <Theme>
        <AccordionGroup>
          <Accordion isOpen={true}>
            <Accordion.Header onClick={mockClickFn}>About</Accordion.Header>
            <Accordion.Content>Item 1</Accordion.Content>
            <Accordion.Content>Item 2</Accordion.Content>
            <Accordion.Content>Item 3</Accordion.Content>
          </Accordion>
        </AccordionGroup>
      </Theme>
    );
  });

  describe('test rendering', () => {
    it('should mount AccordionGroup', () => {
      expect(element.find(AccordionGroup)).toHaveLength(1);
    });

    it('should mount Accordion', () => {
      expect(element.find(Accordion)).toHaveLength(1);
    });

    it('should mount AccordionHeader', () => {
      expect(element.find(AccordionHeader)).toHaveLength(1);
    });

    it('should mount AccordionItem', () => {
      expect(element.find(AccordionItem)).toHaveLength(3);
    });
  });

  describe('test click handler', () => {
    it('should fire onclick', () => {
      const firstAccordionHeader = element.find(AccordionHeader).at(0);
      firstAccordionHeader.simulate('click');
      expect(mockClickFn).toHaveBeenCalled();
    });
  });
});

// Accordion test cases

describe('Accordion', () => {
  beforeEach(() => {
    element = shallow(
      <Theme>
        <AccordionGroup>
          <Accordion isOpen={true} isDisabled={false}>
            <Accordion.Header onClick={mockClickFn}>About</Accordion.Header>
            <Accordion.Content>Item 1</Accordion.Content>
          </Accordion>
          <Accordion isOpen={false} />
          <Accordion isDisabled={true} isOpen={false}>
            <Accordion.Header onClick={mockClickFn}>About</Accordion.Header>
            <Accordion.Content>Item 1</Accordion.Content>
            <Accordion.Content>Item 2</Accordion.Content>
            <Accordion.Content>Item 3</Accordion.Content>
          </Accordion>
        </AccordionGroup>
      </Theme>
    );
  });

  describe('test rendering', () => {
    it('should mount Accordion with children', () => {
      const firstAccordion = element.find(Accordion).at(0);
      expect(firstAccordion.text).not.toBe('<Accordion />');
    });

    it('should render Accordion without any children', () => {
      const secondAccordion = element.find(Accordion).at(1);
      expect(secondAccordion.text()).toBe('<Accordion />');
    });
  });

  describe('test disable accordion', () => {
    it('should mount 2nd Accordion as disabled', () => {
      const disabledAccordion = element.find(Accordion).at(2);
      expect(disabledAccordion.props().isDisabled).toBeTruthy();
    });
  });

  describe('test isOpen', () => {
    it('should mount Accordion with open state', () => {
      expect(element.find(Accordion).at(0).props).toBeTruthy();
    });
  });
});

// AccordionHeader test cases

describe('AccordionHeader', () => {
  beforeEach(() => {
    element = shallow(
      <Theme>
        <AccordionHeader onClick={mockClickFn} after={<Check color="primary.500" />}>
          About
        </AccordionHeader>
      </Theme>
    );
  });

  describe('test rendering', () => {
    it('should mount AccordionHeader', () => {
      expect(element.find(AccordionHeader)).toHaveLength(1);
    });

    it('should mount with onclick and after', () => {
      expect(element.find(AccordionHeader).props().after).toBeDefined();
      expect(element.find(AccordionHeader).props().onClick).toBeDefined();
    });

    it('should call onClick', () => {
      element.simulate('click');
      expect(mockClickFn).toHaveBeenCalled();
    });
  });

  // Accordionitem test cases

  describe('AccordionItem', () => {
    beforeEach(() => {
      element = shallow(
        <Theme>
          <AccordionItem>Accordion Item</AccordionItem>
        </Theme>
      );
    });

    describe('test rendering', () => {
      it('should mount AccordionHeader', () => {
        expect(element.find(AccordionItem)).toHaveLength(1);
      });
    });
  });
});
