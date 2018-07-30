import * as React from 'react';
import styled from 'styled-components';
import { shallow } from 'enzyme';
import { grid } from '.';

const breakpoints = {
  mobile: '0',
  tablet: '40em',
  desktop: '80em',
};

const theme = {
  breakpoints,
};

describe('grid()', () => {
  const Grid = styled.div`
    ${grid};
  `;

  describe('halign', () => {
    it('should render correctly when default', () => {
      const element = shallow(<Grid />);
      expect(element).not.toHaveStyleRule('justify-content');
    });

    it('should render correctly when left', () => {
      const element = shallow(<Grid halign="left" />);
      expect(element).toHaveStyleRule('justify-content', 'flex-start');
    });

    it('should render correctly when center', () => {
      const element = shallow(<Grid halign="center" />);
      expect(element).toHaveStyleRule('justify-content', 'center');
    });

    it('should render correctly when right', () => {
      const element = shallow(<Grid halign="right" />);
      expect(element).toHaveStyleRule('justify-content', 'flex-end');
    });

    it('should render correctly when justify', () => {
      const element = shallow(<Grid halign="justify" />);
      expect(element).toHaveStyleRule('justify-content', 'space-between');
    });

    it('should render correctly when justify-center', () => {
      const element = shallow(<Grid halign="justify-center" />);
      expect(element).toHaveStyleRule('justify-content', 'space-around');
    });

    it('should render correctly across breakpoints', () => {
      const element = shallow(<Grid halign={{ mobile: 'left', tablet: 'center', desktop: 'right' }} theme={theme} />);
      expect(element).toHaveStyleRule('justify-content', 'flex-start', {
        media: `(min-width:${breakpoints.mobile})`,
      });
      expect(element).toHaveStyleRule('justify-content', 'center', {
        media: `(min-width:${breakpoints.tablet})`,
      });
      expect(element).toHaveStyleRule('justify-content', 'flex-end', {
        media: `(min-width:${breakpoints.desktop})`,
      });
    });
  });

  describe('valign', () => {
    it('should render correctly when default', () => {
      const element = shallow(<Grid />);
      expect(element).not.toHaveStyleRule('align-items');
    });

    it('should render correctly when top', () => {
      const element = shallow(<Grid valign="top" />);
      expect(element).toHaveStyleRule('align-items', 'flex-start');
    });

    it('should render correctly when center', () => {
      const element = shallow(<Grid valign="center" />);
      expect(element).toHaveStyleRule('align-items', 'center');
    });

    it('should render correctly when bottom', () => {
      const element = shallow(<Grid valign="bottom" />);
      expect(element).toHaveStyleRule('align-items', 'flex-end');
    });

    it('should render correctly when stretch', () => {
      const element = shallow(<Grid valign="stretch" />);
      expect(element).toHaveStyleRule('align-items', 'stretch');
    });

    it('should render correctly across breakpoints', () => {
      const element = shallow(<Grid valign={{ mobile: 'top', tablet: 'center', desktop: 'bottom' }} theme={theme} />);
      expect(element).toHaveStyleRule('align-items', 'flex-start', {
        media: `(min-width:${breakpoints.mobile})`,
      });
      expect(element).toHaveStyleRule('align-items', 'center', {
        media: `(min-width:${breakpoints.tablet})`,
      });
      expect(element).toHaveStyleRule('align-items', 'flex-end', {
        media: `(min-width:${breakpoints.desktop})`,
      });
    });
  });

  describe('reverse', () => {
    it('should render correctly when default', () => {
      const element = shallow(<Grid />);
      expect(element).not.toHaveStyleRule('flex-direction');
    });

    it('should render correctly when true', () => {
      const element = shallow(<Grid reverse={true} />);
      expect(element).toHaveStyleRule('flex-direction', 'row-reverse');
    });

    it('should render correctly when false', () => {
      const element = shallow(<Grid reverse={false} />);
      expect(element).toHaveStyleRule('flex-direction', 'row');
    });

    it('should render correctly across breakpoints', () => {
      const element = shallow(<Grid reverse={{ mobile: true, tablet: false, desktop: true }} theme={theme} />);
      expect(element).toHaveStyleRule('flex-direction', 'row-reverse', {
        media: `(min-width:${breakpoints.mobile})`,
      });
      expect(element).toHaveStyleRule('flex-direction', 'row', {
        media: `(min-width:${breakpoints.tablet})`,
      });
      expect(element).toHaveStyleRule('flex-direction', 'row-reverse', {
        media: `(min-width:${breakpoints.desktop})`,
      });
    });
  });

  describe('wrap', () => {
    it('should render correctly when default ', () => {
      const element = shallow(<Grid />);
      expect(element).not.toHaveStyleRule('flex-wrap');
    });

    it('should render correctly when true and not reversed', () => {
      const element = shallow(<Grid wrap={true} reverse={false} />);
      expect(element).toHaveStyleRule('flex-wrap', 'wrap');
    });

    it('should render correctly when false and not reversed', () => {
      const element = shallow(<Grid wrap={false} reverse={false} />);
      expect(element).toHaveStyleRule('flex-wrap', 'nowrap');
    });

    it('should render correctly when true and reversed', () => {
      const element = shallow(<Grid wrap={true} reverse={true} />);
      expect(element).toHaveStyleRule('flex-wrap', 'wrap-reverse');
    });

    it('should render correctly when false and reversed', () => {
      const element = shallow(<Grid wrap={false} reverse={true} />);
      expect(element).toHaveStyleRule('flex-wrap', 'nowrap');
    });

    it('should render correctly across breakpoints', () => {
      const element = shallow(<Grid wrap={{ mobile: true, tablet: false, desktop: true }} theme={theme} />);
      expect(element).toHaveStyleRule('flex-wrap', 'wrap', {
        media: `(min-width:${breakpoints.mobile})`,
      });
      expect(element).toHaveStyleRule('flex-wrap', 'nowrap', {
        media: `(min-width:${breakpoints.tablet})`,
      });
      expect(element).toHaveStyleRule('flex-wrap', 'wrap', {
        media: `(min-width:${breakpoints.desktop})`,
      });
    });
  });
});
