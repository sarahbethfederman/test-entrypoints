import * as React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Heading } from '@lendi-ui/typography';
import { body } from '@lendi-ui/typography';
import { mb } from '@lendi-ui/spacing';
import { Workspace } from '../../../utils/info';
import { DocumentViewer } from '../../../utils/DocumentViewer';
import { Link } from 'react-router-dom';

const Description = styled.p`
  ${body({ size: 'lg' })};
`;

const Section = styled.section`
  ${mb('md')};
`;

export interface OverviewProps {
  workspace: Workspace;
}

export class Overview extends React.Component<OverviewProps> {
  get indexDoc() {
    const { workspace } = this.props;
    return workspace.docs.find((doc) => doc.name === 'index');
  }

  render() {
    const {
      workspace: { org, name, description, examples },
    } = this.props;
    return (
      <>
        <Helmet>
          <title>{name}</title>
        </Helmet>

        {description && <Description>{description}</Description>}

        {examples.length > 0 && (
          <Section>
            <Heading size="lg">Examples</Heading>
            <ul>
              {examples.map((example) => (
                <li key={example.slug}>
                  <Link to={`/package/${name}/example/${example.slug}`} target="_blank">
                    {example.name}
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

        {this.indexDoc && <DocumentViewer loader={this.indexDoc.load} />}
      </>
    );
  }
}
