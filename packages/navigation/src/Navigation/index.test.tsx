import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { Navigation } from './index';
import { Wrapper } from './index.style';

let element: any;

describe('Navigation', () => {
  beforeEach(() => {
    element = mount(
      <Theme>
        <Navigation width="376px" />
      </Theme>
    );
  });

  it('should mount', () => {
    expect(element.find(Navigation)).toHaveLength(1);
    expect(element.find(Wrapper)).toHaveLength(1);
  });
});
