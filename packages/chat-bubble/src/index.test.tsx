import * as React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Theme from '@lendi-ui/theme';
import ChatBubble, { ChatBubbleProps } from './index';

const TestChatBubble = ({ direction }: ChatBubbleProps) => (
  <Theme>
    <ChatBubble direction={direction}>
      <ChatBubble.Content className="cutomer-class" itemID="chat-content">
        Can you help me to get a loan?
      </ChatBubble.Content>
      <ChatBubble.Footer>12:34PM Read</ChatBubble.Footer>
    </ChatBubble>
  </Theme>
);

describe('ChatBubble', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render ChatBubble component', () => {
    const { getByTestId } = render(<TestChatBubble direction="left" />);

    expect(getByTestId('chat-bubble'));
    expect(getByTestId('chat-bubble')).toMatchSnapshot();
  });

  it('should render ChatBubble component', () => {
    const { getByTestId } = render(<TestChatBubble direction="left" />);

    expect(getByTestId('chat-bubble-content'));
    expect(getByTestId('chat-bubble-content').className).toContain('cutomer-class');
  });

  it('should render ChatBubble component', () => {
    const { getByTestId } = render(<TestChatBubble direction="left" />);

    expect(getByTestId('chat-bubble-content'));
    expect(getByTestId('chat-bubble-content').getAttribute('itemID')).toEqual('chat-content');
  });
});
