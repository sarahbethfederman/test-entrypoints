import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Theme from '@lendi-ui/theme';
import Icon from '@lendi-ui/icon';

import FeaturePanel from '.';

storiesOf('Components', module).add('FeaturePanel', () => (
  <Theme>
    <FeaturePanel>
      <FeaturePanel.Item
        title={'Choose from 35+ lenders'}
        subtitle={'It pays to shop around. We match you with the right loan for your specific needs and preferences.'}
        icon={<Icon name="smart-tech-platform-home" />}
      />
      <FeaturePanel.Item
        title={'We do the heavy lifting'}
        subtitle={
          "Sit back and relax. Once you've chosen your loan, we'll submit, package and guide it all the way to settlement."
        }
        icon={<Icon name="smart-tech-platform-home" />}
      />
      <FeaturePanel.Item
        title={'Ask us anything'}
        subtitle={
          "There is no such thing as a stupid question. We're here to share unlimited advice every step of the way."
        }
        icon={<Icon name="smart-tech-platform-home" />}
      />
      <FeaturePanel.Item
        title={'Easy online tools'}
        subtitle={"Upload your documents online and get approved faster. You can check your loan's progress 24/7."}
        icon={<Icon name="smart-tech-platform-home" />}
      />
    </FeaturePanel>
  </Theme>
));
