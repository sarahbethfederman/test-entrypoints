import * as React from 'react';
import { TabWrapperBtn, TabWrapperA, TabActiveBar } from './index.style';
import { IconProps } from '@lendi-ui/icon';
import TabContext, { TabContextState } from '../TabContext';
import { LUIGlobalProps } from '@lendi-ui/utils';

export interface TabProps extends LUIGlobalProps {
  icon?: React.ReactElement<IconProps>;
  index?: number;
  href?: string;
}

export const Tab: React.FunctionComponent<TabProps> = ({ icon, index = 0, children, href, ...otherTabProps }) => {
  const TabWrapper = href ? TabWrapperA : TabWrapperBtn;
  return (
    <TabContext.Consumer>
      {(state: TabContextState) => {
        const isSelected = state.selectedIndex === index;
        const onClick = state.onClick;
        const styles = state.styles;
        return (
          <TabWrapper
            onClick={() => onClick(index)}
            href={href}
            {...otherTabProps}
            role="tab"
            aria-selected={isSelected}
          >
            {icon && <React.Fragment>{icon}</React.Fragment>}
            <React.Fragment>{children}</React.Fragment>
            <TabActiveBar isSelected={isSelected} styles={styles} />
          </TabWrapper>
        );
      }}
    </TabContext.Consumer>
  );
};
