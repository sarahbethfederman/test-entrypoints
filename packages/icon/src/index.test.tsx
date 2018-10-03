import * as React from 'react';
import { mount } from 'enzyme';
import styled from 'styled-components';
import * as Icon from '.';
import Theme from '@lendi-ui/theme';
import { NameOrNameMap } from '@lendi-ui/color';

let element;

function render({ Component, ...props }) {
  element = mount(
    <Theme>
      <Component {...props} />
    </Theme>
  );
}

interface IconProps {
  color: NameOrNameMap;
  width?: string;
  height?: string;
}

describe('Icon component', () => {
  Object.keys(Icon).map((component) => {
    it(`should fetch ${component} icon correctly`, () => {
      const Component: React.SFC<IconProps> = (Icon as any)[component] as React.SFC<IconProps>;
      render({ Component, color: 'primary.500' });
      expect(element).toMatchSnapshot();
    });
  });
});
