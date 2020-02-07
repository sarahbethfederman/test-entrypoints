import { LUIGlobalProps } from '@lendi-ui/utils';

export type Direction = 'left' | 'right';

export interface ChatBubbleContentProps extends LUIGlobalProps {}

export interface ChatBubbleFooterProps extends LUIGlobalProps {}

export interface SidebarCompoundComponent {
  Content: React.FunctionComponent<ChatBubbleContentProps>;
  Footer: React.FunctionComponent<ChatBubbleFooterProps>;
}

export interface ChatBubbleProps extends LUIGlobalProps {
  direction?: Direction;
}
