import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Theme from '@lendi-ui/theme';
import Overlay from '@lendi-ui/overlay';
import Transition from '@lendi-ui/transition';

import { Wrapper, SidebarContent, SidebarFooter } from './index.style';
import Sidebar, { SidebarProps } from './index';

let element: ReactWrapper<SidebarProps>;

const render = ({ ...props }: SidebarProps) => {
  element = mount(
    <Theme>
      <Sidebar isVisible={true} {...props} />
    </Theme>
  );
};

const renderWithChildren = ({ ...props }: SidebarProps) => {
  element = mount(
    <Theme>
      <Sidebar isVisible={true} {...props}>
        <Sidebar.Content>content</Sidebar.Content>
        <Sidebar.Footer>footer</Sidebar.Footer>
      </Sidebar>
    </Theme>
  );
};

describe('Sidebar', () => {
  beforeEach(() => {
    render({});
  });

  it('should render <Sidebar />', () => {
    expect(element.find(Sidebar)).toHaveLength(1);
    expect(element.find(Sidebar)).toMatchSnapshot();
  });

  it('should render <Overlay />', () => {
    expect(element.find(Overlay)).toHaveLength(1);
  });

  it('should render <Transition />', () => {
    expect(element.find(Transition)).toHaveLength(2);
  });

  it('should render <Wrapper />', () => {
    expect(element.find(Wrapper)).toHaveLength(1);
  });

  it("should render <Wrapper /> with style 'left:0'", () => {
    expect(element.find(Wrapper)).toHaveStyleRule('left', '0');
  });
});

describe('Sidebar with children', () => {
  beforeEach(() => {
    renderWithChildren({});
  });

  it('should render <SidebarContent />', () => {
    expect(element.find(SidebarContent)).toHaveLength(1);
  });

  it('should render <SidebarFooter />', () => {
    expect(element.find(SidebarFooter)).toHaveLength(1);
  });
});
