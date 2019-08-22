import * as React from 'react';
import styled, { css } from 'styled-components';

import AddressPicker from '@lendi-ui/address-picker';
import * as breakpoints from '@lendi-ui/breakpoint';
import { color, fg, bg } from '@lendi-ui/color';
import Container, { container } from '@lendi-ui/container';
import * as spacing from '@lendi-ui/spacing';
import Grid, { grid, unit } from '@lendi-ui/grid';
import { depth } from '@lendi-ui/depth';
import { Heading, HeadingSize } from '@lendi-ui/typography';
import Logo from '@lendi-ui/logo';
import Carousel, { useCarouselContext } from '@lendi-ui/carousel';
import { FeaturePanel } from '@lendi-ui/feature-panel';
import * as icons from '@lendi-ui/icon';
import { Input, InputButton } from '@lendi-ui/text-input';
import { Button, ButtonGroup, IconButton } from '@lendi-ui/button';
import { NativeSelect, Select } from '@lendi-ui/dropdown';
import * as utils from '@lendi-ui/utils';
import { Playground } from '@lendi-ui/doc-utils';
import Popover from '@lendi-ui/popover';
import Theme from '@lendi-ui/theme';
import Field from '@lendi-ui/field';
import Spinner from '@lendi-ui/spinner';
import Transition, { Fade } from '@lendi-ui/transition';
import Overlay from '@lendi-ui/overlay';
import Tabs from '@lendi-ui/tabs';
import Navbar, { fetchApplication, fetchBroker } from '@lendi-ui/navbar';
import Footer from '@lendi-ui/footer';
import { Checkbox, CheckboxGroup } from '@lendi-ui/checkbox';
import Legal from '@lendi-ui/legal-stuff';
import Modal from '@lendi-ui/modal';
import Alert from '@lendi-ui/alert';
import { Radio, RadioGroup } from '@lendi-ui/radio';
import MenuDropdown from '@lendi-ui/menu-dropdown';
import Card from '@lendi-ui/card';
import ToggleSwitch from '@lendi-ui/toggle-switch';
import Pagination from '@lendi-ui/pagination';
import StatusBadge from '@lendi-ui/status-badge';
import { Navigation, Menu, MenuItem, BrokerNavigation } from '@lendi-ui/navigation';
import Collapse from '@lendi-ui/collapse';
import TextBubble from '@lendi-ui/text-bubble';
import TextArea from '@lendi-ui/text-area';
import DatePicker from '@lendi-ui/date-picker';
import { AutoComplete, AutoCompleteStateless } from '@lendi-ui/auto-complete';
import Tooltip from '@lendi-ui/tooltip';
import * as fancyIcons from '@lendi-ui/fancy-icon';
import AuthLoader from '@lendi-ui/auth-loader';
import { AccordionGroup, Accordion } from '@lendi-ui/accordion';
import { heading, body, Body, link, Link, overline, Overline } from '@lendi-ui/typography';
import LenderLogos from '@lendi-ui/lender-logos';

// If there are any conflicts between names, the order of this
// object will determine the preference. (this is the case with
// icon.Link and typography.Link)
const scope = {
  AddressPicker,
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
  overline,
  Overline,
  Logo,
  Carousel,
  useCarouselContext,
  FeaturePanel,
  ...icons,
  Button,
  ButtonGroup,
  IconButton,
  Container,
  Theme,
  NativeSelect,
  Select,
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
  fetchApplication,
  fetchBroker,
  Footer,
  Checkbox,
  CheckboxGroup,
  Legal,
  Modal,
  Alert,
  Radio,
  RadioGroup,
  MenuDropdown,
  Card,
  ToggleSwitch,
  Pagination,
  StatusBadge,
  Navigation,
  Menu,
  MenuItem,
  BrokerNavigation,
  Collapse,
  TextBubble,
  TextArea,
  DatePicker,
  AutoComplete,
  AutoCompleteStateless,
  Tooltip,
  ...fancyIcons,
  AuthLoader,
  AccordionGroup,
  Accordion,
  link,
  Heading,
  Body,
  Link,
  LenderLogos,
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
