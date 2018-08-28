import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';
import Carousel from '.';
import { Slide, Indicator } from './index.style';

const slides = ['slide1', 'slide2'];

describe('<Carousel />', () => {
  let wrapper: ReactWrapper<Carousel>;

  beforeEach(() => {
    wrapper = mount(
      <Carousel>
        {slides.map((slide, index) => (
          <div key={index} className=".slide">
            {slide}
          </div>
        ))}
      </Carousel>
    );
    jest.useFakeTimers();
  });

  it('should render a slide for each child', () => {
    expect(wrapper.find(Slide).length).toEqual(slides.length);
  });

  it('should render an indicator for each slide', () => {
    expect(wrapper.find(Indicator).length).toEqual(slides.length);
  });

  it('should go to the next slide after the specified duration elapsed', () => {
    jest.runAllTimers();
    wrapper.update();

    const nodes = wrapper.find(Slide);
    expect(nodes.first().prop('isActive')).toBeFalsy();
    expect(nodes.last().prop('isActive')).toBeTruthy();
  });

  it('should repeat when the last slide duration elapsed', () => {
    jest.runAllTimers();
    jest.runAllTimers();
    wrapper.update();

    const nodes = wrapper.find(Slide);
    expect(nodes.first().prop('isActive')).toBeFalsy();
    expect(nodes.last().prop('isActive')).toBeTruthy();
  });

  it('should go to the first slide when an indicator is clicked', () => {
    wrapper
      .find(Indicator)
      .first()
      .simulate('click');

    wrapper.update();

    const nodes = wrapper.find(Slide);
    expect(nodes.first().prop('isActive')).toBeTruthy();
    expect(nodes.last().prop('isActive')).toBeFalsy();
  });

  it('should go to the last slide when an indicator is clicked', () => {
    wrapper
      .find(Indicator)
      .last()
      .simulate('click');

    wrapper.update();

    const nodes = wrapper.find(Slide);
    expect(nodes.first().prop('isActive')).toBeFalsy();
    expect(nodes.last().prop('isActive')).toBeTruthy();
  });
});
