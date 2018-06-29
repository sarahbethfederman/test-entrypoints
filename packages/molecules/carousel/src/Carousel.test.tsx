import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';
import { Carousel, ICarouselState } from './Carousel';

describe('<Carousel />', () => {
  const slides = ['slide1', 'slide2'];
  let wrapper: ReactWrapper<Carousel, ICarouselState>;
  describe('when it is mounted', () => {
    beforeEach(() => {
      wrapper = mount(
        <Carousel>
          {slides.map((slide, id) => (
            <div className="slide" key={id}>
              {slide}
            </div>
          ))}
        </Carousel>
      );
      jest.useFakeTimers();
    });
    test('should be defined', () => {
      expect(wrapper).toBeDefined();
    });
    test('should render all slides', () => {
      expect(wrapper.find('.slide').length).toEqual(slides.length);
    });
    test('should render an indicator for each slide', () => {
      expect(wrapper.find('indicatorContainer span').length).toEqual(slides.length);
    });
    test('should go to the next slide after the specified duration elapsed', () => {
      const currentActiveIdx = wrapper.state().activeIdx;
      jest.runAllTimers();
      expect(wrapper.state().activeIdx).toEqual(currentActiveIdx + 1);
    });
    test('should repeat when the last slide duration elapsed', () => {
      wrapper
        .find('indicatorContainer span')
        .last()
        .simulate('click');
      wrapper.setState({ disabled: false });
      jest.runAllTimers();
      expect(wrapper.state().activeIdx).toEqual(0);
    });
    test('should go to the selected slide', () => {
      wrapper
        .find('indicatorContainer span')
        .last()
        .simulate('click');
      expect(wrapper.state().activeIdx).toEqual(slides.length - 1);
    });
  });
});
