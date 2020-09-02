import * as React from 'react';
import { mount } from 'enzyme';
import Theme, { theme } from '@lendi-ui/theme';
import { color } from '@lendi-ui/color';
import Card from '.';
import { alignType } from './components/Footer/index';

let wrapper;

const renderInsideCard = (content) => {
  wrapper = mount(
    <Theme>
      <Card>{content}</Card>
    </Theme>
  );
};

describe('Card', () => {
  it('renders an empty card if no children supplied', () => {
    renderInsideCard(<></>);
    expect(wrapper.find(Card)).toHaveLength(1);
    expect(wrapper.find(Card.Header)).toHaveLength(0);
    expect(wrapper.find(Card.Content)).toHaveLength(0);
    expect(wrapper.find(Card.Footer)).toHaveLength(0);
  });

  describe('Visuals of the card', () => {
    beforeAll(() => {
      renderInsideCard(
        <>
          <Card.Header>Some header</Card.Header>
          <Card.Content>Some content</Card.Content>
          <Card.Footer>Some footer</Card.Footer>
        </>
      );
    });

    it('renders a card with all components', () => {
      expect(wrapper.find(Card)).toHaveLength(1);
      expect(wrapper.find(Card.Header)).toHaveLength(1);
      expect(wrapper.find(Card.Content)).toHaveLength(1);
      expect(wrapper.find(Card.Footer)).toHaveLength(1);
    });

    it('should default typography to the body theme', () => {
      expect(wrapper.find(Card)).toHaveStyleRule('font-family', expect.stringContaining('Open Sans'));
    });

    it('should inherit the border radius from the theme', () => {
      expect(wrapper.find(Card)).toHaveStyleRule('border-radius', theme.borderRadius);
    });

    it('should default to a white background with our default foreground', () => {
      expect(wrapper.find(Card)).toHaveStyleRule('color', color('shade.700')({ theme }));
      expect(wrapper.find(Card)).toHaveStyleRule('background-color', color('shade.0')({ theme }));
    });
  });

  describe('Header', () => {
    beforeAll(() => {
      renderInsideCard(<Card.Header>Some header</Card.Header>);
    });

    it('renders a card with a header', () => {
      expect(wrapper.find(Card)).toHaveLength(1);
      expect(wrapper.find(Card.Header)).toHaveLength(1);
      expect(wrapper.find(Card.Content)).toHaveLength(0);
      expect(wrapper.find(Card.Footer)).toHaveLength(0);
    });

    it('should default typography to Cabin', () => {
      expect(wrapper.find(Card.Header)).toHaveStyleRule('font-family', expect.stringContaining('Cabin'));
    });
  });

  describe('Content', () => {
    it('renders a card with a content', () => {
      renderInsideCard(<Card.Content>Some content</Card.Content>);
      expect(wrapper.find(Card)).toHaveLength(1);
      expect(wrapper.find(Card.Header)).toHaveLength(0);
      expect(wrapper.find(Card.Content)).toHaveLength(1);
      expect(wrapper.find(Card.Footer)).toHaveLength(0);
    });
  });

  describe('Footer', () => {
    it('renders a card with a footer', () => {
      renderInsideCard(<Card.Footer>Some header</Card.Footer>);
      expect(wrapper.find(Card)).toHaveLength(1);
      expect(wrapper.find(Card.Header)).toHaveLength(0);
      expect(wrapper.find(Card.Content)).toHaveLength(0);
      expect(wrapper.find(Card.Footer)).toHaveLength(1);
    });

    (['left', 'center', 'right'] as alignType[]).forEach((alignment) => {
      it(`renders a footer aligned to the ${alignment}`, () => {
        renderInsideCard(<Card.Footer align={alignment}>Some footer</Card.Footer>);
        expect(wrapper.find(Card.Footer)).toMatchSnapshot();
      });
    });
  });
});
