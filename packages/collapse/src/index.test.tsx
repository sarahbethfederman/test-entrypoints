import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import Collapse, { CollapseProps } from '.';
import { CollapseBody, CollapseFooter, CollapsePanel, Wrapper } from './index.style';

const getFooterContent = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'space-evenly',
      }}
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  );
};

let wrapper;
let collapseProps: CollapseProps;
function render(props: CollapseProps) {
  wrapper = mount(
    <Theme>
      <Collapse {...props}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </Collapse>
    </Theme>
  );
  collapseProps = wrapper.find(Collapse).props();
}

describe('Collapse', () => {
  it('render component', () => {
    render({ title: 'testing' });
    expect(wrapper.find(Collapse)).toHaveLength(1);
    expect(wrapper.find(CollapseBody)).toHaveLength(1);
    expect(wrapper.find(CollapsePanel)).toHaveLength(1);
  });
  describe('asserts all props', () => {
    beforeEach(() => {
      render({
        title: 'testing',
        isExpanded: true,
        onClick: jest.fn(),
        subTitle: 'the subtitle',
        footer: getFooterContent(),
        headerSize: 'sm',
      });
    });
    it('should assert title', () => {
      const { title } = collapseProps;
      expect(title).toBeDefined();
    });
    it('should assert subTitle', () => {
      const { subTitle } = collapseProps;
      expect(subTitle).toBeDefined();
    });
    it('should assert onClick', () => {
      const { onClick } = collapseProps;
      expect(onClick).toBeDefined();
    });
    it('should assert footer', () => {
      const { footer } = collapseProps;
      expect(footer).toBeDefined();
    });
    it('should assert expanded', () => {
      const { isExpanded } = collapseProps;
      expect(isExpanded).toBeDefined();
    });
    it('should assert headerSize', () => {
      const { headerSize } = collapseProps;
      expect(headerSize).toBeDefined();
    });
  });
  describe('test onclick handler', () => {
    const mockOnClick = jest.fn();
    beforeEach(() => {
      render({ title: 'testing', onClick: mockOnClick });
      expect(wrapper.find(Collapse).instance().state.isExpanded).toBeFalsy();
      wrapper.find(CollapsePanel).simulate('click');
    });
    it('assert onclick call', () => {
      expect(mockOnClick.mock.calls.length).toBe(1);
    });
    it('should change the local collape state on panel click', () => {
      expect(wrapper.find(Collapse).instance().state.isExpanded).toBeTruthy();
    });
  });
  describe('test collapse and expanded state of the Collapse', () => {
    describe('when it is collapse', () => {
      beforeEach(() => {
        render({ title: 'testing', isExpanded: false });
      });
      it('height of the collapse body should be 0', () => {
        expect(wrapper.find(CollapseBody)).toHaveStyleRule('height', '0');
      });
      it('border of the collapse body should be hidden', () => {
        render({ title: 'testing', isExpanded: false });
        expect(wrapper.find(CollapseBody)).toHaveStyleRule('border', 'hidden');
      });
    });

    describe('when it is expanded', () => {
      beforeEach(() => {
        render({ title: 'testing', isExpanded: true });
      });
      it('height of the collapse body should be auto', () => {
        expect(wrapper.find(CollapseBody)).toHaveStyleRule('height', 'auto');
      });
      it('border of the collapse body should have some style', () => {
        expect(wrapper.find(CollapseBody)).toHaveStyleRule('border', '1px solid #e3e3e3');
      });
    });
  });
  describe('test conditional rendering of footer', () => {
    it('when footer is given', () => {
      render({ title: 'testing', footer: getFooterContent() });
      expect(wrapper.find(CollapseFooter)).toHaveLength(1);
    });
    it('when footer is NOT given', () => {
      render({ title: 'testing' });
      expect(wrapper.find(CollapseFooter)).toHaveLength(0);
    });
  });
  describe('test the supply of an external className', () => {
    it('render with external className', () => {
      render({ title: 'testing', className: 'myClassName' });
      expect(wrapper.find(Wrapper).props().className).toBeDefined();
    });
    it('render without external className', () => {
      render({ title: 'testing' });
      expect(wrapper.find(Wrapper).props().className).toBeUndefined();
    });
  });
  describe('test native props and Standard HTML Attributes', () => {
    it('should mount with Aria attributes', () => {
      const ARIA_LABEL = 'testLabel';
      const ARIA_DESCRIBE_BY = 'info';
      render({ title: 'testing', 'aria-label': ARIA_LABEL, 'aria-describedby': ARIA_DESCRIBE_BY });
      const collapseAttributes = wrapper.find(Wrapper).props();
      expect(collapseAttributes['aria-label']).toBe(ARIA_LABEL);
      expect(collapseAttributes['aria-describedby']).toBe(ARIA_DESCRIBE_BY);
    });
    it('should mount with native props like id, tabIndex', () => {
      const TEXT_ID = 'testId';
      render({
        title: 'testing',
        id: TEXT_ID,
        tabIndex: 1,
      });
      const collapseAttributes = wrapper.find(Wrapper).props();
      expect(collapseAttributes.id).toBe(TEXT_ID);
      expect(collapseAttributes.tabIndex).toBe(1);
    });
  });
});
