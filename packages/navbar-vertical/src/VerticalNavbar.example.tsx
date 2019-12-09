import * as React from 'react';
import styled, { css } from 'styled-components';
import Logo from '@lendi-ui/logo';
import { body, Body } from '@lendi-ui/typography';
import NavbarBase from '@lendi-ui/navbar-base';

import VerticalNavbar, { VerticalNavContext } from './index';
import { p, px } from '@lendi-ui/spacing';

const menus = [
  { text: 'Home loan basics', icon: '🏡' },
  { text: 'Property', icon: '🏚' },
  { text: 'Applicants', icon: '👨‍👩‍👧‍👦' },
  { text: 'Income & expenses', icon: '💵' },
  { text: 'Assets & liabilities', icon: '🚙' },
  { text: 'Needs & Objectives', icon: '🥅' },
  { text: 'Workshop your deal', icon: '💸' },
  { text: 'Choose your loan', icon: '✌️' },
  { text: 'Deal IQ', icon: '🖥' },
  { text: 'Required documents', icon: '📑' },
  { text: 'Logout', icon: '🚪' },
];

const Wrapper = styled.div`
  min-height: calc(100vh - 3 * var(--lendi-ui-size));
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'sidebar header'
    'sidebar content';
`;

const GridVerticalNavbar = styled(VerticalNavbar)`
  grid-area: sidebar;
`;

interface ExpandedProp {
  isExpanded: boolean;
}

const expandableWidth = css<ExpandedProp>`
  width: ${({ isExpanded }) => (isExpanded ? '105px' : '50px')};
`;

const VNHeader = styled(VerticalNavbar.Header)<ExpandedProp>`
  ${expandableWidth};
  ${px('sm')};
`;

const VNTab = styled(VerticalNavbar.Tab)<ExpandedProp>`
  ${expandableWidth};
  ${px('xxs')};
`;

const GridNavbarBase = styled.div`
  grid-area: header;
`;

const TabContent = styled.div`
  ${body({ size: 'xs' })};
  font-weight: 700;
  text-transform: uppercase;
`;

const NavBody = styled(Body)`
  ${p('sm')};
`;

const Content = styled.div`
  grid-area: content;
  ${p('md')};
`;

export default () => {
  const [currentTab, setCurrentTab] = React.useState<number>(0);

  return (
    <Wrapper>
      <GridVerticalNavbar>
        <VerticalNavContext.Consumer>
          {({ isExpanded }) => (
            <>
              <VNHeader isExpanded={isExpanded}>
                <Logo width="100%" height="56px" variant="light" />
              </VNHeader>

              {menus.map((menu, i) => (
                <VNTab
                  key={i}
                  disabled={i === 6}
                  selected={i === currentTab}
                  onClick={() => setCurrentTab(i)}
                  tooltip={menu.text}
                  isExpanded={isExpanded}
                  maxHeight="78px"
                >
                  <div>{menu.icon}</div>
                  {isExpanded && <TabContent>{menu.text}</TabContent>}
                </VNTab>
              ))}
            </>
          )}
        </VerticalNavContext.Consumer>
      </GridVerticalNavbar>

      <GridNavbarBase>
        <NavbarBase>
          <NavbarBase.Left>
            <NavBody>Bruce Bogtrotter</NavBody>
          </NavbarBase.Left>

          <NavbarBase.Right>
            <NavBody>Logout</NavBody>
          </NavbarBase.Right>
        </NavbarBase>
      </GridNavbarBase>

      <Content>
        {Array.apply(null, Array(200)).map((item, i) => (
          <Body>Hello {i}</Body>
        ))}
      </Content>
    </Wrapper>
  );
};
