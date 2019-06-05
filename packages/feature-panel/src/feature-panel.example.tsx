import * as React from 'react';
import { FeaturePanel } from '.';
import { Lock } from '@lendi-ui/icon';

export default () => (
  <>
    <FeaturePanel title="Aria Attributes" aria-label="aria label" className="fakeClass" id="myId">
      <FeaturePanel.Item
        icon={<Lock color="primary.500" />}
        title="Choose from 35+ lenders"
        subtitle="It pays to shop around. We match you with the right loan for your specific needs and preferences."
      />
      <FeaturePanel.Item
        icon={<Lock color="primary.500" />}
        title="We do the heavy lifting"
        subtitle="Sit back and relax. Once you've chosen your loan, we'll submit, package and guide it all the way to settlement."
      />
    </FeaturePanel>
  </>
);
