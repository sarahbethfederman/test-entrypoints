import * as React from 'react';
import { Wrapper, Container } from './index.style';
import { Heading } from '@lendi-ui/typography';
import { Social } from './components/Social';
import { GeneralInfo } from './components/GeneralInfo';
import { MainPages } from './components/MainPages';
import { Category, WindowPosition } from '@lendi/lendi-analytics-package';
import { AnalyticsContextProvider, trackNavigation } from '@lendi-ui/utils';
import { withTheme } from 'styled-components';
import { ThemeMap } from '@lendi-ui/theme';

export interface FooterProps {
  broker?: Broker;
  theme?: ThemeMap;
  params?: string;
}

interface Broker {
  fullName: string;
  photo: string;
  phone: string;
  title: string;
}

const Footer = (props: FooterProps) => {
  const { params } = props;
  return (
    <Wrapper>
      <Container>
        <Heading size="md" color="shade.0" mb={{ mobile: 'sm', tablet: 'sm', desktop: 'md' }}>
          Still looking?
        </Heading>
        <AnalyticsContextProvider
          value={{
            analyticsForNavigation: (text: string, position: WindowPosition) =>
              analysticHelper(text, props.broker ? true : false, position, props.theme),
          }}
        >
          <MainPages params={params} />
          <GeneralInfo params={params} />
          <Social />
        </AnalyticsContextProvider>
      </Container>
    </Wrapper>
  );
};

export const analysticHelper = (text: string, isBroker: boolean, position: WindowPosition, theme?: ThemeMap) => {
  // this trackNavigation is specific for footer so, we can hardcoded it to the Category.footer.
  trackNavigation(text, isBroker, position, Category.footer, theme!.logo.logoName);
};

export default withTheme(Footer);
