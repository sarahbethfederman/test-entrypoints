import * as React from 'react';

import {
  Direction,
  ChatBubbleProps,
  SidebarCompoundComponent,
  ChatBubbleContentProps,
  ChatBubbleFooterProps,
} from './types';
import { Wrapper, ChatBubbleContentWrapper } from './index.style';

const ChatContext = React.createContext('left' as Direction);

const ChatBubble: React.FunctionComponent<ChatBubbleProps> & SidebarCompoundComponent = ({
  direction = 'left',
  children,
  ...props
}) => {
  return (
    <ChatContext.Provider value={direction}>
      <Wrapper direction={direction} {...props} data-testid="chat-bubble">
        {children}
      </Wrapper>
    </ChatContext.Provider>
  );
};

const Content: React.FC<ChatBubbleContentProps> = ({ children, ...props }) => {
  const ChatDirection: Direction = React.useContext(ChatContext);
  return (
    <ChatBubbleContentWrapper direction={ChatDirection} data-testid="chat-bubble-content" {...props}>
      {children}
    </ChatBubbleContentWrapper>
  );
};

ChatBubble.Content = Content;

const Footer: React.FunctionComponent<ChatBubbleFooterProps> = ({ children, ...props }) => (
  <span {...props}>{children}</span>
);
ChatBubble.Footer = Footer;

export default ChatBubble;
export * from './types';
