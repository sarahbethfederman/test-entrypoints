import * as React from 'react';
import styled, { withTheme } from 'styled-components';
import { fg, bg, color } from '.';
import { m, p } from '@lendi-ui/spacing';
import { Heading, body } from '@lendi-ui/typography';
import { Colors } from '@lendi-ui/theme';

interface ColorWrapperProps {
  color: Colors;
}

const ColorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${m('xxxs')}
  ${p('xs')}
  ${(props: ColorWrapperProps) => bg(props.color)};
`;

const ColorName = styled.section`
  ${fg('shade.400')} ${body()}
`;

const ColorHexValue = styled.section`
  ${fg('shade.400')} ${body()}
`;

const ColorComponent = withTheme(({ name, theme }: { name: Colors; theme: any }) => {
  return (
    <ColorWrapper color={name}>
      <ColorName>
        <b>{name}</b>
      </ColorName>
      <ColorHexValue>
        <small>{color(name)({ theme })}</small>
      </ColorHexValue>
    </ColorWrapper>
  );
});

const ColorStory = withTheme(({ theme }: { theme: any }) => (
  <>
    <Heading size="lg">Colors</Heading>
    {Object.keys(theme.colors).map((prefix) => (
      <React.Fragment key={prefix}>
        <ColorComponent name={prefix} />
      </React.Fragment>
    ))}
  </>
));

export default ColorStory;
