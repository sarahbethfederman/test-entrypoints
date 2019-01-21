import * as React from 'react';
import Navbar from '.';
import styled from 'styled-components';
import { bg } from '@lendi-ui/color';
import { Button, ButtonGroup } from '@lendi-ui/button';
import { p } from '@lendi-ui/spacing';
import { Heading } from '@lendi-ui/typography';
import { Application, Broker, Applicant } from './types';

const Wrapper = styled.div`
  ${bg('info.300')};
  height: 5000px;
  overflow: auto;
`;

const HeroPanel = styled.div`
  min-height: 600px;
  ${bg('warn.100')};
  ${p('lg')};
`;

const BROKER_DATA = {
  photo: 'https://s3-ap-southeast-2.amazonaws.com/acf-profile-photo/Jack+Chen.jpg',
  fullName: 'Jack Chen',
  phone: '02 9048 5786',
  title: 'Lendi Broker',
};

const STARTED_APPLICATION = {
  type: 'Refinance',
  sfid: '123',
  number: 6,
  stage: 'started_application',
  continueURL: '/dashboard/123',
  applicants: [],
};

const PRIMARY_APPLICANT = {
  uuid: '333',
  sfid: 'aaabbbccc',
  type: 'primary',
  firstName: 'Jack',
};

const SECONDARY_APPLICANT = {
  uuid: '444',
  sfid: 'dddeeefff',
  type: 'secondary',
  firstName: 'Jill',
};

const FINISHED_FUNNEL2 = {
  type: 'Refinance',
  sfid: '123',
  number: 6,
  stage: 'finished_funnel2',
  continueURL: '/dashboard/123',
  applicants: [PRIMARY_APPLICANT, SECONDARY_APPLICANT],
};

const FINISHED_FUNNEL3 = {
  type: 'Refinance',
  sfid: '123',
  number: 6,
  stage: 'finished_funnel3',
  continueURL: '/dashboard/123',
  applicants: [PRIMARY_APPLICANT, SECONDARY_APPLICANT],
};

interface State {
  isAuthenticated?: boolean;
  broker?: Broker;
  application?: Application;
  variant?: 'transparent' | 'white';
}

class NavbarExample extends React.Component {
  state: State = {
    isAuthenticated: false,
    broker: undefined,
    application: undefined,
    variant: 'transparent',
  };

  onChat = () => {
    console.log('Chat is triggered');
  };

  onLogOut = () => {
    console.log('Log out is clicked');
  };

  render() {
    const { isAuthenticated, broker, application, variant } = this.state;
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
          <Heading size="xs" my="md">
            Feel free to play around to view the different state of the navbar.
          </Heading>
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
              Authentication
            </Heading>
            <ButtonGroup size="lg">
              <Button variant="secondary" onClick={() => this.setState({ isAuthenticated: true })}>
                Authenticated
              </Button>
              <Button
                variant="secondary"
                onClick={() => this.setState({ isAuthenticated: false, broker: undefined, application: undefined })}
              >
                Unauthenticated
              </Button>
            </ButtonGroup>
          </div>
          {isAuthenticated && (
            <div>
              <div>
                <Heading size="md" my="xs">
                  Broker status (Changes in the Rigth Sidebar)
                </Heading>
                <ButtonGroup size="lg">
                  <Button variant="secondary" onClick={() => this.setState({ broker: BROKER_DATA })}>
                    With Broker
                  </Button>
                  <Button variant="secondary" onClick={() => this.setState({ broker: undefined })}>
                    Without Broker
                  </Button>
                </ButtonGroup>
              </div>

              <div>
                <Heading size="md" my="xs">
                  Application status (Changes in the Left Sidebar)
                </Heading>
                <ButtonGroup size="lg">
                  <Button variant="secondary" onClick={() => this.setState({ application: undefined })}>
                    No application
                  </Button>
                  <Button variant="secondary" onClick={() => this.setState({ application: STARTED_APPLICATION })}>
                    Started application
                  </Button>
                  <Button variant="secondary" onClick={() => this.setState({ application: FINISHED_FUNNEL2 })}>
                    Finished funnel 2
                  </Button>
                  <Button variant="secondary" onClick={() => this.setState({ application: FINISHED_FUNNEL3 })}>
                    Finished funnel 3
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          )}
        </HeroPanel>
      </Wrapper>
    );
  }
}

export default NavbarExample;
