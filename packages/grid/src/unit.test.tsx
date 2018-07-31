import * as React from 'react';
import styled from 'styled-components';
import { shallow } from 'enzyme';
import { unit } from '.';

const breakpoints = {
  mobile: '0',
  tablet: '40em',
  desktop: '80em',
};

const theme = {
  breakpoints,
};

describe('unit()', () => {
  const Unit = styled.div`
    ${unit};
  `;

  describe('size', () => {
    it('should render correctly when default', () => {
      const element = shallow(<Unit />);
      expect(element).toHaveStyleRule('max-width', '100%');
    });

    it('should render correctly when 1/1', () => {
      const element = shallow(<Unit size={1} />);
      expect(element).toHaveStyleRule('max-width', '100%');
    });

    it('should render correctly when 1/2', () => {
      const element = shallow(<Unit size={1 / 2} />);
      expect(element).toHaveStyleRule('max-width', '50%');
    });

    it('should render correctly when 1/3', () => {
      const element = shallow(<Unit size={1 / 3} />);
      expect(element).toHaveStyleRule('max-width', '33.3333%');
    });

    it('should render correctly when 1/4', () => {
      const element = shallow(<Unit size={1 / 4} />);
      expect(element).toHaveStyleRule('max-width', '25%');
    });

    it('should render correctly when 1/5', () => {
      const element = shallow(<Unit size={1 / 5} />);
      expect(element).toHaveStyleRule('max-width', '20%');
    });

    it('should render correctly across breakpoints', () => {
      const element = shallow(<Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 4 }} theme={theme} />);
      expect(element).toHaveStyleRule('max-width', '100%', {
        media: `(min-width:${breakpoints.mobile})`,
      });
      expect(element).toHaveStyleRule('max-width', '50%', {
        media: `(min-width:${breakpoints.tablet})`,
      });
      expect(element).toHaveStyleRule('max-width', '25%', {
        media: `(min-width:${breakpoints.desktop})`,
      });
    });
  });

  describe('visible', () => {
    it('should render correctly when default', () => {
      const element = shallow(<Unit />);
      expect(element).not.toHaveStyleRule('display');
    });

    it('should render correctly when true', () => {
      const element = shallow(<Unit visible={true} />);
      expect(element).toHaveStyleRule('display', 'flex');
    });

    it('should render correctly when false', () => {
      const element = shallow(<Unit visible={false} />);
      expect(element).toHaveStyleRule('display', 'none');
    });

    it('should render correctly across breakpoints', () => {
      const element = shallow(<Unit visible={{ mobile: true, tablet: false, desktop: true }} theme={theme} />);
      expect(element).toHaveStyleRule('display', 'flex', {
        media: `(min-width:${breakpoints.mobile})`,
      });
      expect(element).toHaveStyleRule('display', 'none', {
        media: `(min-width:${breakpoints.tablet})`,
      });
      expect(element).toHaveStyleRule('display', 'flex', {
        media: `(min-width:${breakpoints.desktop})`,
      });
    });
  });
});
