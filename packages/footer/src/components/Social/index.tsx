import * as React from 'react';
import { SOCIAL_LOGO_AND_LINKS } from '../../constants';
import { Wrapper, SocialLogoWrapper, SocialLogo } from './index.style';
import Logo from '@lendi-ui/logo';
import { WindowPosition } from '@lendi/lendi-analytics-package';
import { AnalyticsContext } from '@lendi-ui/utils';

export class Social extends React.Component {
  static contextType: any = AnalyticsContext;
  render() {
    return (
      <Wrapper>
        <Logo variant="light" />
        <SocialLogoWrapper>
          {SOCIAL_LOGO_AND_LINKS.map((social) => {
            const LogoIcon = social.logo;
            return (
              <SocialLogo
                key={social.url}
                href={social.url}
                onClick={() => {
                  this.context.analyticsForNavigation('logo', WindowPosition.footer);
                }}
              >
                <LogoIcon color="shade.0" />
              </SocialLogo>
            );
          })}
        </SocialLogoWrapper>
      </Wrapper>
    );
  }
}
