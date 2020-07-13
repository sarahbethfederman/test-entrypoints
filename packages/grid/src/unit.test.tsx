import * as React from 'react';
import styled from 'styled-components';
import { mount } from 'enzyme';
import { Breakpoint } from '@lendi-ui/breakpoint';
import { unit } from '.';

describe('unit()', () => {
  const Unit = styled.div`
    ${unit};
  `;

  describe('size', () => {
    it('should render correctly when default', () => {
      const element = mount(<Unit />);
      expect(element).toHaveStyleRule('max-width', '100%');
    });

    it('should render correctly when 1/1', () => {
      const element = mount(<Unit size={1} />);
      expect(element).toHaveStyleRule('max-width', '100%');
    });

    it('should render correctly when 1/2', () => {
      const element = mount(<Unit size={1 / 2} />);
      expect(element).toHaveStyleRule('max-width', '50%');
    });

    it('should render correctly when 1/3', () => {
      const element = mount(<Unit size={1 / 3} />);
      expect(element).toHaveStyleRule('max-width', '33.3333%');
    });

    it('should render correctly when 1/4', () => {
      const element = mount(<Unit size={1 / 4} />);
      expect(element).toHaveStyleRule('max-width', '25%');
    });

    it('should render correctly when 1/5', () => {
      const element = mount(<Unit size={1 / 5} />);
      expect(element).toHaveStyleRule('max-width', '20%');
    });

    it.each([
      [1, '100%'],
      [1 / 2, '50%'],
      [1 / 4, '25%'],
      [0, '0%'],
    ])('should render offset of %d correctly', ([val, result]) => {
      const element = mount(<Unit offset={val} />);
      expect(element).toHaveStyleRule('margin-left', result);
    });

    it('should render correctly across breakpoints', () => {
      const element = mount(<Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 4 }} />);
      expect(element).toHaveStyleRule('max-width', '100%', {
        media: `(min-width:${Breakpoint.mobile})`,
      });
      expect(element).toHaveStyleRule('max-width', '50%', {
        media: `(min-width:${Breakpoint.tablet})`,
      });
      expect(element).toHaveStyleRule('max-width', '25%', {
        media: `(min-width:${Breakpoint.desktop})`,
      });
    });
  });
});
