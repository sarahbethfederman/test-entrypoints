import * as React from 'react';
import { FeatureItemProps, FeatureItem } from '../FeatureItem';
import { Wrapper, FeatureItemWrapper } from './index.style';
import { LUIGlobalProps } from '@lendi-ui/utils';
export interface FeaturePanelProps extends LUIGlobalProps {
  children?: React.ReactElement<FeatureItemProps> | React.ReactElement<FeatureItemProps>[];
}

export class FeaturePanel extends React.Component<FeaturePanelProps> {
  static Item = FeatureItem;

  render() {
    const { children, ...otherProps } = this.props;
    return (
      <Wrapper {...otherProps}>
        {React.Children.map(children, (child) => {
          return <FeatureItemWrapper>{child}</FeatureItemWrapper>;
        })}
      </Wrapper>
    );
  }
}
