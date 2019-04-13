import * as React from 'react';
import styled from 'styled-components';
import { bg } from '@lendi-ui/color';
import { Button, ButtonGroup } from '@lendi-ui/button';
import { p } from '@lendi-ui/spacing';
import { Heading } from '@lendi-ui/typography';
import { Input } from '@lendi-ui/text-input';

import { Application, Broker } from './types';
import Navbar, { fetchApplication, fetchBroker } from '.';

const Wrapper = styled.div`
  ${bg('info.300')};
  height: 2000px;
  overflow: auto;
`;

const HeroPanel = styled.div`
  min-height: 600px;
  ${bg('warn.100')};
  ${p('lg')};
`;

const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
  display: inline-block;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

interface State {
  baseURL: string;
  token: string;
  sfid: string;
  isReady: boolean;
  variant?: 'transparent' | 'white';
  application: Application | undefined;
  broker: Broker | undefined;
  isAuthenticated: boolean;
  isFetching: boolean;
}

class WithApplicationDataExample extends React.Component {
  state: State = {
    baseURL: 'https://lendi-api-prod.herokuapp.com',
    variant: 'transparent',
    token: '',
    sfid: '',
    isReady: false,
    application: undefined,
    broker: undefined,
    isAuthenticated: false,
    isFetching: false,
  };

  onChat = () => {
    alert('Chat is triggered');
  };

  onLogOut = () => {
    alert('Log out is clicked');
  };

  renderMenu = async () => {
    const { baseURL, token, sfid } = this.state;
    this.setState({ isFetching: true });

    const application = await fetchApplication(baseURL, token, sfid);
    const broker = await fetchBroker(baseURL, token);

    this.setState({
      broker,
      application,
      isAuthenticated: application.isAuth,
      isFetching: false,
    });
  };

  render() {
    const { variant, baseURL, token, sfid, broker, application, isAuthenticated, isFetching } = this.state;

    return (
      <Wrapper>
        <Navbar
          onChat={this.onChat}
          broker={broker}
          onLogout={this.onLogOut}
          isAuthenticated={isAuthenticated}
          application={application}
          variant={variant}
        />
        <HeroPanel>
          <Heading size="xs" my="md" />
          {isFetching && (
            <div>
              <Heading size="md" my="xs">
                <Loader /> Loading
              </Heading>
            </div>
          )}
          <div>
            <Heading size="md" my="xs">
              Header Variant
            </Heading>
            <ButtonGroup size="lg">
              <Button variant="secondary" onClick={() => this.setState({ variant: 'transparent' })}>
                Transparent
              </Button>
              <Button variant="secondary" onClick={() => this.setState({ variant: 'white' })}>
                White
              </Button>
            </ButtonGroup>
          </div>
          <div>
            <Heading size="md" my="xs">
              Base URL:
            </Heading>
            <Input
              placeholder="Insert base URL here...."
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ baseURL: e.target.value })}
              value={baseURL}
            />
          </div>
          <div>
            <Heading size="md" my="xs">
              Token:
            </Heading>
            <Input
              placeholder="Insert token here...."
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ token: e.target.value })}
              value={token}
              isFullWidth
            />
          </div>
          <div>
            <Heading size="md" my="xs">
              SFID:
            </Heading>
            <Input
              placeholder="Insert sfid here...."
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ sfid: e.target.value })}
              value={sfid}
              isFullWidth
            />
          </div>
          <div>
            <Heading size="md" my="xs">
              Ready to render?
            </Heading>
            <Button variant="primary" onClick={this.renderMenu}>
              Click Here to re-render
            </Button>
          </div>
        </HeroPanel>
      </Wrapper>
    );
  }
}

export default WithApplicationDataExample;
