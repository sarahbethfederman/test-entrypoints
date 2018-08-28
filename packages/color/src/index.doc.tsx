import * as React from 'react';
import styled, { withTheme } from 'styled-components';
import { color, fg, bg } from '.';
import { m, p } from '@lendi-ui/spacing';
import { body } from '@lendi-ui/typography';
import Heading from '@lendi-ui/heading';

interface ColorWrapperProps {
  color: string;
}

const ColorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${m('xxxs')} 
  ${p('xs')} 
  ${(props: ColorWrapperProps) => bg(props.color)};
`;

const ColorName = styled.section`
  ${fg('shade.400')} ${body()};
`;

const ColorHexValue = styled.section`
  ${fg('shade.400')} ${body()};
`;

const ColorComponent = withTheme(({ name, theme }: { name: string; theme: any }) => (
  <ColorWrapper color={name}>
    <ColorName>
      <b>{name}</b>
    </ColorName>
    <ColorHexValue>
      <small>{color(name)({ theme })}</small>
    </ColorHexValue>
  </ColorWrapper>
));

const ColorStory = withTheme(({ theme }: { theme: any }) => (
  <>
    <Heading size="lg">Colors</Heading>
    {Object.keys(theme.colors).map((prefix) => (
      <React.Fragment key={prefix}>
        <Heading size="md">{prefix}</Heading>
        {Object.keys(theme.colors[prefix]).map((colorIndex) => (
          <ColorComponent key={`${prefix}.${colorIndex}`} name={`${prefix}.${colorIndex}`} />
        ))}
      </React.Fragment>
    ))}
  </>
));

export default ColorStory;
