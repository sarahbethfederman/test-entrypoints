import * as React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Heading, body, Body, Link as LuiLink } from '@lendi-ui/typography';
import Alert from '@lendi-ui/alert';
import { color } from '@lendi-ui/color';
import { mb } from '@lendi-ui/spacing';
import { Button } from '@lendi-ui/button';
import Modal from '@lendi-ui/modal';
import { Workspace } from '../../../utils/info';
import { DocumentViewer } from '../../../utils/DocumentViewer';
import { foundations } from '../../../utils/constants';

const Description = styled.p`
  ${body({ size: 'lg' })};
`;

const Section = styled.section`
  ${mb('md')};
`;

const ButtonContainer = styled.div`
  position: relative;
`;

const ChangelogButton = styled(Button)`
  position: absolute;
  right: 0;
`;

const Changelog = styled.div`
  font-family: 'Open-sans', sans-serif;
  max-height: 70vh;
  max-width: 500px;
  overflow: scroll;

  h2 {
    color: ${color('secondary.500')};
  }

  h3 {
    color: ${color('secondary.500')};
  }

  a {
    color: ${color('primary.500')};
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    cursor: pointer;
    -webkit-text-decoration: none;
    text-decoration: none;

    :hover {
      -webkit-text-decoration: underline;
      text-decoration: underline;
    }
  }
`;

export interface OverviewProps {
  workspace: Workspace;
}

export class Overview extends React.Component<OverviewProps> {
  state = {
    active: false,
  };

  get indexDoc() {
    const { workspace } = this.props;
    return workspace.docs.find((doc) => doc.name === 'index');
  }

  onShow = () => {
    this.setState({
      active: true,
    });
  };

  onHide = () => {
    this.setState({
      active: false,
    });
  };

  render() {
    const {
      workspace: { org, name, description, deprecated, examples },
    } = this.props;
    const { workspace } = this.props;
    const CHANGELOG = require(`@lendi-ui/${name}/CHANGELOG.md`);
    const isFoundation = foundations.some((foundation) => workspace.name.includes(foundation));

    return (
      <>
        <Helmet>
          <title>{name}</title>
        </Helmet>

        {description && <Description>{description}</Description>}

        {/* Changelog */}
        <ButtonContainer>
          <ChangelogButton variant="primary" onClick={this.onShow}>
            Changelog
          </ChangelogButton>
        </ButtonContainer>

        {examples.length > 0 && (
          <Section>
            <Heading size="lg">Examples</Heading>
            <ul>
              {examples.map((example) => (
                <li key={example.slug}>
                  <Link to={`/packages/${name}/example/${example.slug}`} target="_blank">
                    <LuiLink>{example.name}</LuiLink>
                  </Link>
                </li>
              ))}
            </ul>
          </Section>
        )}

        <Section>
          <Heading size="lg">Installation</Heading>
          <code>
            yarn add {org}/{name}
          </code>
        </Section>

        <Section>
          {deprecated && (
            <Alert variant="error" heading="Deprecated">
              {deprecated}
            </Alert>
          )}
        </Section>

        <Modal isVisible={this.state.active} size="lg" onHide={this.onHide}>
          <Modal.Content>
            <Changelog dangerouslySetInnerHTML={{ __html: CHANGELOG }} />
          </Modal.Content>
        </Modal>

        {this.indexDoc && <DocumentViewer loader={this.indexDoc.load} />}

        {!isFoundation && (
          <Body mt="md">
            This component has support for some native attributes, read{' '}
            <LuiLink href="/pages/whitelist">the whitelist</LuiLink> to find out more.
          </Body>
        )}
      </>
    );
  }
}
