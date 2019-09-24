import * as React from 'react';
import { TabWrapperBtn, TabWrapperA } from './index.style';
import { IconProps } from '@lendi-ui/icon';
import TabContext, { TabContextState } from '../TabContext';

export interface TabProps {
  icon?: React.ReactElement<IconProps>;
  index?: number;
  href?: string;
}

export const Tab: React.FunctionComponent<TabProps> = ({ icon = '', index = 0, children, href }) => {
  const TabWrapper = href ? TabWrapperA : TabWrapperBtn;
  return (
    <TabContext.Consumer>
      {(state: TabContextState) => {
        const isSelected = state.selectedIndex === index;
        const tabCount = state.tabCount;
        const onClick = state.onClick;
        return (
          <TabWrapper isSelected={isSelected} tabCount={tabCount} onClick={() => onClick(index)} href={href}>
            <div>{icon}</div>
            <div>{children}</div>
          </TabWrapper>
        );
      }}
    </TabContext.Consumer>
  );
};
