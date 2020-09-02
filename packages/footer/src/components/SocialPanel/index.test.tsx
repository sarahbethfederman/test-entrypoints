import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Theme from '@lendi-ui/theme';
import Logo from '@lendi-ui/logo';
import { Body, Link } from '@lendi-ui/typography';
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
import { SocialPanel, SocialPanelProps } from './index';

const element: ReactWrapper<SocialPanelProps> = mount(
  <Theme>
    <SocialPanel />
  </Theme>
);

describe('SocialPanel', () => {
  it('should render the whole SocialPanel component', () => {
    expect(element.find(SocialPanel)).toHaveLength(1);
    expect(element.find(Wrapper)).toHaveLength(1);
  });

  it('should render SectionWrapperOne component in Wrapper', () => {
    expect(element.find(SectionWrapperOne)).toHaveLength(1);
  });

  describe('SectionWrapperOne', () => {
    const sectionWrapperOne = element.find(SectionWrapperOne);
    it('should render Logo in SectionWrapperOne component', () => {
      expect(sectionWrapperOne.find(Link).at(0).props().href).toEqual('https://www.lendi.com.au/');
      expect(sectionWrapperOne.find(Logo)).toHaveLength(1);
    });

    it('should render LinksWrapper in SectionWrapperOne component', () => {
      expect(sectionWrapperOne.find(LinksWrapper)).toHaveLength(1);
    });

    describe('LinksWrapper', () => {
      const linksWrapper = sectionWrapperOne.find(LinksWrapper);
      it('should render 2 LinksGroup in LinksWrapper', () => {
        expect(linksWrapper.find(LinksGroup)).toHaveLength(2);
      });

      describe('the first LinksGroup', () => {
        const firstLinksGroup = linksWrapper.find(LinksGroup).at(0);
        it('should render 2 PageLink and 2 Separator in the first LinksGroup', () => {
          expect(firstLinksGroup.find(PageLink)).toHaveLength(2);
          expect(firstLinksGroup.find(Separator)).toHaveLength(2);
        });

        it("should render 'private policy' link in the first LinksGroup", () => {
          const privatePolicyLink = firstLinksGroup.find(PageLink).at(0);
          expect(privatePolicyLink.props().href).toEqual('https://www.lendi.com.au/privacypolicy/');
          expect(privatePolicyLink.text()).toEqual('Private policy');
        });

        it("should render 'credit guide' link in the first LinksGroup", () => {
          const creditGuideLink = firstLinksGroup.find(PageLink).at(1);
          expect(creditGuideLink.props().href).toEqual('https://www.lendi.com.au/creditguide/');
          expect(creditGuideLink.text()).toEqual('Credit guide');
        });
      });

      describe('the second LinksGroup', () => {
        const secondLinksGroup = linksWrapper.find(LinksGroup).at(1);
        it('should render 2 PageLink and 1 Separator in the second LinksGroup', () => {
          expect(secondLinksGroup.find(PageLink)).toHaveLength(2);
          expect(secondLinksGroup.find(Separator)).toHaveLength(1);
        });

        it("should render 'site map' link in the second LinksGroup", () => {
          const siteMapLink = secondLinksGroup.find(PageLink).at(0);
          expect(siteMapLink.props().href).toEqual('https://www.lendi.com.au/site-map/');
          expect(siteMapLink.text()).toEqual('Site map');
        });

        it("should render 'contact us' link in the second LinksGroup", () => {
          const contactUsLink = secondLinksGroup.find(PageLink).at(1);
          expect(contactUsLink.props().href).toEqual('https://www.lendi.com.au/contactus/');
          expect(contactUsLink.text()).toEqual('Contact us');
        });
      });
    });
  });

  it('should render SectionWrapperTwo component in Wrapper', () => {
    expect(element.find(SectionWrapperTwo)).toHaveLength(1);
  });

  describe('SectionWrapperTwo', () => {
    const sectionWrapperTwo = element.find(SectionWrapperTwo);
    it('should render 1 Body component in SectionWrapperTwo', () => {
      expect(sectionWrapperTwo.find(Body)).toHaveLength(1);
      expect(sectionWrapperTwo.find(Body).text()).toEqual('Lendi Pty Ltd · Level 9, 37 Pitt St, Sydney NSW 2000');
    });

    it('should render 1 SocialWrapper component in SectionWrapperTwo', () => {
      expect(sectionWrapperTwo.find(SocialWrapper)).toHaveLength(1);
    });

    describe('SocialWrapper', () => {
      const socialWrapper = sectionWrapperTwo.find(SocialWrapper);
      it('should render 4 SocialLink component in SocialWrapper', () => {
        expect(socialWrapper.find(SocialLink)).toHaveLength(4);
      });

      it('should render Facebook icon in the first SocialLink', () => {
        const firstSocialLink = socialWrapper.find(SocialLink).at(0);
        expect(firstSocialLink.find(FaceBookWrapper)).toHaveLength(1);
        expect(firstSocialLink.props().href).toEqual('https://www.facebook.com/lendiau/');
      });

      it('should render Twitter icon in the first SocialLink', () => {
        const secondSocialLink = socialWrapper.find(SocialLink).at(1);
        expect(secondSocialLink.find(TwitterWrapper)).toHaveLength(1);
        expect(secondSocialLink.props().href).toEqual('https://twitter.com/lendiau');
      });

      it('should render Linkedin icon in the first SocialLink', () => {
        const thirdSocialLink = socialWrapper.find(SocialLink).at(2);
        expect(thirdSocialLink.find(LinkedinWrapper)).toHaveLength(1);
        expect(thirdSocialLink.props().href).toEqual('https://www.linkedin.com/company/lendi');
      });

      it('should render Youtube icon in the first SocialLink', () => {
        const fourthSocialLink = socialWrapper.find(SocialLink).at(3);
        expect(fourthSocialLink.find(YoutubeWrapper)).toHaveLength(1);
        expect(fourthSocialLink.props().href).toEqual(
          'https://www.youtube.com/channel/UClqvf6ktIXZtlD556hyFq1g/featured'
        );
      });
    });
  });
});
