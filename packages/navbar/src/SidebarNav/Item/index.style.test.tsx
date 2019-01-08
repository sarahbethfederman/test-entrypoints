import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { Link, Button } from './index.style';

const components = [Link, Button];

components.forEach((Component) => {
  describe(`${Component.displayName}`, () => {
    it('should render larger when depth=0', () => {
      const toggle = mount(
        <Theme>
          <Component depth={0} />
        </Theme>
      );
      expect(toggle.find(Component)).toHaveStyleRule('height', '3rem');
    });
    it('should render smaller when depth=1', () => {
      const toggle = mount(
        <Theme>
          <Component depth={1} />
        </Theme>
      );
      expect(toggle.find(Component)).toHaveStyleRule('height', '2.5rem');
    });
  });
});
