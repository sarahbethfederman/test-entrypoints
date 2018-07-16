import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { Carousel } from './Carousel';

import { wInfo } from '@lui/story-utils';

const Child = ({ label }: { label: string }) => (
  <div
    style={{
      width: '100%',
      lineHeight: '250px',
      height: '250px',
      background: '#0dd1ac',
      border: '10px solid white',
      textAlign: 'center',
      color: 'white',
      fontSize: '20px',
    }}
  >
    {label}
  </div>
);

storiesOf('Components/Carousel', module).addWithJSX(
  'basic Carousel',
  wInfo(`

  ### Notes

  This is a Carousel

  ### Usage
  ~~~js
  <Carousel
    width= {'100%'}
    height= {'500px'}
    activeIdx= {0};
    speed= {'300ms'};
    duration= {'4000ms'};
    indicatorColor= {'#666'};
    indicatorActiveColor= {'#CCC'};
  />
  </Carousel>
  ~~~`)(() => (
    <Carousel height="250px">
      <Child label="Slide 1" />
      <Child label="Slide 2" />
      <Child label="Slide 3" />
    </Carousel>
  ))
);
