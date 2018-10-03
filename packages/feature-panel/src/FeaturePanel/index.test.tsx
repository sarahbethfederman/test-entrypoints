import * as React from 'react';
import * as Enzyme from 'enzyme';
import { FeaturePanel } from '.';
import { FeatureItemWrapper } from './index.style';
import { CashFlow } from '@lendi-ui/icon';

describe('Feature Panel', () => {
  it('should render with two feature items', () => {
    const result = Enzyme.shallow(
      <FeaturePanel>
        <FeaturePanel.Item
          title={'Choose from 35+ lenders'}
          subtitle={'It pays to shop around. We match you with the right loan for your specific needs and preferences.'}
          icon={<CashFlow />}
        />
        <FeaturePanel.Item
          title={'Choose from 35+ lenders'}
          subtitle={
            "Sit back and relax. Once you've chosen your loan, we'll submit, package and guide it all the way to settlement."
          }
          icon={<CashFlow />}
        />
      </FeaturePanel>
    );
    const featureWrapper = result.find(FeatureItemWrapper);
    expect(featureWrapper).toHaveLength(2);
  });
});
