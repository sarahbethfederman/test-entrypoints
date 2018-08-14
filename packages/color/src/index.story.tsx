import * as React from 'react';
import styled, { withTheme } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { color, fg, bg } from '.';
import { m, p } from '@lendi-ui/spacing';
import { body } from '@lendi-ui/typography';
import Theme from '@lendi-ui/theme';

const borderRadius = '4px';

const ColorWrapper = styled.section`
  ${m('xxs')} display: inline-block;
  width: 200px;
  border: 1px solid ${color('shade.500')};
  border-radius: ${borderRadius};
`;

interface ColorSwabProps {
  color: string;
}

const ColorSwab = styled.div`
  ${p('xxl')} ${(props: ColorSwabProps) => bg(props.color)};
  border-top-left-radius: ${borderRadius};
  border-top-right-radius: ${borderRadius};
  border-bottom: 1px solid ${color('shade.500')};
`;

const ColorDetail = styled.section`
  ${p('xs')}
  ${fg('shade.400')}
  ${body()}
`;

const ColorComponent = withTheme(({ name, theme }: { name: string; theme: any }) => (
  <ColorWrapper>
    <ColorSwab color={name} />
    <ColorDetail>
      <b>{name}</b>
      <br />
      <small>{color(name)({ theme })}</small>
    </ColorDetail>
  </ColorWrapper>
));

const AlertStory = withTheme(({ theme }: { theme: any }) => (
  <>
    {Object.keys(theme.colors).map((prefix) => (
      <>
        <h5>{prefix}</h5>
        {Object.keys(theme.colors[prefix]).map((colorIndex) => (
          <ColorComponent key={`${prefix}.${colorIndex}`} name={`${prefix}.${colorIndex}`} />
        ))}
      </>
    ))}
  </>
));

storiesOf('Foundation/color', module).add('color()', () => (
  <Theme>
    <AlertStory />
  </Theme>
));
