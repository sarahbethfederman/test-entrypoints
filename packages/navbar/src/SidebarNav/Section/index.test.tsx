import * as React from 'react';
import { shallow } from 'enzyme';
import { Group } from '../Group/index';
import { Item } from '../Item/index';
import { Section } from './index';
import { Title } from './index.style';

describe('Group', () => {
  it('should render the title when the title is defined', () => {
    const section = shallow(
      <Section title="Your financials">
        <Group title="A">
          <Item>A.1</Item>
        </Group>
        <Item>B</Item>
        <Item>C</Item>
      </Section>
    );
    expect(section.contains(<Title>Your financials</Title>)).toBeTruthy();
  });

  it('should not render the title when the title is undefined', () => {
    const section = shallow(
      <Section>
        <Group title="A">
          <Item>A.1</Item>
        </Group>
        <Item>B</Item>
        <Item>C</Item>
      </Section>
    );
    expect(section.contains(<Title>Your financials</Title>)).toBeFalsy();
  });
});
