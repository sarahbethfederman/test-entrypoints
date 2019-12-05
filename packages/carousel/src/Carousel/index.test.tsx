jest.mock('@lendi-ui/breakpoint');

import * as React from 'react';
import { cleanup, render, fireEvent, getByTestId } from '@testing-library/react';
import Theme from '@lendi-ui/theme';
import Carousel from '.';
import { CarouselProps } from '../types';
import { useCarouselContext } from './CarouselContext';

let currentIndex = null;

const slides = ['slide one', 'slide two', 'slide three', 'slide four', 'slide five'];

interface TestSlideProps {
  index: number;
}

const Slide: React.FunctionComponent<TestSlideProps> = ({ children, index }) => {
  const context = useCarouselContext();
  if (index === 0) currentIndex = context.currentIndex;

  return (
    <div style={{ width: '50%' }} data-testid={`slide_${index}`}>
      {children}
    </div>
  );
};

const CustomComponent: React.FunctionComponent = ({ children }) => {
  const { currentIndex, nextSlide, previousSlide, setSlide } = useCarouselContext();

  return (
    <>
      <div>{children}</div>

      <div>Current index is: {currentIndex}</div>

      <div>
        <a data-testid="custom-previous-button" onClick={() => previousSlide()} />
        <a data-testid="custom-set-button" onClick={() => setSlide(3)} />
        <a data-testid="custom-next-button" onClick={() => nextSlide()} />
      </div>
    </>
  );
};

const addSlides = () =>
  slides.map((slide, i) => (
    <Slide key={i} index={i}>
      {slide}
    </Slide>
  ));

const SimpleCarousel = (props: CarouselProps) => (
  <Theme>
    <Carousel {...props}>{addSlides()}</Carousel>
  </Theme>
);

const CompoundCarousel: React.FunctionComponent<CarouselProps> = ({ withArrows, withDots, ...rest }) => (
  <Theme>
    <Carousel {...rest}>
      <Carousel.Slides>{addSlides()}</Carousel.Slides>

      {withArrows && (
        <>
          <Carousel.PreviousArrow />
          <Carousel.NextArrow />
        </>
      )}

      <CustomComponent data-testid="custom-component">This is a custom component.</CustomComponent>

      {withDots && <Carousel.Dots />}
    </Carousel>
  </Theme>
);

