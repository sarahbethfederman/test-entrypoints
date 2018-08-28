import * as React from 'react';
import { CarouselContainer, Indicator, IndicatorContainer, Slide } from './index.style';

export interface CarouselProps {
  children: JSX.Element[];
  width?: string;
  height?: string;
  speed?: number;
  duration?: number;
  defaultIndex?: number;
}

export interface CarouselState {
  isDisabled: boolean;
  currentIndex: number;
  previousIndex: number | null;
}

export default class Carousel extends React.Component<CarouselProps, CarouselState> {
  public static defaultProps: Partial<CarouselProps> = {
    defaultIndex: 0,
    duration: 5000,
    height: '500px',
    speed: 300,
    width: '100%',
  };

  private timer: any;

  constructor(props: CarouselProps) {
    super(props);
    this.state = {
      currentIndex: props.defaultIndex || 0,
      isDisabled: false,
      previousIndex: null,
    };

    this.timer = setTimeout(() => this.goToNextSlide(), props.duration);
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
  }
  public render() {
    const { children, height, width, speed, duration } = this.props;
    const { currentIndex, previousIndex } = this.state;
    return (
      <CarouselContainer height={height} width={width}>
        {React.Children.map(children, (child, index) => (
          <Slide
            {...{ height, width, speed, duration }}
            key={index}
            isActive={currentIndex === index}
            previousIndex={previousIndex === index}
            onTransitionEnd={this.handleTransitionEnd}
          >
            {child}
          </Slide>
        ))}
        <IndicatorContainer>
          {React.Children.map(children, (child, index) => (
            <Indicator key={index} isActive={currentIndex === index} onClick={this.goToSlide.bind(this, index)} />
          ))}
        </IndicatorContainer>
      </CarouselContainer>
    );
  }

  private goToSlide(index: number): void {
    if (this.state.isDisabled) {
      return;
    }
    if (this.state.currentIndex !== index) {
      this.setState((prevState) => ({
        isDisabled: true,
        currentIndex: index,
        previousIndex: prevState.currentIndex,
      }));
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.goToNextSlide(), this.props.duration);
    }
  }

  private goToNextSlide(): void {
    this.goToSlide((this.state.currentIndex + 1) % React.Children.count(this.props.children));
  }

  private handleTransitionEnd(): void {
    this.setState({
      isDisabled: false,
      previousIndex: null,
    });
  }
}
