import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { wInfo } from '@lui/story-utils';

import Icon from './Icon';

const IconContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const IconContainerWrapper = styled.div`
  margin: 10px;
  padding: 20px;
  min-width: 200px;
  min-height: 150px;
  background-color: #eeeeee;
  text-align: center;
`;

const IconWrapper = styled(Icon)`
  width: 100px;
  height: 100px;
`;

const Code = styled.code`
  padding: 5px;
  background-color: #ffffff;
  font-family: Menlo, Monaco, 'Courier New', monospace;
`;

// @TODO LIP-530 import possible values here instead of hardcoding
const iconList = [
  'check',
  'email',
  'helpful-hassle-free-home',
  'house-home',
  'lock',
  'message',
  'phone',
  'refinance-home',
  'smart-tech-platform-home',
  'star',
  'step-by-step-home',
  'transparent-convenient-home',
];

// @ts-ignore - addWithJSX has no types
storiesOf('Components/Icons', module).addWithJSX(
  'basic',
  wInfo(`

  ### Usage
  ~~~js
  <Icon name="check"/>
  ~~~`)(() => (
    <IconContainer>
      {iconList.map((icon) => (
        <IconContainerWrapper>
          <IconWrapper name={icon} />
          <div>
            <Code>{`<Icon name="${icon}" />`}</Code>
          </div>
        </IconContainerWrapper>
      ))}
    </IconContainer>
  ))
);
