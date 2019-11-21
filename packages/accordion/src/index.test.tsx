import * as React from 'react';
import { shallow, mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { AccordionGroup } from './components/AccordionGroup';
import { AccordionHeader } from './components/AccordionHeader';
import { AccordionItem } from './components/AccordionItem';
import { Accordion } from './components/Accordion/index';
import { Check } from '@lendi-ui/icon';
import { AccordionItemWrapper, HeaderButtonWrapper } from './index.style';
import { AccordionContext } from './components/AccordionContext';

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

      expect(firstAccordion.children().length).toBe(2);
    });

    it('should render Accordion without any children', () => {
      const secondAccordion = element.find(Accordion).at(1);

      expect(secondAccordion.children().length).toBe(0);
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

describe('Accordion accesibility', () => {
  beforeEach(() => {
    element = mount(
      <Theme>
        <AccordionContext.Provider value={{ isOpen: true, isDisabled: false, ariaId: 'test-id', variant: 'primary' }}>
          <Accordion>
            <Accordion.Header onClick={mockClickFn}>About</Accordion.Header>
            <Accordion.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et pulvinar leo, sed laoreet augue. Quisque
              blandit, odio vitae mattis gue, nisl arcu scelerisque eros, fringilla bibendum nisl libero eget nisi.
              Fusce malesuada at erat nec dictum. Donec placerat suscipit vulputate. Nullam ullamcorper libero mi, eu
              vulputate orci scelerisque vel. Phasellus non pretium ante, nec vestibulum justo. Ut et interdum nibh,
              quis scelerisque turpis. Praesent hendrerit urna eu lorem dignissim, nec sagittis nulla iaculis.
            </Accordion.Content>
          </Accordion>
        </AccordionContext.Provider>
      </Theme>
    );
  });

  it('should match aria-labelledby to the id of the button', () => {
    const accordion = element.find(Accordion);

    const ariaLabel = accordion.find(AccordionItemWrapper).prop('aria-labelledby');
    const buttonId = accordion.find(HeaderButtonWrapper).prop('id');

    expect(buttonId).toBe(ariaLabel);
  });

  it('should contain the correct role', () => {
    const HeaderWrapper = element.find(AccordionItemWrapper);
    expect(HeaderWrapper.prop('role')).toEqual('region');
  });

  it('should contain aria visibility tags', () => {
    expect(element.find(AccordionItemWrapper).prop('aria-hidden')).toEqual(true);
  });
});

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
