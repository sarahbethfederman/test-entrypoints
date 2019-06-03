import * as React from 'react';
import * as Enzyme from 'enzyme';
import Theme from '@lendi-ui/theme';
import { FeaturePanel } from '.';
import { FeatureItemWrapper } from './index.style';
import { CashFlow } from '@lendi-ui/icon';

let wrapper;
function render(props) {
  wrapper = Enzyme.mount(
    <Theme>
      <FeaturePanel {...props}>
        <FeaturePanel.Item
          title={'Choose from 35+ lenders'}
          subtitle={'It pays to shop around. We match you with the right loan for your specific needs and preferences.'}
          icon={<CashFlow color="primary.500" />}
        />
        <FeaturePanel.Item
          title={'Choose from 35+ lenders'}
          subtitle={
            "Sit back and relax. Once you've chosen your loan, we'll submit, package and guide it all the way to settlement."
          }
          icon={<CashFlow color="primary.500" />}
        />
      </FeaturePanel>
    </Theme>
  );
}

describe('Feature Panel', () => {
  it('should render with two feature items', () => {
    render({});
    const featureWrapper = wrapper.find(FeatureItemWrapper);
    expect(featureWrapper).toHaveLength(2);
  });
});

describe('test native props and Standard HTML Attributes', () => {
  it('should mount with Aria attributes', () => {
    const ARIA_LABEL = 'testLabel';
    const ARIA_DESCRIBE_BY = 'info';
    render({ 'aria-label': ARIA_LABEL, 'aria-describedby': ARIA_DESCRIBE_BY });
    const featurePanelAttributes = wrapper.find(FeaturePanel).props();
    expect(featurePanelAttributes['aria-label']).toBe(ARIA_LABEL);
    expect(featurePanelAttributes['aria-describedby']).toBe(ARIA_DESCRIBE_BY);
  });
  it('should mount with native props like id, tabIndex', () => {
    const TEXT_ID = 'testId';
    render({
      id: TEXT_ID,
      tabIndex: 1,
    });
    const featurePanelAttributes = wrapper.find(FeaturePanel).props();
    expect(featurePanelAttributes.id).toBe(TEXT_ID);
    expect(featurePanelAttributes.tabIndex).toBe(1);
  });
});
