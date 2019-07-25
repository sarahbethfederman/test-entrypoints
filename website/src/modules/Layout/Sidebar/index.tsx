import * as React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import Logo from '@lendi-ui/logo';
import Dropdown from '@lendi-ui/dropdown';
import { Heading, overline, link } from '@lendi-ui/typography';
import { pl } from '@lendi-ui/spacing';
import { color } from '@lendi-ui/color';

import { ThemeType, AppContext } from '../../Common';
import metadata, { Doc } from '../../../utils/info';
import { foundations } from '../../../utils/constants';
import { Wrapper, LogoWrapper, NavGroup, SubNav } from './index.style';

const themeItems: { value: ThemeType; label: string }[] = [
  { value: 'Lendi', label: 'Lendi' },
  { value: 'Domain', label: 'Domain' },
];

const ignoreIndexDoc = (doc: Doc) => doc.name !== 'index';

const SidebarLink = styled(Link)`
  display: block;
  ${link({ color: 'primary.500' })} text-decoration: none;
`;

const SidebarHeader = styled(SidebarLink)`
  ${overline};
`;

const SidebarGroup = styled.div`
  ${pl('xxxs')} ${({ isSelected = false }: { isSelected: boolean }) => {
    if (isSelected) {
      return css`
        border-left: 4px solid ${color('secondary.500')};
      `;
    }
    return css`
      border-left: 4px solid transparent;
    `;
  }};
`;

export interface SidebarProps {
  match: string;
}

export class Sidebar extends React.Component<SidebarProps> {
  get foundations() {
    const { workspaces } = metadata;
    return workspaces.filter((workspace) => foundations.includes(workspace.name));
  }

  get components() {
    const { workspaces } = metadata;
    return workspaces.filter((workspace) => !foundations.includes(workspace.name));
  }

  render() {
    const { match } = this.props;

    return (
      <Wrapper>
        <LogoWrapper>
          <SidebarLink to="/">
            <Logo />
          </SidebarLink>
        </LogoWrapper>

        <NavGroup>
          <Heading size="sm">Getting Started</Heading>
          <SidebarLink to="/pages/getting-started">Setup</SidebarLink>
          <SidebarLink to="/pages/whitelist">Whitelist</SidebarLink>
          <SidebarLink to="/pages/changes">Recent Changes</SidebarLink>
        </NavGroup>

        <NavGroup>
          <Heading size="sm">Select theme</Heading>
          <AppContext.Consumer>
            {({ theme, changeTheme }) => (
              <Dropdown
                size={{ mobile: 'sm', tablet: 'md', desktop: 'lg' }}
                items={themeItems}
                isFullWidth
                value={theme}
                onChange={(value) => changeTheme(value as ThemeType)}
              />
            )}
          </AppContext.Consumer>
        </NavGroup>

        <NavGroup>
          <Heading size="sm">Foundations</Heading>
          {this.foundations.map((workspace) => (
            <SidebarGroup key={workspace.name} isSelected={workspace.name === match}>
              <SidebarHeader size="lg" to={`/packages/${workspace.name}`}>
                {workspace.name}
              </SidebarHeader>
              {Boolean(workspace.docs.filter(ignoreIndexDoc).length) && (
                <SubNav>
                  {workspace.docs.filter(ignoreIndexDoc).map((doc) => (
                    <div key={doc.name}>
                      <SidebarLink to={`/packages/${workspace.name}/${doc.slug}`}>{doc.name}</SidebarLink>
                    </div>
                  ))}
                </SubNav>
              )}
            </SidebarGroup>
          ))}
        </NavGroup>

        <NavGroup>
          <Heading size="sm">Components</Heading>
          {this.components.map((workspace) => (
            <SidebarGroup key={workspace.name} isSelected={workspace.name === match}>
              <SidebarHeader size="lg" to={`/packages/${workspace.name}`}>
                {workspace.name}
              </SidebarHeader>
              <SubNav>
                {Boolean(workspace.docs.filter(ignoreIndexDoc).length) && (
                  <>
                    {workspace.docs.filter(ignoreIndexDoc).map((doc) => (
                      <div key={doc.name}>
                        <SidebarLink to={`/packages/${workspace.name}/${doc.slug}`}>{doc.name}</SidebarLink>
                      </div>
                    ))}
                  </>
                )}
              </SubNav>
            </SidebarGroup>
          ))}
        </NavGroup>
      </Wrapper>
    );
  }
}
