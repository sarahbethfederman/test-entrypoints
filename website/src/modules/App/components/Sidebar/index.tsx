import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '@lendi-ui/logo';
import Heading from '@lendi-ui/heading';
import { fg } from '@lendi-ui/color';

import metadata, { Doc } from '../../../../utils/info';
import { Wrapper, LogoWrapper, NavGroup, SubNav } from './index.style';

const foundations = ['color', 'typography', 'breakpoint', 'spacing', 'grid', 'reset', 'theme'];

const ignoreIndexDoc = (doc: Doc) => doc.name !== 'index';

const SidebarLink = styled(Link)`
  ${fg('primary.500')};
  text-decoration: none;
`;

const KickerLink = styled(Link)`
  ${fg('shade.500')};
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
`;

export class Sidebar extends React.Component {
  get foundations() {
    const { workspaces } = metadata;
    return workspaces
      .filter((workspace) => foundations.includes(workspace.name))
      .filter((workspace) => workspace.name !== 'reset' && workspace.name !== 'theme');
  }

  get components() {
    const { workspaces } = metadata;
    return workspaces.filter((workspace) => !foundations.includes(workspace.name));
  }

  render() {
    return (
      <Wrapper>
        <LogoWrapper>
          <SidebarLink to="/">
            <Logo />
          </SidebarLink>
        </LogoWrapper>

        <NavGroup>
          <SidebarLink to={`/overview`}>Overview</SidebarLink>
        </NavGroup>

        <NavGroup>
          <Heading size="sm">Getting Started</Heading>
          <SidebarLink to={`/getting-started/setup`}>Setup</SidebarLink>
        </NavGroup>

        <NavGroup>
          <Heading size="sm">Foundations</Heading>
          {this.foundations.map((workspace) => (
            <div key={workspace.name}>
              <KickerLink to={`/package/${workspace.name}`}>{workspace.name}</KickerLink>
              {Boolean(workspace.docs.filter(ignoreIndexDoc).length) && (
                <SubNav>
                  {workspace.docs.filter(ignoreIndexDoc).map((doc) => (
                    <div key={doc.name}>
                      <SidebarLink to={`/package/${workspace.name}/${doc.name}`}>{doc.name}</SidebarLink>
                    </div>
                  ))}
                </SubNav>
              )}
            </div>
          ))}
        </NavGroup>

        <NavGroup>
          <Heading size="sm">Components</Heading>
          {this.components.map((workspace) => (
            <div key={workspace.name}>
              <SidebarLink to={`/package/${workspace.name}`}>{workspace.name}</SidebarLink>
              {Boolean(workspace.docs.filter(ignoreIndexDoc).length) && (
                <SubNav>
                  {workspace.docs.filter(ignoreIndexDoc).map((doc) => (
                    <div key={doc.name}>
                      <SidebarLink to={`/package/${workspace.name}/${doc.name}`}>{doc.name}</SidebarLink>
                    </div>
                  ))}
                </SubNav>
              )}
            </div>
          ))}
        </NavGroup>
      </Wrapper>
    );
  }
}
