import * as React from 'react';
import Logo from '@lendi-ui/logo';
import { Body, Link } from '@lendi-ui/typography';
import { LUIGlobalProps } from '@lendi-ui/utils';
import {
  Wrapper,
  SectionWrapperOne,
  SectionWrapperTwo,
  LinksWrapper,
  LinksGroup,
  PageLink,
  Separator,
  SocialWrapper,
  SocialLink,
  FaceBookWrapper,
  TwitterWrapper,
  LinkedinWrapper,
  YoutubeWrapper,
} from './index.style';

export interface SocialPanelProps extends LUIGlobalProps {}

export const SocialPanel = (props: SocialPanelProps) => (
  <Wrapper {...props}>
    <SectionWrapperOne>
      <Link href="https://www.lendi.com.au/">
        <Logo width="110px" height="32px" />
      </Link>
      <LinksWrapper>
        <LinksGroup>
          <PageLink size="sm" color="shade.700" href="https://www.lendi.com.au/privacypolicy/">
            Private policy
          </PageLink>
          <Separator />
          <PageLink size="sm" color="shade.700" href="https://www.lendi.com.au/creditguide/">
            Credit guide
          </PageLink>
          <Separator />
        </LinksGroup>
        <LinksGroup>
          <PageLink size="sm" color="shade.700" href="https://www.lendi.com.au/site-map/">
            Site map
          </PageLink>
          <Separator />
          <PageLink size="sm" color="shade.700" href="https://www.lendi.com.au/contactus/">
            Contact us
          </PageLink>
        </LinksGroup>
      </LinksWrapper>
    </SectionWrapperOne>
    <SectionWrapperTwo>
      <Body align="center" size="sm" color="shade.700" mt={{ mobile: 'lg', tablet: 'nil', desktop: 'nil' }}>
        Lendi Pty Ltd · Level 9, 37 Pitt St, Sydney NSW 2000
      </Body>
      <SocialWrapper>
        <SocialLink href="https://www.facebook.com/lendiau/">
          <FaceBookWrapper width="35px" height="35px" color="secondary.500" />
        </SocialLink>
        <SocialLink href="https://twitter.com/lendiau">
          <TwitterWrapper width="35px" height="35px" color="secondary.500" />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/company/lendi">
          <LinkedinWrapper width="35px" height="35px" color="secondary.500" />
        </SocialLink>
        <SocialLink href="https://www.youtube.com/channel/UClqvf6ktIXZtlD556hyFq1g/featured">
          <YoutubeWrapper width="35px" height="35px" color="secondary.500" />
        </SocialLink>
      </SocialWrapper>
    </SectionWrapperTwo>
  </Wrapper>
);
