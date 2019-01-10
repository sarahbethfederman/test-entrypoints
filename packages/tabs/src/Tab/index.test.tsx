import * as React from 'react';
import * as Enzyme from 'enzyme';
import { Tab } from './index';
import { Lock } from '@lendi-ui/icon';
import Theme from '@lendi-ui/theme';

let mockOnClick;
let tab;
let wrapper;

function render(props) {
  mockOnClick = jest.fn();
  wrapper = Enzyme.mount(
    <Theme>
      <Tab {...props} />
    </Theme>
  );
  tab = wrapper.find('Tabs');
}

describe('Tab', () => {
  it('should render a tab', () => {
    render({ icon: <Lock color="secondary.500" /> });
    expect(tab).toBeTruthy();
  });

  it('should render without any mandatory props', () => {
    render({});
    expect(tab).toBeTruthy();
  });
});
