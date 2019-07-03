import * as React from 'react';
import { shallow } from 'enzyme';
import { Group } from './Group/index';
import { Item } from './Item/index';
import { Section } from './Section/index';
import { SidebarNav } from './index';
import { Wrapper } from './index.style';

describe('Group', () => {
  it('should mount', () => {
    const nav = shallow(
      <SidebarNav labelText="Primary navigation">
        <Section>
          <Group title="A">
            <Item>A.1</Item>
          </Group>
          <Item>B</Item>
          <Item>C</Item>
        </Section>
      </SidebarNav>
    );
    expect(nav).toMatchSnapshot();
    expect(nav.find(Wrapper)).toHaveLength(1);
  });

  it('should specify role when label is defined', () => {
    const nav = shallow(
      <SidebarNav labelText="Primary navigation">
        <Section>
          <Group title="A">
            <Item>A.1</Item>
          </Group>
          <Item>B</Item>
          <Item>C</Item>
        </Section>
      </SidebarNav>
    );
    expect(nav.find('[role]').exists()).toEqual(true);
  });
});
