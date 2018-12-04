import * as React from 'react';
import { FeatureItemProps, FeatureItem } from '../FeatureItem';
import { Wrapper, FeatureItemWrapper } from './index.style';

export interface FeaturePanelProps {
  children?: React.ReactElement<FeatureItemProps> | React.ReactElement<FeatureItemProps>[];
}

export class FeaturePanel extends React.Component<FeaturePanelProps> {
  static Item = FeatureItem;

  render() {
    const { children } = this.props;
    return (
      <Wrapper>
        {React.Children.map(children, (child) => {
          return <FeatureItemWrapper>{child}</FeatureItemWrapper>;
        })}
      </Wrapper>
    );
  }
}
