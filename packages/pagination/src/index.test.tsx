import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import Pagination from './index';
import { Wrapper, ChevronLeftIcon, ChevronRightIcon, ButtonWrapper, IconButtonWrapper } from './index.style';

let element: any;
const handleChange = jest.fn();
const handleClick = jest.fn();

const render = (props: any) => {
  element = mount(
    <Theme>
      <Pagination totalPages={10} visiblePages={7} {...props} />
    </Theme>
  );
};

describe('pagination', () => {
  it('it should render the whole Pagination component', () => {
    const currentPage = 1;
    render({ currentPage, handleChange, handleClick });
    expect(element.find(Pagination)).toHaveLength(1);
    expect(element.find(Wrapper)).toHaveLength(1);
  });

  it('it should render ChevronLeftIcon and ChevronRightIcon', () => {
    const currentPage = 1;
    render({ currentPage, handleChange, handleClick });
    expect(element.find(IconButtonWrapper)).toHaveLength(2);
    expect(element.find(ChevronLeftIcon)).toHaveLength(1);
    expect(element.find(ChevronRightIcon)).toHaveLength(1);
  });

  it('it should render ChevronLeftIcon and ChevronRightIcon', () => {
    const currentPage = 1;
    render({ currentPage, handleChange, handleClick });
    expect(element.find(ButtonWrapper)).toHaveLength(7);
  });

  it('it should send console.warn message if currentPage is greater than totalPages', () => {
    const currentPage = 11;
    console.warn = jest.fn();
    render({ currentPage, handleChange, handleClick });
    expect(console.warn).toBeCalled();
  });

  it('it should send console.warn message if currentPage is less than 1', () => {
    const currentPage = 0;
    console.warn = jest.fn();
    render({ currentPage, handleChange, handleClick });
    expect(console.warn).toBeCalled();
  });

  it('it should call handleChange function when clicking IconButtonWrapper', () => {
    const currentPage = 1;
    render({ currentPage, handleChange, handleClick });
    element.find(IconButtonWrapper).forEach((SingleIconButtonWrapper) => SingleIconButtonWrapper.simulate('click'));
    expect(handleChange).toBeCalled();
  });

  it('it should call handleChange function when clicking ButtonWrapper', () => {
    const currentPage = 1;
    render({ currentPage, handleChange, handleClick });
    element
      .find(ButtonWrapper)
      .at(0)
      .forEach((SingleButtonWrapper) => SingleButtonWrapper.simulate('click'));
    expect(handleClick).toBeCalled();
  });
});