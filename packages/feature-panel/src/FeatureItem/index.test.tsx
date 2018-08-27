import * as React from 'react';
import * as Enzyme from 'enzyme';
import { FeatureItem, Title } from '.';
import Icon from '@lendi-ui/icon';

describe('Feature Item', () => {
  it('should render without title', () => {
    const el = Enzyme.shallow(<FeatureItem subtitle="subtitle" icon="ℹ️" />);
    expect(el.find(Title).exists()).toBeFalsy();
  });
  it('should render with title', () => {
    const el = Enzyme.shallow(<FeatureItem title="title" subtitle="subtitle" icon="ℹ️" />);
    expect(el.find(Title).exists()).toBeTruthy();
  });
});
