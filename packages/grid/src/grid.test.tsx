import * as React from 'react';
import styled from 'styled-components';
import { mount } from 'enzyme';
import { Breakpoint } from '@lendi-ui/breakpoint';
import { grid } from '.';

describe('grid()', () => {
  const Grid = styled.div`
    ${grid};
  `;

  describe('halign', () => {
    it('should render correctly when default', () => {
      const element = mount(<Grid />);
      expect(element).toHaveStyleRule('justify-content', undefined);
    });

    it('should render correctly when left', () => {
      const element = mount(<Grid halign="left" />);
      expect(element).toHaveStyleRule('justify-content', 'flex-start');
    });

    it('should render correctly when center', () => {
      const element = mount(<Grid halign="center" />);
      expect(element).toHaveStyleRule('justify-content', 'center');
    });

    it('should render correctly when right', () => {
      const element = mount(<Grid halign="right" />);
      expect(element).toHaveStyleRule('justify-content', 'flex-end');
    });

    it('should render correctly when justify', () => {
      const element = mount(<Grid halign="justify" />);
      expect(element).toHaveStyleRule('justify-content', 'space-between');
    });

    it('should render correctly when justify-center', () => {
      const element = mount(<Grid halign="justify-center" />);
      expect(element).toHaveStyleRule('justify-content', 'space-around');
    });

    it('should render correctly across breakpoints', () => {
      const element = mount(<Grid halign={{ mobile: 'left', tablet: 'center', desktop: 'right' }} />);
      expect(element).toHaveStyleRule('justify-content', 'flex-start', {
        media: `(min-width:${Breakpoint.mobile})`,
      });
      expect(element).toHaveStyleRule('justify-content', 'center', {
        media: `(min-width:${Breakpoint.tablet})`,
      });
      expect(element).toHaveStyleRule('justify-content', 'flex-end', {
        media: `(min-width:${Breakpoint.desktop})`,
      });
    });
  });

  describe('valign', () => {
    it('should render correctly when default', () => {
      const element = mount(<Grid />);
      expect(element).toHaveStyleRule('align-items', undefined);
    });

    it('should render correctly when top', () => {
      const element = mount(<Grid valign="top" />);
      expect(element).toHaveStyleRule('align-items', 'flex-start');
    });

    it('should render correctly when center', () => {
      const element = mount(<Grid valign="center" />);
      expect(element).toHaveStyleRule('align-items', 'center');
    });

    it('should render correctly when bottom', () => {
      const element = mount(<Grid valign="bottom" />);
      expect(element).toHaveStyleRule('align-items', 'flex-end');
    });

    it('should render correctly when stretch', () => {
      const element = mount(<Grid valign="stretch" />);
      expect(element).toHaveStyleRule('align-items', 'stretch');
    });

    it('should render correctly across breakpoints', () => {
      const element = mount(<Grid valign={{ mobile: 'top', tablet: 'center', desktop: 'bottom' }} />);
      expect(element).toHaveStyleRule('align-items', 'flex-start', {
        media: `(min-width:${Breakpoint.mobile})`,
      });
      expect(element).toHaveStyleRule('align-items', 'center', {
        media: `(min-width:${Breakpoint.tablet})`,
      });
      expect(element).toHaveStyleRule('align-items', 'flex-end', {
        media: `(min-width:${Breakpoint.desktop})`,
      });
    });
  });

  describe('reverse', () => {
    it('should render correctly when default', () => {
      const element = mount(<Grid />);
      expect(element).toHaveStyleRule('flex-direction', undefined);
    });

    it('should render correctly when true', () => {
      const element = mount(<Grid reverse={true} />);
      expect(element).toHaveStyleRule('flex-direction', 'row-reverse');
    });

    it('should render correctly when false', () => {
      const element = mount(<Grid reverse={false} />);
      expect(element).toHaveStyleRule('flex-direction', 'row');
    });

    it('should render correctly across breakpoints', () => {
      const element = mount(<Grid reverse={{ mobile: true, tablet: false, desktop: true }} />);
      expect(element).toHaveStyleRule('flex-direction', 'row-reverse', {
        media: `(min-width:${Breakpoint.mobile})`,
      });
      expect(element).toHaveStyleRule('flex-direction', 'row', {
        media: `(min-width:${Breakpoint.tablet})`,
      });
      expect(element).toHaveStyleRule('flex-direction', 'row-reverse', {
        media: `(min-width:${Breakpoint.desktop})`,
      });
    });
  });

  describe('wrap', () => {
    it('should render correctly when default ', () => {
      const element = mount(<Grid />);
      expect(element).toHaveStyleRule('flex-wrap', 'wrap');
    });

    it('should render correctly when true and not reversed', () => {
      const element = mount(<Grid wrap={true} reverse={false} />);
      expect(element).toHaveStyleRule('flex-wrap', 'wrap');
    });

    it('should render correctly when false and not reversed', () => {
      const element = mount(<Grid wrap={false} reverse={false} />);
      expect(element).toHaveStyleRule('flex-wrap', 'nowrap');
    });

    it('should render correctly when true and reversed', () => {
      const element = mount(<Grid wrap={true} reverse={true} />);
      expect(element).toHaveStyleRule('flex-wrap', 'wrap-reverse');
    });

    it('should render correctly when false and reversed', () => {
      const element = mount(<Grid wrap={false} reverse={true} />);
      expect(element).toHaveStyleRule('flex-wrap', 'nowrap');
    });

    it('should render correctly when true and reversed with breakpoints', () => {
      const element = mount(<Grid wrap={{ lg: true }} reverse={{ lg: true }} />);
      expect(element).toHaveStyleRule('flex-wrap', 'wrap-reverse');
    });

    it('should render correctly across breakpoints', () => {
      const element = mount(<Grid wrap={{ mobile: true, tablet: false, desktop: true }} />);
      expect(element).toHaveStyleRule('flex-wrap', 'wrap', {
        media: `(min-width:${Breakpoint.mobile})`,
      });
      expect(element).toHaveStyleRule('flex-wrap', 'nowrap', {
        media: `(min-width:${Breakpoint.tablet})`,
      });
      expect(element).toHaveStyleRule('flex-wrap', 'wrap', {
        media: `(min-width:${Breakpoint.desktop})`,
      });
    });
  });
});
