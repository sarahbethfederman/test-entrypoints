import * as React from 'react';

import {
  Direction,
  ChatBubbleProps,
  SidebarCompoundComponent,
  ChatBubbleContentProps,
  ChatBubbleFooterProps,
} from './types';
import { Wrapper, ChatBubbleContentWrapper, AlignmentDiv } from './index.style';

export interface ChatContextState {
  direction: Direction;
  hasTail: boolean;
}

const ChatContext = React.createContext<ChatContextState>({ direction: 'left', hasTail: false });

const ChatBubble: React.FunctionComponent<ChatBubbleProps> & SidebarCompoundComponent = ({
  direction = 'left',
  hasTail = true,
  children,
  ...props
}) => {
  return (
    <ChatContext.Provider value={{ direction, hasTail }}>
      <Wrapper direction={direction} {...props} data-testid="chat-bubble">
        <AlignmentDiv direction={direction}>{children}</AlignmentDiv>
      </Wrapper>
    </ChatContext.Provider>
  );
};

const Content: React.FC<ChatBubbleContentProps> = ({ children, ...props }) => {
  const { direction, hasTail } = React.useContext(ChatContext);
  return (
    <ChatBubbleContentWrapper direction={direction} hasTail={hasTail} data-testid="chat-bubble-content" {...props}>
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
