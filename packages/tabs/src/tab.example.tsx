import * as React from 'react';
import styled, { css } from 'styled-components';
import { Lock } from '../../icon/src';
import Tabs from '.';
import { bg } from '@lendi-ui/color';
import { py, px, pr } from '@lendi-ui/spacing';
import { Body } from '@lendi-ui/typography';

const Container = styled.div`
  width: 100%;
`;

export const StyledTeamViewTabs = styled(Tabs)`
  ${bg('shade.0')}
  height:50px;
`;
export const FullStrechTab = styled(Tabs.Tab)`
  flex-basis: 50%;
`;

export const StyledTab = styled(Tabs.Tab)`
  ${px('md')};
  ${py('xxs')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.span`
  margin-bottom: -4px;
  ${({ makeBold }: { makeBold?: boolean }) =>
    makeBold &&
    css`
      font-weight: bold;
    `}
`;
export const StyledLock = styled(Lock)`
  ${pr('xxs')}
`;

export default class TabsExample extends React.Component {
  state = {
    activeTabIndex: 0,
  };

  render() {
    return (
      <Container>
        <Body>Customized with consumer's defined padding and margin with active bar style</Body>
        <StyledTeamViewTabs
          id="tabId"
          data-data="moreData"
          aria-label="tabLabel"
          onChangeTabIndex={(activeTabIndex) => this.setState({ activeTabIndex })}
          activeTabIndex={this.state.activeTabIndex}
          isInverse
          activeBarStyles={{ height: '5px' }}
        >
          <StyledTab>
            <Label makeBold={0 === this.state.activeTabIndex}>SUMMARY</Label>
          </StyledTab>
          <StyledTab>
            <Label makeBold={1 === this.state.activeTabIndex}>ASSETS</Label>
          </StyledTab>
          <StyledTab>
            <Label makeBold={2 === this.state.activeTabIndex}>LIABILITIES</Label>
          </StyledTab>
          <StyledTab>
            <Label makeBold={3 === this.state.activeTabIndex}>APPLICATION NOTES</Label>
          </StyledTab>
          <StyledTab>
            <Label makeBold={4 === this.state.activeTabIndex}>OTHERS</Label>
          </StyledTab>
        </StyledTeamViewTabs>
        <br />
        <br />
        <Body>Full stretch tabs without active bar styling</Body>
        <StyledTeamViewTabs
          onChangeTabIndex={(activeTabIndex) => this.setState({ activeTabIndex })}
          activeTabIndex={this.state.activeTabIndex}
          isInverse
        >
          <FullStrechTab>
            <Label makeBold={0 === this.state.activeTabIndex}>Active Applications</Label>
          </FullStrechTab>
          <FullStrechTab>
            <Label makeBold={1 === this.state.activeTabIndex}>InActive Applications</Label>
          </FullStrechTab>
        </StyledTeamViewTabs>
        <br />
        <br />

        <Body>Customized header with icon</Body>
        <StyledTeamViewTabs
          id="tabId"
          data-data="moreData"
          aria-label="tabLabel"
          onChangeTabIndex={(activeTabIndex) => this.setState({ activeTabIndex })}
          activeTabIndex={this.state.activeTabIndex}
          isInverse
        >
          <StyledTab icon={<StyledLock color="secondary.500" />}>
            <Label makeBold={0 === this.state.activeTabIndex}>SUMMARY</Label>
          </StyledTab>
          <StyledTab icon={<StyledLock color="secondary.500" />}>
            <Label makeBold={1 === this.state.activeTabIndex}>ASSETS</Label>
          </StyledTab>
          <StyledTab icon={<StyledLock color="secondary.500" />}>
            <Label makeBold={2 === this.state.activeTabIndex}>LIABILITIES</Label>
          </StyledTab>
          <StyledTab icon={<StyledLock color="secondary.500" />}>
            <Label makeBold={3 === this.state.activeTabIndex}>APPLICATION NOTES</Label>
          </StyledTab>
          <StyledTab icon={<StyledLock color="secondary.500" />}>
            <Label makeBold={4 === this.state.activeTabIndex}>OTHERS</Label>
          </StyledTab>
        </StyledTeamViewTabs>
        <br />
        <br />

        <Body>Without any padding and margin</Body>

        <Tabs
          id="tabId"
          data-data="moreData"
          aria-label="tabLabel"
          onChangeTabIndex={(activeTabIndex) => this.setState({ activeTabIndex })}
          activeTabIndex={this.state.activeTabIndex}
          isInverse
          className="myClass"
        >
          <Tabs.Tab className="tabClass">SUMMARY</Tabs.Tab>
          <Tabs.Tab>ASSETS</Tabs.Tab>
          <Tabs.Tab>LIABILITIES</Tabs.Tab>
          <Tabs.Tab>APPLICATION NOTES</Tabs.Tab>
          <Tabs.Tab>OTHERS</Tabs.Tab>
        </Tabs>
        <br />
        <br />

        <Tabs
          id="tabId"
          data-data="moreData"
          aria-label="tabLabel"
          onChangeTabIndex={(activeTabIndex) => this.setState({ activeTabIndex })}
          activeTabIndex={this.state.activeTabIndex}
          isInverse
        >
          <Tabs.Tab icon={<Lock color="secondary.500" />}>1</Tabs.Tab>
          <Tabs.Tab icon={<Lock color="secondary.500" />}>2</Tabs.Tab>
          <Tabs.Tab icon={<Lock color="secondary.500" />}>3</Tabs.Tab>
          <Tabs.Tab icon={<Lock color="secondary.500" />}>4</Tabs.Tab>
          <Tabs.Tab icon={<Lock color="secondary.500" />}>5</Tabs.Tab>
        </Tabs>
        <br />
        <br />
        <Tabs
          onChangeTabIndex={(activeTabIndex) => this.setState({ activeTabIndex })}
          activeTabIndex={this.state.activeTabIndex}
        >
          <Tabs.Tab icon={<Lock color="secondary.500" />}>1</Tabs.Tab>
          <Tabs.Tab icon={<Lock color="secondary.500" />}>2</Tabs.Tab>
          <Tabs.Tab icon={<Lock color="secondary.500" />}>3</Tabs.Tab>
          <Tabs.Tab icon={<Lock color="secondary.500" />}>4</Tabs.Tab>
          <Tabs.Tab icon={<Lock color="secondary.500" />}>5</Tabs.Tab>
        </Tabs>
      </Container>
    );
  }
}
