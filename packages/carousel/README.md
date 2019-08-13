# @lendi-ui/carousel

A carousel component.

## Installation

```
yarn add @lendi-ui/carousel
```

## Simple Carousel

The simple carousel allows you to get up and running with minimal configuration using our default arrows and default dots.

### Usage

```
import Carousel from '@lendi-ui/carousel';
```

```jsx
<Carousel initialIndex={1} increment={2} height="200px" withDots withArrows infinite>
  <div style={{ width: '50%' }}> #1 </div>
  <div style={{ width: '50%' }}> #2 </div>
  <div style={{ width: '50%' }}> #3 </div>
  <div style={{ width: '50%' }}> #4 </div>
  <div style={{ width: '50%' }}> #5 </div>
  <div style={{ width: '50%' }}> #6 </div>
  <div style={{ width: '50%' }}> #7 </div>
</Carousel>
```

### Properties

**children**: \<React.ReactNode> | The slides

**increment**: \<number> = 1 | How many slides to jump per scroll

**initialIndex**: \<number> = 0 | The index of inital slide shown by the carousel

**height**: \<string> = "500px" | The carousel height

**width**: \<string> = "100%" | The carousel width

**withArrows**: \<boolean> = false | Whether to display the default arrows

**withDots**: \<boolean> = false | Whether to display the default dots

**swipe**: \<boolean> = true | Whether to allow moving between slides using swipe gestures

**infinite**: \<boolean> = false | Whether the slides are circular or linear

**autoplay**: \<boolean> = false | Whether slides automatically scroll on an interval

**duration**: \<number> = 5000 | If autoplaying, how long is the interval between automatic slides

**speed**: \<number> = 300 | How fast the scroll animation is

## Compound Carousel

The compound carousel allows you to significantly modify the look and feel of your carousel by customising the children, arrows, and dots.

### Usage

```
import Carousel, { CarouselArrowStyleProps, CarouselDotsStyleProps } from '@lendi/carousel';
```

```jsx
<Carousel height="200px">
  <Carousel.PreviousArrow>
    {(disabled) => (
      <span
        style={{
          float: 'left',
          paddingLeft: '40px',
          cursor: disabled ? 'inherit' : 'pointer',
        }}
      >
        {disabled ? '✋' : '👈'}
      </span>
    )}
  </Carousel.PreviousArrow>

  <Carousel.NextArrow>
    {(disabled) => (
      <span
        style={{
          float: 'right',
          paddingRight: '40px',
          cursor: disabled ? 'inherit' : 'pointer',
        }}
      >
        {disabled ? '✋' : '👉'}
      </span>
    )}
  </Carousel.NextArrow>

  <Carousel.Slides>
    <div style={{ width: '40%', background: '#f00', textAlign: 'center', padding: '20px' }}> #1 </div>
    <div style={{ width: '40%', background: '#0f0', textAlign: 'center', padding: '20px' }}> #2 </div>
    <div style={{ width: '40%', background: '#00f', textAlign: 'center', padding: '20px' }}> #3 </div>
    <div style={{ width: '40%', background: '#ff0', textAlign: 'center', padding: '20px' }}> #4 </div>
    <div style={{ width: '40%', background: '#0ff', textAlign: 'center', padding: '20px' }}> #5 </div>
    <div style={{ width: '40%', background: '#f0f', textAlign: 'center', padding: '20px' }}> #6 </div>
    <div style={{ width: '40%', background: '#f90', textAlign: 'center', padding: '20px' }}> #7 </div>
  </Carousel.Slides>

  <div style={{ border: '1px solid black', padding: '10px' }}>
    <span>
      I am a custom component with access to the <code>CarouselContext</code> using <code>useCarouselContext()</code>
    </span>
  </div>

  <Carousel.Dots style={{ display: 'flex' }}>
    {(isActive) => (
      <div
        style={{
          flexGrow: 1,
          padding: '16px',
          cursor: 'pointer',
          textAlign: 'center',
        }}
      >
        {isActive ? '🌝' : '🌚'}
      </div>
    )}
  </Carousel.Dots>
</Carousel>
```

## Compound Components

**Slides**: \<CarouselSlides> | Container to hold slides when adding custom components to the Carousel

**PreviousArrow**: \<CarouselPreviousArrow> | Create a custom Previous Arrow

**Arrows**: \<CarouselNextArrow> | Create a custom Next Arrow

**Dots**: \<CarouselDots> | Create custom Dots

**children**: \<React.ReactNode> | Any other components you wish to have access to the `CarouselContext`

### Carousel.PreviousArrow & Carousel.NextArrow Properties

**children**: \<React.ReactNode> | The custom arrow you have created

**width**: \<number> = 40 | Change the width of the default arrow

### Carousel.Dots Properties

**children**: \<React.ReactNode> | The custom dot you have created

**style**: \<CSSProperties> | Override the default styles of the Dots

### CarouselContext

You can access the CarouselContext from your custom component by running the function `useCarouselContext()`.

**isPreviousDisabled**: \<boolean> | If not infinite, whether one can go to the previous increment

**isNextDisabled**: \<boolean> | If not infinite, whether one can go to the next increment

**previousSlide**: \<() => void> | Move back one increment

**nextSlide**: \<() => void> | Move forward one increment

**slides**: \<number> | The count of all slides

**currentIndex**: \<number> | The current slide index

**increment**: \<number> | How many slides to jump per scroll

**infinite**: \<boolean> | Whether the slides are circular or linear

**containerBox**: \<ClientRect | DOMRect> | The bounding box of the CarouselContainer, useful for calculating arrow locations
