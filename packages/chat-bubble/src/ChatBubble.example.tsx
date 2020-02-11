import * as React from 'react';
import styled from 'styled-components';
import { bg, fg, color } from '@lendi-ui/color';
import { Body, Heading } from '@lendi-ui/typography';
import { mb, p, mr, ml } from '@lendi-ui/spacing';
import ChatBubble from './index';

const ExampleHeading = styled(Heading)`
    ${mb('xl')}
    border-bottom: 1px solid ${color('shade.100')};
`;

const ChatWrapper = styled.div`
  margin: 50px auto;
  padding: 50px;
  width: 330px;
  border: 1px solid ${color('shade.100')};
  ${mb('lg')}
`;

const TeamViewChatWrapper = styled.div`
  margin: 50px auto;
  padding: 50px;
  width: 330px;
  border: 1px solid ${color('shade.100')};
`;

const BrokerChatBubble = styled(ChatBubble)`
  ${mb('xs')}
  ${mr('md')}
`;

const CustomerChatBubble = styled(ChatBubble)`
  ${mb('xs')}
  ${ml('md')}
`;

const BrokerContent = styled(ChatBubble.Content)`
  ${bg('shade.100')} ${fg('secondary.700')}
`;

const CustomerContent = styled(ChatBubble.Content)`
  ${bg('primary.500')} ${fg('shade.0')}
`;

const TeamViewContent = styled(ChatBubble.Content)`
  ${bg('secondary.500')} ${fg('shade.0')}
`;

const ContentBodyWrapper = styled(Body)`
  ${p('xs')}
`;

export default () => (
  <>
    <ChatWrapper>
      <ExampleHeading>Customer View:</ExampleHeading>
      <BrokerChatBubble direction="left">
        <BrokerContent>
          <ContentBodyWrapper size="sm">Hello</ContentBodyWrapper>
        </BrokerContent>
      </BrokerChatBubble>
      <CustomerChatBubble direction="right">
        <CustomerContent>
          <ContentBodyWrapper size="sm">It's very nice to meet you.</ContentBodyWrapper>
        </CustomerContent>
        <ChatBubble.Footer>
          <Body size="xs" color="shade.200" mt="xxxs">
            12:35PM Read
          </Body>
        </ChatBubble.Footer>
      </CustomerChatBubble>
    </ChatWrapper>
    <TeamViewChatWrapper>
      <ExampleHeading>Broker View:</ExampleHeading>

      <CustomerChatBubble direction="right">
        <TeamViewContent>
          <ContentBodyWrapper size="sm">
            Hi there, I’d like to know something, can you help me to get a loan?
          </ContentBodyWrapper>
        </TeamViewContent>
      </CustomerChatBubble>
      <BrokerChatBubble direction="left">
        <BrokerContent>
          <ContentBodyWrapper size="sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore.
          </ContentBodyWrapper>
        </BrokerContent>
        <ChatBubble.Footer>
          <Body size="xs" color="shade.200" mt="xxxs">
            12:35PM Read
          </Body>
        </ChatBubble.Footer>
      </BrokerChatBubble>
    </TeamViewChatWrapper>
  </>
);
