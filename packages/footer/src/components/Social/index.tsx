import * as React from 'react';
import { SOCIAL_LOGO_AND_LINKS } from '../../constants';
import { Wrapper, SocialLogoWrapper, SocialLogo } from './index.style';
import Logo from '@lendi-ui/logo';

export const Social = () => {
  return (
    <Wrapper>
      <Logo variant="light" />
      <SocialLogoWrapper>
        {SOCIAL_LOGO_AND_LINKS.map((social) => {
          const LogoIcon = social.logo;
          return (
            <SocialLogo key={social.url} href={social.url}>
              <LogoIcon color="shade.0" />
            </SocialLogo>
          );
        })}
      </SocialLogoWrapper>
    </Wrapper>
  );
};
