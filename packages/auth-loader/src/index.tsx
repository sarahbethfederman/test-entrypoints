import * as React from 'react';
import { Body } from '@lendi-ui/typography';
import { LUIGlobalProps } from '@lendi-ui/utils';
import { Wrapper, Main, LendiLogoSvgWrapper, LendiLogoPathWrapper } from './index.style';

const AuthLoader = (props: LUIGlobalProps) => (
  <Wrapper {...props}>
    <Main>
      <LendiLogoSvgWrapper viewBox="0 0 120 120">
        <LendiLogoPathWrapper d="M100.456,98.513h-43.3V70.057H53.582V98.513H10.28A1.28,1.28,0,0,1,9,97.233V40.059a1.281,1.281,0,0,1,.583-1.074L55.5,9.206a1.281,1.281,0,0,1,1.409.011l44.265,29.65a1.28,1.28,0,0,1,.567,1.063v57.3A1.28,1.28,0,0,1,100.456,98.513Z" />
      </LendiLogoSvgWrapper>
      <Body size="lg" color="secondary.500" mt="lg">
        Loading....You’re moving along nicely.
      </Body>
    </Main>
  </Wrapper>
);

export default AuthLoader;
