import * as React from 'react';
import styled, { withTheme } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { color, fg, bg } from '.';
import { m, p } from '@lendi-ui/spacing';
import { body } from '@lendi-ui/typography';
import Theme from '@lendi-ui/theme';

const borderRadius = '4px';

const ColorWrapper = styled.section`
  ${m(2)} display: inline-block;
  width: 200px;
  border: 1px solid ${color('shade.5')};
  border-radius: ${borderRadius};
`;

interface ColorSwabProps {
  color: string;
}

const ColorSwab = styled.div`
  ${p(5)} ${(props: ColorSwabProps) => bg(props.color)};
  border-top-left-radius: ${borderRadius};
  border-top-right-radius: ${borderRadius};
  border-bottom: 1px solid ${color('shade.5')};
`;

const ColorDetail = styled.section`
  ${p(3)}
  ${fg('shade.1')}
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

const BrandStory = withTheme(({ theme }: { theme: any }) => (
  <>
    <h1>Brand</h1>
    {['primary', 'secondary', 'tertiary', 'quaternary'].map((prefix: string) => (
      <>
        <h5>{prefix}</h5>
        {Object.keys(theme.colors.brand)
          .filter((name) => name.startsWith(prefix))
          .map((c) => (
            <ColorComponent key={`brand.${c}`} name={`brand.${c}`} />
          ))}
      </>
    ))}
  </>
));

const ShadeStory = withTheme(({ theme }: { theme: any }) => (
  <>
    <h1>Shade</h1>
    {Object.keys(theme.colors.shade).map((c: string) => (
      <ColorComponent key={`shade.${c}`} name={`shade.${c}`} />
    ))}
  </>
));

const AlertStory = withTheme(({ theme }: { theme: any }) => (
  <>
    <h1>Alert</h1>
    {['info', 'warn', 'error', 'success'].map((prefix: string) => (
      <>
        <h5>{prefix}</h5>
        {Object.keys(theme.colors.alert)
          .filter((name) => name.startsWith(prefix))
          .map((c) => (
            <ColorComponent key={`alert.${c}`} name={`alert.${c}`} />
          ))}
      </>
    ))}
  </>
));

storiesOf('Foundation/color', module)
  .add('brand', () => (
    <Theme>
      <BrandStory />
    </Theme>
  ))
  .add('shade', () => (
    <Theme>
      <ShadeStory />
    </Theme>
  ))
  .add('alert', () => (
    <Theme>
      <AlertStory />
    </Theme>
  ));
