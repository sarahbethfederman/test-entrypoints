import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { MenuToggle, MenuContent } from './index.style';

describe('MenuToggle', () => {
  it('should render normal chevron when collapsed', () => {
    const toggle = mount(
      <Theme>
        <MenuToggle isExpanded={false} />
      </Theme>
    );
    expect(toggle.find(MenuToggle)).not.toHaveStyleRule('transform', 'rotate(-180deg)', { modifier: 'svg' });
  });

  it('should render rotated chevron when expanded', () => {
    const toggle = mount(
      <Theme>
        <MenuToggle isExpanded={true} />
      </Theme>
    );
    expect(toggle.find(MenuToggle)).toHaveStyleRule('transform', 'rotate(-180deg)', { modifier: 'svg' });
  });
});

describe('MenuContent', () => {
  it('should not render the items when collapsed', () => {
    const toggle = mount(
      <Theme>
        <MenuContent isExpanded={false} />
      </Theme>
    );
    expect(toggle.find(MenuContent)).toHaveStyleRule('max-height', '0');
  });

  it('should render the items when expanded', () => {
    const toggle = mount(
      <Theme>
        <MenuContent isExpanded={true} />
      </Theme>
    );
    expect(toggle.find(MenuContent)).toHaveStyleRule('max-height', '20em');
  });
});
