import * as React from 'react';
import Theme from '@lendi-ui/theme';
import { Layout } from '../Layout';
import {
  Wrapper,
  ContainerWrapper,
  LendiLogo,
  Main,
  PageNotFoundIcon,
  HeadingWrapper,
  BodyWrapper,
} from './index.style';

export interface PageNotFoundProps {}

export const PageNotFound = ({  }: PageNotFoundProps) => (
  <Layout>
    <ContainerWrapper>
      <a href="/">
        <LendiLogo />
      </a>
      <Main>
        <HeadingWrapper size="md" color="secondary.500" mt="xs">
          Page not found
        </HeadingWrapper>
        <PageNotFoundIcon />
        <BodyWrapper size={{ mobile: 'sm', tablet: 'md' }} color="shade.700" mb="xxs">
          Oops! It looks like this page has upsized, downsized, moved home or been demolished. Get back on track by
          heading straight over to our home page.
        </BodyWrapper>
      </Main>
    </ContainerWrapper>
  </Layout>
);

export default () => (
  <Theme>
    <Wrapper>
      <PageNotFound />
    </Wrapper>
  </Theme>
);
