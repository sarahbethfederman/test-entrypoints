import * as React from 'react';
import { mount } from 'enzyme';

import Theme, { theme } from '@lendi-ui/theme';
import { color as getColor } from '@lendi-ui/color';
import { Body, BodySize, BodyAlign } from '..';
import { deriveSize } from '@lendi-ui/utils';

let wrapper;
const render = (props) => {
  wrapper = mount(
    <Theme>
      <Body {...props} />
    </Theme>
  );
};

describe('Body', () => {
  const sizes: BodySize[] = [undefined, 'lg', 'md', 'sm', 'xs', 'xxs'];
  const colors = [undefined, 'primary.500', 'shade.0', 'shade.1000'];
  const alignments: BodyAlign[] = [undefined, 'left', 'center', 'right', { mobile: 'left', desktop: 'right' }];

  sizes.forEach((size) => {
    it(`should render styles for size ${size}`, () => {
      render({ size });
      expect(wrapper.find(Body)).toMatchSnapshot();
    });
  });

  colors.forEach((color) => {
    it(`should render styles for color ${color}`, () => {
      render({ size: 'lg', color });
      expect(wrapper.find(Body)).toHaveStyleRule('color', color && getColor(color)({ theme }));
    });
  });

  alignments.forEach((alignment) => {
    it(`should render styles for alignment "${alignment}"`, () => {
      render({ size: 'lg', align: `${alignment}` });
      expect(wrapper.find(Body)).toHaveStyleRule('text-align', `${alignment}`);
    });
  });

  it('should render styles for margin', () => {
    render({ size: 'lg', m: 'md' });
    expect(wrapper.find(Body)).toHaveStyleRule('margin', `${deriveSize(1.5)}`);
  });

  describe('test native props and Standard HTML Attributes', () => {
    it('should mount with Aria attributes', () => {
      const ARIA_LABEL = 'testLabel';
      const ARIA_DESCRIBE_BY = 'info';
      render({
        'aria-label': ARIA_LABEL,
        'aria-describedby': ARIA_DESCRIBE_BY,
      });
      const attributes = wrapper.find(Body).props();
      expect(attributes['aria-label']).toBe(ARIA_LABEL);
      expect(attributes['aria-describedby']).toBe(ARIA_DESCRIBE_BY);
    });
    it('should mount with native props like id, itemId', () => {
      const TEXT_ID = 'testId';
      render({
        id: TEXT_ID,
        itemID: 'itemId',
      });
      const attributes = wrapper.find(Body).props();
      expect(attributes.id).toBe(TEXT_ID);
      expect(attributes['itemID']).toBe('itemId');
    });
  });
});
