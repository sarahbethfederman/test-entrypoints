import * as React from 'react';
import { mount } from 'enzyme';
import * as FancyIcon from '.';

function render({ Component, ...props }) {
  return mount(<Component {...props} />);
}

interface FancyIconProps {
  width?: string;
  height?: string;
  className?: string;
}

describe('Icon component', () => {
  Object.keys(FancyIcon).map((component) => {
    describe(component, () => {
      it('should fetch icon correctly', () => {
        const Component: React.SFC<FancyIconProps> = (FancyIcon as any)[component] as React.SFC<FancyIconProps>;
        const element = render({ Component });
        expect(element.find(Component)).toMatchSnapshot();
      });

      it('should accept a className', () => {
        const Component: React.SFC<FancyIconProps> = (FancyIcon as any)[component] as React.SFC<FancyIconProps>;
        const wrapper = render({ Component, className: 'some-class' });
        expect(wrapper.find(Component).hasClass('some-class')).toBe(true);
      });
    });
  });
});
