import * as React from 'react';
import styled from 'styled-components';
import { container } from '@lendi-ui/container';
import { p } from '@lendi-ui/spacing';
import Carousel, { useCarouselContext } from '.';
import { bg, color } from '@lendi-ui/color';
import { gte } from '@lendi-ui/breakpoint';

const Content = styled.div`
  ${container()}
  ${p('sm')}
  width: 100%;
  ${gte('tablet')`
    width: inherit;
  `};
`;

const CardContainer = styled.div`
  ${p('xs')};
  width: 100%;
  display: flex;

  ${gte('tablet')`
    width: 33%;
  `};

  ${gte('desktop')`
    width: 25%;
  `};
`;

const StyledCard = styled.div`
  ${bg('shade.0')}
  ${p('sm')}
  border-radius: 6px;
  box-shadow: 0 0 5px ${color('shade.500')};
  width: 100%;
`;

const DataContainer = styled.div`
  width: 100%;
`;

interface LinkProps {
  disabled: boolean;
}

const Link = styled.a<LinkProps>`
  font-weight: ${(props) => (props.disabled ? 'inherit' : 'bold')};
  color: ${(props) => (props.disabled ? color('shade.500') : color('primary.500'))};
  cursor: ${(props) => (props.disabled ? 'inherit' : 'pointer')};
`;

interface CardWithCarouselProps {
  data: React.ReactNode[];
}

const Data: React.FunctionComponent = ({ children }) => <DataContainer>{children}</DataContainer>;

const PreviousIndexNextButtons: React.FunctionComponent = () => {
  const { nextSlide, previousSlide, isNextDisabled, isPreviousDisabled, currentIndex } = useCarouselContext();
  return (
    <>
      <Link disabled={isPreviousDisabled} onClick={() => previousSlide()}>
        ＜
      </Link>
      Option: {currentIndex + 1}
      <Link disabled={isNextDisabled} onClick={() => nextSlide()}>
        ＞
      </Link>
    </>
  );
};

const CardWithCarousel: React.FunctionComponent<CardWithCarouselProps> = ({ children, data }) => (
  <StyledCard>
    {children}
    <Carousel swipe={false}>
      <PreviousIndexNextButtons />
      <Carousel.Slides>{data.map((datum) => datum)}</Carousel.Slides>
    </Carousel>
  </StyledCard>
);

export default () => (
  <Content>
    <div style={{ height: '200px', backgroundColor: '#ffc5c0', borderRadius: '6px' }} />
    <Carousel withArrows height={'1000px'} increment={{ mobile: 1, tablet: 4, desktop: 4 }}>
      <CardContainer>
        <CardWithCarousel data={[<Data key={1}>1a</Data>, <Data key={2}>1b</Data>]}>
          <h2>Option 1</h2>
        </CardWithCarousel>
      </CardContainer>

      <CardContainer>
        <CardWithCarousel data={[<Data key={1}>2a</Data>, <Data key={2}>2b</Data>]}>
          <h2>Option 2</h2>
        </CardWithCarousel>
      </CardContainer>

      <CardContainer>
        <CardWithCarousel data={[<Data key={1}>3a</Data>, <Data key={2}>3b</Data>]}>
          <h2>Option 3</h2>
        </CardWithCarousel>
      </CardContainer>

      <CardContainer>
        <CardWithCarousel data={[<Data key={1}>4a</Data>, <Data key={2}>4b</Data>]}>
          <h2>Option 4</h2>
        </CardWithCarousel>
      </CardContainer>

      <CardContainer>
        <CardWithCarousel data={[<Data key={1}>5a</Data>, <Data key={2}>5b</Data>]}>
          <h2>Option 5</h2>
        </CardWithCarousel>
      </CardContainer>

      <CardContainer>
        <CardWithCarousel data={[<Data key={1}>6a</Data>, <Data key={2}>6b</Data>]}>
          <h2>Option 6</h2>
        </CardWithCarousel>
      </CardContainer>
    </Carousel>
  </Content>
);
