import * as React from 'react';
import { CarouselContainer, Indicator, IndicatorContainer, Slide } from './index.style';

export interface CarouselProps {
  children: JSX.Element[];
  width?: string;
  height?: string;
  defaultIndex?: number;
  speed?: number;
  duration?: number;
}

export interface CarouselState {
  activeIdx: number;
  disabled: boolean;
  prevActiveIdx: number | null;
  length: number;
}

export class Carousel extends React.Component<CarouselProps, CarouselState> {
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
      activeIdx: props.defaultIndex || 0,
      disabled: false,
      length: props.children.length,
      prevActiveIdx: null,
    };

    this.timer = setTimeout(() => this.goToNextSlide(), props.duration);
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
  }
  public render() {
    const { children, height, width, speed, duration } = this.props;
    const { activeIdx, prevActiveIdx } = this.state;
    return (
      <CarouselContainer height={height} width={width}>
        {children.map((child, idx) => (
          <Slide
            {...{ height, width, speed, duration }}
            key={idx}
            active={activeIdx === idx}
            prevActiveIdx={prevActiveIdx === idx}
            onTransitionEnd={this.handleTransitionEnd}
          >
            {child}
          </Slide>
        ))}
        <IndicatorContainer>
          {children.map((child, idx) => (
            <Indicator onClick={this.goToSlide.bind(this, idx)} key={idx} active={activeIdx === idx} />
          ))}
        </IndicatorContainer>
      </CarouselContainer>
    );
  }

  private goToSlide(idx: number): void {
    if (this.state.disabled) {
      return;
    }
    if (this.state.activeIdx !== idx) {
      this.setState((prevState) => ({
        activeIdx: idx,
        disabled: true,
        prevActiveIdx: prevState.activeIdx,
      }));
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.goToNextSlide(), this.props.duration);
    }
  }

  private goToNextSlide(): void {
    this.goToSlide((this.state.activeIdx + 1) % this.state.length);
  }

  private handleTransitionEnd(): void {
    this.setState({
      disabled: false,
      prevActiveIdx: null,
    });
  }
}
