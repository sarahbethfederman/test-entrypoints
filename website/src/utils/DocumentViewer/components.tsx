import * as React from 'react';
import styled, { css } from 'styled-components';
import * as breakpoints from '@lendi-ui/breakpoint';
import { color, fg, bg } from '@lendi-ui/color';
import { heading, body, Body, link, Link } from '@lendi-ui/typography';
import Container, { container } from '@lendi-ui/container';
import * as spacing from '@lendi-ui/spacing';
import Grid, { grid, unit } from '@lendi-ui/grid';
import { depth } from '@lendi-ui/depth';
import { Heading, HeadingSize } from '@lendi-ui/typography';
import Logo from '@lendi-ui/logo';
import Carousel from '@lendi-ui/carousel';
import FeaturePanel from '@lendi-ui/feature-panel';
import * as icons from '@lendi-ui/icon';
import { Input, InputButton } from '@lendi-ui/text-input';
import { Button, ButtonGroup } from '@lendi-ui/button';
import Dropdown from '@lendi-ui/inline-dropdown';
import * as utils from '@lendi-ui/utils';
import { Playground } from '@lendi-ui/doc-utils';
import Popover from '@lendi-ui/popover';
import Theme from '@lendi-ui/theme';
import Field from '@lendi-ui/field';
import Spinner from '@lendi-ui/spinner';
import Transition, { Fade } from '@lendi-ui/transition';
import Overlay from '@lendi-ui/overlay';
import Tabs from '@lendi-ui/tabs';
import Navbar from '@lendi-ui/navbar';
import Footer from '@lendi-ui/footer';
import { Checkbox, CheckboxGroup } from '@lendi-ui/checkbox';
import Legal from '@lendi-ui/legal-stuff';
import Modal from '@lendi-ui/modal';
import Alert from '@lendi-ui/alert';

const scope = {
  styled,
  css,
  color,
  fg,
  bg,
  depth,
  container,
  Grid,
  grid,
  unit,
  ...breakpoints,
  ...spacing,
  ...utils,
  heading,
  body,
  link,
  Heading,
  Body,
  Link,
  Logo,
  Carousel,
  FeaturePanel,
  ...icons,
  Button,
  ButtonGroup,
  Container,
  Theme,
  Dropdown,
  Popover,
  Field,
  Spinner,
  Transition,
  Input,
  InputButton,
  Fade,
  Overlay,
  Tabs,
  Navbar,
  Footer,
  Checkbox,
  CheckboxGroup,
  Legal,
  Modal,
  Alert,
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
