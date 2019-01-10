import * as React from 'react';
import { TabWrapper } from './index.style';
import { IconProps } from '@lendi-ui/icon';
import TabContext, { TabContextState } from '../TabContext';

export interface TabProps {
  icon?: React.ReactElement<IconProps>;
  index?: number;
}

export const Tab: React.SFC<TabProps> = ({ icon = '', index = 0, children }) => (
  <TabContext.Consumer>
    {(state: TabContextState) => {
      const isSelected = state.selectedIndex === index;
      const tabCount = state.tabCount;
      const onClick = state.onClick;
      return (
        <TabWrapper isSelected={isSelected} tabCount={tabCount} onClick={() => onClick(index)}>
          <div>{icon}</div>
          <div>{children}</div>
        </TabWrapper>
      );
    }}
  </TabContext.Consumer>
);
