import * as React from 'react';
import { mount } from 'enzyme';
import * as Icon from '.';
import Theme from '@lendi-ui/theme';
import { NameOrNameMap, color } from '@lendi-ui/color';

function render({ Component, ...props }) {
  return mount(
    <Theme>
      <Component {...props} />
    </Theme>
  );
}

interface IconProps {
  color: NameOrNameMap;
  width?: string;
  height?: string;
  className?: string;
}

describe('Icon component', () => {
  Object.keys(Icon).map((component) => {
    describe(component, () => {
      it('should fetch icon correctly', () => {
        const Component: React.FunctionComponent<IconProps> = (Icon as any)[component] as React.FunctionComponent<
          IconProps
        >;
        const element = render({ Component, color: 'primary.500' });
        expect(element.find(Component).prop('color')).toEqual('primary.500');
      });

      it('should accept a className', () => {
        const Component: React.FunctionComponent<IconProps> = (Icon as any)[component] as React.FunctionComponent<
          IconProps
        >;
        const wrapper = render({ Component, color: 'primary.500', className: 'some-class' });
        expect(wrapper.find(Component).hasClass('some-class')).toBe(true);
      });
    });
  });
});
