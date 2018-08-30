import * as React from 'react';
import styled, { css } from 'styled-components';
import * as breakpoints from '@lendi-ui/breakpoint';
import { color, fg, bg } from '@lendi-ui/color';
import { heading, body, Body, link, Link } from '@lendi-ui/typography';
import { container } from '@lendi-ui/container';
import * as spacing from '@lendi-ui/spacing';
import { grid, unit } from '@lendi-ui/grid';
import { depth } from '@lendi-ui/depth';
import Heading, { HeadingSize } from '@lendi-ui/heading';
import Logo from '@lendi-ui/logo';
import Carousel from '@lendi-ui/carousel';
import FeaturePanel from '@lendi-ui/feature-panel';
import Icon from '@lendi-ui/icon';
import Button from '@lendi-ui/button';
import { Playground } from '@lendi-ui/doc-utils';

const scope = {
  styled,
  css,
  color,
  fg,
  bg,
  depth,
  container,
  grid,
  unit,
  ...breakpoints,
  ...spacing,
  heading,
  body,
  link,
  Heading,
  Body,
  Link,
  Logo,
  Carousel,
  FeaturePanel,
  Icon,
  Button,
};

interface GenericProps {
  children?: React.ReactNode;
}

const createHeading = (size: HeadingSize) => ({ children }: { children?: React.ReactNode }) => (
  <Heading size={size}>{children}</Heading>
);

const Paragraph = styled.p`
  ${body()};
`;

const Pre = styled.pre`
  white-space: pre-wrap;
`;

const StaticCode = styled.code``;

const Code = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  const lang = className ? className.substr('language-'.length) : '';
  if (lang === 'js' || lang === 'jsx') {
    return <Playground inline={lang === 'jsx'} scope={scope} code={React.Children.toArray(children).join('\n')} />;
  } else {
    return <StaticCode>{children}</StaticCode>;
  }
};

export const components: { [name: string]: React.Component | React.SFC } = {
  h1: createHeading('xl'),
  h2: createHeading('lg'),
  h3: createHeading('md'),
  h4: createHeading('sm'),
  h5: createHeading('xs'),
  p: ({ children }: GenericProps) => <Paragraph>{children}</Paragraph>,
  pre: ({ children }: GenericProps) => <Pre>{children}</Pre>,
  code: Code,
};