describe.each([SimpleCarousel, CompoundCarousel])('%p', (TestCarousel) => {
  afterEach(() => {
    cleanup();
    currentIndex = null;
  });

  describe('Slides functionality', () => {
    it('should render a slide for each child', () => {
      const { getAllByText } = render(<TestCarousel />);

      expect(getAllByText(/slide/).length).toEqual(5);
    });

    it('should start on zero index', () => {
      render(<TestCarousel />);

      expect(currentIndex).toEqual(0);
    });

    it('should start on the specified index', () => {
      render(<TestCarousel initialIndex={2} />);

      expect(currentIndex).toEqual(2);
    });
  });

  describe('Chevron functionality', () => {
    it('should not render chevrons', () => {
      const { queryAllByTestId } = render(<TestCarousel />);

      expect(queryAllByTestId(/arrow$/).length).toEqual(0);
    });

    it('should render previous and next chevrons', () => {
      const { getAllByTestId } = render(<TestCarousel withArrows />);

      expect(getAllByTestId(/arrow$/).length).toEqual(2);
    });

    it('should go to next slide when you click nextArrow', () => {
      const { getByTestId } = render(<TestCarousel withArrows />);

      fireEvent.click(getByTestId('next-arrow'));

      expect(currentIndex).toEqual(1);
    });

    it('should not go to next slide if at end of slides and carousel is linear', () => {
      const { getByTestId } = render(<TestCarousel withArrows initialIndex={4} />);

      fireEvent.click(getByTestId('next-arrow'));

      expect(currentIndex).toEqual(4);
    });

    it('should go to the first slide if at end of slides and carousel is infinite', () => {
      const { getByTestId } = render(<TestCarousel withArrows infinite initialIndex={4} />);

      fireEvent.click(getByTestId('next-arrow'));

      expect(currentIndex).toEqual(0);
    });

    it('should jump forward number of slides based on increment', () => {
      const { getByTestId } = render(<TestCarousel withArrows increment={2} />);

      fireEvent.click(getByTestId('next-arrow'));

      expect(currentIndex).toEqual(2);
    });

    it('should not jump forward if leftover slides < increment on linear', () => {
      const { getByTestId } = render(<TestCarousel withArrows initialIndex={3} increment={2} />);

      fireEvent.click(getByTestId('next-arrow'));

      expect(currentIndex).toEqual(3);
    });

    it('should continue count from beginning if leftover slides < increment on infinite', () => {
      const { getByTestId } = render(<TestCarousel withArrows infinite initialIndex={4} increment={3} />);

      fireEvent.click(getByTestId('next-arrow'));

      expect(currentIndex).toEqual(2);
    });

    it('should go to previous slide when you click previousArrow', () => {
      const { getByTestId } = render(<TestCarousel withArrows initialIndex={2} />);

      fireEvent.click(getByTestId('previous-arrow'));

      expect(currentIndex).toEqual(1);
    });

    it('should not go to the previous slide if at beginning of slides and carousel is linear', () => {
      const { getByTestId } = render(<TestCarousel withArrows />);

      fireEvent.click(getByTestId('previous-arrow'));

      expect(currentIndex).toEqual(0);
    });

    it('should go to last slide if at beginning of slides and carousel is infinite', () => {
      const { getByTestId } = render(<TestCarousel withArrows infinite />);

      fireEvent.click(getByTestId('previous-arrow'));

      expect(currentIndex).toEqual(4);
    });

    it('should jump back number of slides based on increment', () => {
      const { getByTestId } = render(<TestCarousel withArrows initialIndex={2} increment={2} />);

      fireEvent.click(getByTestId('previous-arrow'));

      expect(currentIndex).toEqual(0);
    });

    it('should go back past first slide if previous slides < increment on linear', () => {
      const { getByTestId } = render(<TestCarousel withArrows initialIndex={1} increment={2} />);

      fireEvent.click(getByTestId('previous-arrow'));

      expect(currentIndex).toEqual(-1);
    });

    it('should continue count from end if previous slides < increment on infinite', () => {
      const { getByTestId } = render(<TestCarousel withArrows infinite initialIndex={1} increment={3} />);

      fireEvent.click(getByTestId('previous-arrow'));

      expect(currentIndex).toEqual(3);
    });
  });

  describe('Indicator functionality', () => {
    it('should not render an indicator', () => {
      const { queryAllByTestId } = render(<TestCarousel />);

      expect(queryAllByTestId('indicator').length).toEqual(0);
    });

    it('should render an indicator for each slide when withDots enabled', () => {
      const { getAllByTestId } = render(<TestCarousel withDots />);

      expect(getAllByTestId('indicator').length).toEqual(5);
    });

    it('should render fewer indicators based on the increment', () => {
      const { getAllByTestId } = render(<TestCarousel withDots increment={2} />);

      expect(getAllByTestId('indicator').length).toEqual(3);
    });

    it('should move to the corresponding slide when an indicator is clicked', () => {
      const { getAllByTestId } = render(<TestCarousel withDots />);

      fireEvent.click(getAllByTestId('indicator')[3]);

      expect(currentIndex).toEqual(3);
    });
  });

  describe('Autoplay functionality', () => {
    it('should not change slides if autoplay not specified', () => {
      render(<TestCarousel />);

      jest.useFakeTimers();
      jest.runTimersToTime(5000);

      expect(currentIndex).toEqual(0);
    });

    it('should go to the next slide after the default duration elapsed', () => {
      render(<TestCarousel autoplay />);

      jest.useFakeTimers();

      jest.runTimersToTime(5000);
      expect(currentIndex).toEqual(1);
    });

    it('should go to the next slide after the custom duration elapsed', () => {
      render(<TestCarousel autoplay duration={2000} />);

      jest.useFakeTimers();

      jest.runTimersToTime(2000);
      expect(currentIndex).toEqual(1);
    });

    it('should go to the first slide after viewing all slides on infinite', () => {
      render(<TestCarousel autoplay infinite initialIndex={4} />);

      jest.useFakeTimers();
      jest.runTimersToTime(5000);

      expect(currentIndex).toEqual(0);
    });

    it('should stop moving slides after viewing all slides on linear', () => {
      render(<TestCarousel autoplay initialIndex={4} />);

      jest.useFakeTimers();
      jest.runTimersToTime(5000);

      expect(currentIndex).toEqual(4);
    });
  });
});

describe('Malformed Carousel', () => {
  afterEach(() => {
    cleanup();
    currentIndex = null;
  });

  it('should throw an error if custom arrows and no slides container', () => {
    const CarouselWithCustomArrowsAndNoSlidesComponent = () => (
      <Theme>
        <Carousel>
          <Carousel.PreviousArrow />
          <Carousel.NextArrow />

          {addSlides()}
        </Carousel>
      </Theme>
    );

    expect(() => render(<CarouselWithCustomArrowsAndNoSlidesComponent />)).toThrow();
  });

  it('should throw an error if custom arrows and default arrows combined', () => {
    const CarouselWithCustomArrowsAndWithArrows = () => (
      <Theme>
        <Carousel withArrows>
          <Carousel.Slides>{addSlides()}</Carousel.Slides>

          <Carousel.PreviousArrow />
          <Carousel.NextArrow />
        </Carousel>
      </Theme>
    );

    expect(() => render(<CarouselWithCustomArrowsAndWithArrows />)).toThrow();
  });

  it('should throw an error if custom dots and no slides container', () => {
    const CarouselWithCustomDotsAndNoSlidesComponent = () => (
      <Theme>
        <Carousel>
          <Carousel.Dots />

          {addSlides()}
        </Carousel>
      </Theme>
    );

    expect(() => render(<CarouselWithCustomDotsAndNoSlidesComponent />)).toThrow();
  });

  it('should throw an error if has both custom dots and default dots', () => {
    const CarouselWithCustomDotsAndWithDots = () => (
      <Theme>
        <Carousel withDots>
          <Carousel.Slides>{addSlides()}</Carousel.Slides>

          <Carousel.Dots />
        </Carousel>
      </Theme>
    );

    expect(() => render(<CarouselWithCustomDotsAndWithDots />)).toThrow();
  });
});
