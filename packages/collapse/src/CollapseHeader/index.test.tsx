import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { CollapseHeaderSectionProps } from '.';
import CollapseHeaderSection from '.';

let wrapper;
let collapseHeaderSectionProps: CollapseHeaderSectionProps;
function render(props: CollapseHeaderSectionProps) {
  wrapper = mount(
    <Theme>
      <CollapseHeaderSection {...props} />
    </Theme>
  );
  collapseHeaderSectionProps = wrapper.find(CollapseHeaderSection).props();
}

describe('CollapseHeader', () => {
  it('render component', () => {
    render({
      title: 'testing',
      isOpen: true,
      subTitle: 'the subtitle',
      headerSize: 'xs',
    });
    expect(wrapper.find(CollapseHeaderSection)).toHaveLength(1);
  });
  describe('asserts all props', () => {
    beforeEach(() => {
      render({
        title: 'testing',
        isOpen: true,
        subTitle: 'the subtitle',
        headerSize: 'xs',
      });
    });
    it('should assert title', () => {
      const { title } = collapseHeaderSectionProps;
      expect(title).toBeDefined();
    });
    it('should assert subTitle', () => {
      const { subTitle } = collapseHeaderSectionProps;
      expect(subTitle).toBeDefined();
    });
    it('should assert isOpen', () => {
      const { isOpen } = collapseHeaderSectionProps;
      expect(isOpen).toBeDefined();
    });
  });
});
