import * as React from 'react';
import NavbarBase from './components/NavbarBase';
import styled, { css } from 'styled-components';
import { gte } from '@lendi-ui/breakpoint';
import { Logo, LogoProps } from '@lendi-ui/logo';
// @ts-ignore
import * as NewLogo from './assets/Lendi-Logo-Pos.svg';
// @ts-ignore
import * as DomainLogo from './assets/domain-logo.svg';
import { Button, ButtonGroup } from '@lendi-ui/button';
import { Body } from '@lendi-ui/typography';
import { bg } from '@lendi-ui/color';
import { p, m } from '@lendi-ui/spacing';
import { ThemeMap, select } from '@lendi-ui/theme';
import { useNavbarBaseContext } from './context/NavbarContext';

const IntHeaderLogo = () => {
  const { isTransparent } = useNavbarBaseContext();
  return <HeaderLogo variant={isTransparent ? 'light' : 'dark'} />;
};

const IntMyBody = () => {
  const { isTransparent } = useNavbarBaseContext();
  return <MyBody isTransparent={isTransparent}>The content ---- The content ---- The content</MyBody>;
};

const InitButtons = () => {
  const { isTransparent } = useNavbarBaseContext();
  return (
    <ButtonGroup size="sm" isInverse={isTransparent}>
      <ButtonGroup.Button variant="secondary">Continue</ButtonGroup.Button>
      <ButtonGroup.Button variant="secondary">Next</ButtonGroup.Button>
    </ButtonGroup>
  );
};

const LogoWrapper = styled.div`
  ${m('sm')}
`;

export default () => {
  const [useTransparent, setUseTransparent] = React.useState<boolean>(false);
  return (
    <>
      <Banner>
        Notification: Reserve Bank <strong>cuts rate</strong> to record low of 0.75%.{' '}
      </Banner>
      <Wrapper>
        <NavbarBase isTransparent={useTransparent}>
          <NavbarBase.Left>
            <LogoWrapper>
              <LogoLink href={`/`}>
                <IntHeaderLogo />
              </LogoLink>
            </LogoWrapper>
          </NavbarBase.Left>

          <NavbarBase.Right>
            <InitButtons />
          </NavbarBase.Right>
        </NavbarBase>
        <Panel>
          <ButtonGroup size="lg">
            <Button variant="secondary" onClick={() => setUseTransparent(true)}>
              Transparent
            </Button>
            <Button variant="secondary" onClick={() => setUseTransparent(false)}>
              White
            </Button>
          </ButtonGroup>
        </Panel>
      </Wrapper>
    </>
  );
};

export const Panel = styled.div`
  min-height: 250px;
  ${bg('warn.50')};
  ${p('lg')};
`;
interface BodyProps {
  isTransparent?: boolean;
}
const MyBody = styled(Body)<BodyProps>`
  ${({ isTransparent }: BodyProps) => css`
    ${isTransparent
      ? `color: white;
      `
      : css`
          color: black;
        `};
  `}
`;

export const LogoLink = styled.a`
  cursor: pointer;
  ${m('sm')}
`;

export const HeaderLogo = styled(Logo)<LogoProps>`
  width: 98px;
  height: 30px;
  padding-bottom: 4px;
  ${({ theme }: { theme: ThemeMap }) =>
    select('logo.logoName')({ theme }) === 'LendiLogo'
      ? css`
          content: url(${NewLogo});
          ${gte('tablet')`
          width: 104px;
          height: 33px;
        `};
        `
      : css`
          content: url(${DomainLogo});
          ${gte('tablet')`
          width: 240px;
          height: 33px;
        `};
        `}
`;

const Wrapper = styled.div`
  ${bg('info.300')};
  height: 2000px;
  overflow: auto;
`;

const Banner = styled(Body)`
  text-align: center;
  vertical-align: middle;
  color: rgb(26, 188, 156);
  font-size: x-large;
  padding: 10px;
  ${bg('success.100')}
`;
